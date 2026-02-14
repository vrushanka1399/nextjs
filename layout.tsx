import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "#222",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white" }}>Products Store</h1>

          <nav>
            <Link href="/" style={{ color: "white", marginRight: "15px" }}>
              Home
            </Link>
            <Link href="/products" style={{ color: "white" }}>
              Products
            </Link>
          </nav>
        </header>

        <main style={{ padding: "20px", minHeight: "80vh" }}>
          {children}
        </main>

        <footer
          style={{
            backgroundColor: "#222",
            color: "white",
            padding: "10px",
            textAlign: "center",
          }}
        >
          © 2026 Products Store
        </footer>
      </body>
    </html>
  );
}
