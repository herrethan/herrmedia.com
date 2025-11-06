import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string }> }
) {
  const { path } = await params;
  return NextResponse.redirect(new URL(`/projects/${path}/index.html`, request.url));
}

