import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajita-Portfolio",
  description: "Ajita Bhardwaj. Portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "16px", borderBottom: "1px solid #e5e5e5" }}>
          <nav style={{ display: "flex", gap: "12px" }}>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/resume">Resume</a>
          </nav>
        </header>

        <main style={{ padding: "24px" }}>{children}</main>

        <footer style={{ padding: "16px", borderTop: "1px solid #e5e5e5" }}>
          <small>© {new Date().getFullYear()} Ajita</small>
        </footer>
      </body>
    </html>
  );
}
