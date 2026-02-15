import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("auth");
  return NextResponse.redirect(new URL("/login", "http://localhost:3000"));
}
