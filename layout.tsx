import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main
          style={{
            padding: "20px",
            minHeight: "80vh",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {children}
        </main>

        <footer
          style={{
            backgroundColor: "#111",
            color: "white",
            textAlign: "center",
            padding: "15px",
          }}
        >
          © 2026 Products Store
        </footer>

      </body>
    </html>
  );
}
