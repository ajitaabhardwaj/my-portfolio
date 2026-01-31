import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajita Bhardwaj | Portfolio",
  description: "Software engineer, systems and backend, MS CS at ASU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(11,14,17,0.85)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              padding: "14px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <a
              href="/"
              style={{
                color: "#d7dbe0",
                textDecoration: "none",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              Ajita
            </a>

            <nav style={{ display: "flex", gap: "16px" }}>
              <a href="/" style={{ color: "#d7dbe0", textDecoration: "none" }}>
                Home
              </a>
              <a href="/projects" style={{ color: "#d7dbe0", textDecoration: "none" }}>
                Projects
              </a>
              <a href="/resume" style={{ color: "#d7dbe0", textDecoration: "none" }}>
                Resume
              </a>
              <a href="#contact" style={{ color: "#d7dbe0", textDecoration: "none" }}>
                Contact
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "24px",
            textAlign: "center",
            color: "#888",
          }}
        >
          <small>© {new Date().getFullYear()} Ajita Bhardwaj</small>
        </footer>
      </body>
    </html>
  );
}
