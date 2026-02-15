import Link from "next/link";
import { cookies } from "next/headers";

export default function Header() {
  const auth = cookies().get("auth");

  return (
    <header
      style={{
        backgroundColor: "#111",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link href="/products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>
      </div>

      {auth ? (
        <form action="/api/logout" method="post">
          <button type="submit">Logout</button>
        </form>
      ) : (
        <Link href="/login" style={{ color: "white", textDecoration: "none" }}>
          Login
        </Link>
      )}
    </header>
  );
}
