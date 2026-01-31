import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Summary() {
  const linkPillStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 14px",
    borderRadius: "10px",
    textDecoration: "none",
    background: "rgba(34,197,94,0.75)",
    color: "#052e16",
    border: "1px solid rgba(255,255,255,0.10)",
  };

  const resumePillStyle: React.CSSProperties = {
    ...linkPillStyle,
    color: "#e6e8eb",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    fontWeight: 500,
  };

  return (
    <div style={{ marginBottom: "22px" }}>
      <p
        style={{
          fontSize: "18px",
          color: "rgba(34,197,94,0.25)",
          marginBottom: "16px",
        }}
      >
        Developer | MS CS at Arizona State University
      </p>

      <p
        style={{
          maxWidth: "700px",
          lineHeight: "1.6",
          color: "#b6bcc6",
          marginTop: 0,
        }}
      >
        Backend and systems-focused engineer with 2+ years of industry
        experience. Building scalable automation, distributed pipelines, and
        ML-adjacent systems.
      </p>

      {/* LINKS */}
      <div
        style={{
          marginTop: "22px",
          display: "flex",
          gap: "14px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://github.com/ajitaabhardwaj"
          target="_blank"
          rel="noopener noreferrer"
          style={linkPillStyle}
        >
          <Github size={18} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ajitabhardwaj/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkPillStyle}
        >
          <Linkedin size={18} />
          LinkedIn
        </a>

        <a href="mailto:abhard46@asu.edu" style={linkPillStyle}>
          <Mail size={18} />
          Email
        </a>

        <a
          href="/Ajita_Bhardwaj_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={resumePillStyle}
        >
          <FileText size={18} />
          Resume
        </a>
      </div>
    </div>
  );
}
