export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "#222",
            color: "white",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h1>Products Store</h1>
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
