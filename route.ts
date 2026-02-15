import { NextResponse } from "next/server";
import { createToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Dummy validation
  if (username === "admin" && password === "1234") {
    const token = await createToken({ username });

    const response = NextResponse.json({ message: "Login successful" });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60,
    });

    return response;
  }

  return NextResponse.json(
    { message: "Invalid credentials" },
    { status: 401 }
  );
}
