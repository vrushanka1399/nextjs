"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header
      style={{
        backgroundColor: "#111",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo + Title */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="/logo.png" alt="Logo" style={{ height: "40px" }} />
        <h2 style={{ margin: 0 }}>Products Store</h2>
      </div>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link href="/" style={{ color: "white" }}>
          Home
        </Link>
        <Link href="/products" style={{ color: "white" }}>
          Products
        </Link>

        {session ? (
          <>
            <span>{session.user?.email}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" style={{ color: "white" }}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
