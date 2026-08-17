import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// D25: Sanity webhook -> on-demand revalidation, replacing the 1h ISR wait.
// Configure a Sanity GROQ-powered webhook (POST) to /api/revalidate?secret=... with a
// projection that includes _type. Secret lives in SANITY_REVALIDATE_SECRET.
const ROUTES_BY_TYPE = {
  services: ["/services", "/services/[slug]"],
  solutions: ["/solutions", "/solutions/[slug]"],
  industries: ["/case-studies", "/solutions"],
  technology: ["/case-studies"],
  capability: ["/case-studies"],
  caseStudies: ["/", "/case-studies", "/case-studies/[slug]"],
  blog: ["/blog", "/blog/[slug]"],
  author: ["/blog", "/blog/[slug]"],
  legalPage: ["/legal", "/legal/[slug]"],
};

export async function POST(req) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const type = body?._type;
  const paths = ROUTES_BY_TYPE[type] || ["/"];
  for (const p of paths) revalidatePath(p, "page");
  return NextResponse.json({ revalidated: true, type: type || null, paths });
}
