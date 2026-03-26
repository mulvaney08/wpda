import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const pathsToRevalidate = [
  "/",
  "/about",
  "/classes",
  "/competitive",
  "/contact",
  "/gallery",
  "/join",
  "/team",
  "/wojtek"
] as const;

export async function POST(request: Request) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");

  if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, message: "Invalid secret" }, { status: 401 });
  }

  for (const path of pathsToRevalidate) {
    revalidatePath(path);
  }

  return NextResponse.json({ ok: true, revalidated: pathsToRevalidate.length, timestamp: Date.now() });
}

export async function GET(request: Request) {
  return POST(request);
}
