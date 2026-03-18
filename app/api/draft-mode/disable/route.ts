import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  (await draftMode()).disable();

  const url = new URL(request.url);
  const slug = url.searchParams.get("slug") || "/";

  redirect(slug);
}
