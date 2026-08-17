import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// D25 preview: enable Next.js draft mode so pages read via previewClient (previewDrafts).
// NOTE: before production, gate this with a Sanity preview secret / next-sanity Presentation.
export async function GET(req) {
  (await draftMode()).enable();
  redirect(req.nextUrl.searchParams.get("redirect") || "/");
}
