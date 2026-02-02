import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajita Bhardwaj | Portfolio",
  description: "Software engineer, systems and backend, MS CS at ASU.",
};

const navLink: React.CSSProperties = {
  color: "rgba(215,219,224,0.88)",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "13.5px",
  padding: "0px", // no button feel
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              html { scroll-behavior: smooth; }
              section { scroll-margin-top: 90px; }

              /* nav hover, no bubbles */
              .topNav a:hover {
                color: #e5e7eb;
                text-decoration: underline;
                text-underline-offset: 6px;
                text-decoration-thickness: 1px;
                text-decoration-color: rgba(34,197,94,0.75);
              }
            `,
          }}
        />

        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(11,14,17,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "12px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            {/* Brand */}
            <a
              href="#home"
              style={{
                color: "#d7dbe0",
                textDecoration: "none",
                fontWeight: 700,
                letterSpacing: "0.4px",
                fontSize: "14px",
                padding: "6px 8px",
                borderRadius: "10px",
              }}
            >
              Ajita<span style={{ color: "#22c55e" }}>.</span>
            </a>

            {/* Nav */}
            <nav
              className="topNav"
              style={{
                display: "flex",
                gap: "18px",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <a href="#home" style={navLink}>
                Home
              </a>
              <a href="#skills" style={navLink}>
                Skills
              </a>
              <a href="#experience" style={navLink}>
                Education
              </a>
              <a href="#experience" style={navLink}>
                Experience
              </a>
              <a href="#projects" style={navLink}>
                Projects
              </a>
              <a href="#contact" style={navLink}>
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
            color: "rgba(215,219,224,0.55)",
          }}
        >
          <small>© {new Date().getFullYear()} Ajita Bhardwaj</small>
        </footer>
      </body>
    </html>
  );
}
