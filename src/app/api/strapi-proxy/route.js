import { NextResponse } from "next/server";
import { getCaseStudies } from "@/lib/strapi";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug"); // check if ?slug=... is passed

  try {
    // If slug is present, get a single case study; otherwise, get all
    const data = await getCaseStudies(slug);
    return NextResponse.json(data);
  } catch (error) {
    console.error("⚠️ Strapi proxy error:", error);
    return NextResponse.json({ data: [] }, { status: 500 });
  }
}
