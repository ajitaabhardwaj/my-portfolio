import NameBanner from "./components/NameBanner";
import TerminalCard from "./components/TerminalCard";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Home() {
  const cardStyle: React.CSSProperties = {
    marginBottom: "24px",
    padding: "22px",
    borderRadius: "12px",
    background: "rgba(2,6,23,0.45)",
    border: "1px solid rgba(255,255,255,0.10)",
  };

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
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 24px" }}>
      {/* HERO */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
          marginBottom: "44px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT: TEXT */}
        <div style={{ flex: "1 1 520px", textAlign: "left" }}>
          <NameBanner />

          <p style={{ fontSize: "18px", color: "rgba(34,197,94,0.30)", marginBottom: "16px" }}>
            Software Engineer | MS CS at Arizona State University
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

          <div
            style={{
              marginTop: "22px",
              display: "flex",
              gap: "14px",
              justifyContent: "flex-start",
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

        {/* RIGHT: PHOTO */}
        <div style={{ flex: "0 0 220px", display: "flex", justifyContent: "center" }}>
          <img
            src="/profile.jpeg"
            alt="Ajita Bhardwaj"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "18px",
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
            }}
          />
        </div>
      </section>

      {/* TERMINAL */}
      <div style={{ marginBottom: "28px" }}>
        <TerminalCard />
      </div>

      {/* SKILLS SNAPSHOT */}
      <section style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Skills</h2>
        <ul style={{ marginBottom: 0, lineHeight: "1.8" }}>
          <li>
            <strong>Languages:</strong> Python, Java, C++, SQL
          </li>
          <li>
            <strong>Backend:</strong> FastAPI, Flask, REST APIs
          </li>
          <li>
            <strong>Systems & Cloud:</strong> Linux, Docker, Kubernetes, AWS, Azure,
            Terraform
          </li>
          <li>
            <strong>Data & ML:</strong> Kafka, Neo4j, PyTorch, Scikit-learn
          </li>
        </ul>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Experience</h2>

        <p style={{ marginBottom: "14px" }}>
          <strong>Developer — Fastenal India (2022–2024)</strong>
          <br />
          Automation pipelines, patching, and cloud infrastructure at scale across
          1,500+ Linux servers.
        </p>

        <p style={{ marginBottom: 0 }}>
          <strong>NLP Intern — IDX Exchange (2025–Present)</strong>
          <br />
          Text-to-SQL systems using LLMs with FastAPI and MySQL backend.
        </p>
      </section>

      {/* PROJECTS PREVIEW */}
      <section style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Selected Projects</h2>

        <ul style={{ marginBottom: "12px", lineHeight: "1.8" }}>
          <li>Graph-based Data Processing and Scalable Data Pipeline</li>
          <li>Retrieval-Augmented Generation (RAG) System for Code</li>
          <li>Distributed ML Pipelines on Kubernetes</li>
          <li>Automation Systems for Large-scale Infrastructure</li>
        </ul>

        <a href="/projects" style={{ color: "#22c55e", textDecoration: "none" }}>
          View all projects →
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Contact</h2>

        <p style={{ marginTop: 0 }}>
          If you’d like to discuss opportunities, projects, or collaborations,
          feel free to reach out.
        </p>

        <p style={{ marginBottom: "8px" }}>
          Email:{" "}
          <a
            href="mailto:abhard46@asu.edu"
            style={{ color: "#cfd4da", textDecoration: "underline" }}
          >
            abhard46@asu.edu
          </a>
        </p>

        <p style={{ marginBottom: 0 }}>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ajitabhardwaj/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#e5e7eb", textDecoration: "underline" }}
          >
            ajitabhardwaj
          </a>
        </p>
      </section>
    </main>
  );
}
