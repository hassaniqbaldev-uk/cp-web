import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") || 6;
  const all = searchParams.get("all") === "true";

  const url = all
    ? `https://revuora.app/api/testimonials/public/featured?orgSlug=creativepixels&all=true`
    : `https://revuora.app/api/testimonials/public/featured?orgSlug=creativepixels&limit=${limit}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    return NextResponse.json([], { status: 200 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
