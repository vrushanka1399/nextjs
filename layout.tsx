import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* Header */}
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
            <img
              src="/logo.png"
              alt="Logo"
              style={{ height: "40px" }}
            />
            <h2 style={{ margin: 0 }}>Products Store</h2>
          </div>

          {/* Navigation */}
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/products" style={{ color: "white", textDecoration: "none" }}>
              Products
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main style={{ padding: "20px", minHeight: "80vh" }}>
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "#222",
            color: "white",
            textAlign: "center",
            padding: "10px",
          }}
        >
          © 2026 Products Store. All rights reserved.
        </footer>

      </body>
    </html>
  );
}
