import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req) {
  (await draftMode()).disable();
  redirect(req.nextUrl.searchParams.get("redirect") || "/");
}
