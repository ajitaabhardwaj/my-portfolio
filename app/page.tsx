export default function Home() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 24px" }}>
      {/* HERO */}
      <section style={{ textAlign: "center", marginBottom: "64px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "12px" }}>
          Ajita Bhardwaj
        </h1>

        <p style={{ fontSize: "18px", color: "#555", marginBottom: "16px" }}>
          Software Engineer | MS CS at Arizona State University
        </p>

        <p style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
          Backend and systems-focused engineer with 2+ years of industry
          experience. Building scalable automation, distributed pipelines, and
          ML-adjacent systems.
        </p>

        <div style={{ marginTop: "24px", display: "flex", gap: "16px", justifyContent: "center" }}>
          <a href="https://github.com/ajitaabhardwaj">GitHub</a>
          <a href="https://www.linkedin.com/in/ajitabhardwaj/">LinkedIn</a>
          <a href="mailto:abhard46@asu.edu">Email</a>
          <a href="/Ajita_Bhardwaj_Resume.pdf">Resume</a>
        </div>
      </section>

      {/* TERMINAL (STATIC FOR NOW) */}
      <section
        style={{
          background: "#0f172a",
          color: "#e5e7eb",
          padding: "24px",
          borderRadius: "8px",
          fontFamily: "monospace",
          marginBottom: "64px",
        }}
      >
        <p>$ whoami</p>
        <p>Software Engineer | Systems & Backend</p>
        <br />

        <p>$ cat focus.txt</p>
        <p>- Backend APIs and automation</p>
        <p>- Cloud and infrastructure systems</p>
        <p>- Distributed data and ML pipelines</p>
        <br />

        <p>$ ls projects/</p>
        <p>automation-at-scale</p>
        <p>rag-code-system</p>
        <p>distributed-data-pipeline</p>
        <p>ml-classification</p>
      </section>

      {/* SKILLS SNAPSHOT */}
      <section style={{ marginBottom: "64px" }}>
        <h2>Skills</h2>

        <ul>
          <li><strong>Languages:</strong> Python, Java, C++, SQL</li>
          <li><strong>Backend:</strong> FastAPI, Flask, REST APIs</li>
          <li><strong>Systems & Cloud:</strong> Linux, Docker, Kubernetes, AWS, Azure, Terraform</li>
          <li><strong>Data & ML:</strong> Kafka, Neo4j, PyTorch, Scikit-learn</li>
        </ul>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section style={{ marginBottom: "64px" }}>
        <h2>Experience</h2>

        <p>
          <strong>Developer — Fastenal India (2022–2024)</strong><br />
          Automation pipelines, patching, and cloud infrastructure at scale
          across 1,500+ Linux servers.
        </p>

        <p>
          <strong>NLP Intern — IDX Exchange (2025–Present)</strong><br />
          Text-to-SQL systems using LLMs with FastAPI and MySQL backend.
        </p>
      </section>

      {/* PROJECTS PREVIEW */}
      <section style={{ marginBottom: "64px" }}>
        <h2>Selected Projects</h2>

        <ul>
          <li>Graph-based Data Processing and Scalable Data Pipeline</li>
          <li>Retrieval-Augmented Generation (RAG) System for Code</li>
          <li>Distributed ML Pipelines on Kubernetes</li>
          <li>Automation Systems for Large-scale Infrastructure</li>
        </ul>

        <a href="/projects">View all projects →</a>
      </section>

      {/* CONTACT */}
      <section>
        <h2>Contact</h2>
        <p>
          If you’d like to discuss opportunities, projects, or collaborations,
          feel free to reach out.
        </p>

        <p>Email: <a href="mailto:abhard46@asu.edu">abhard46@asu.edu</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ajitabhardwaj/">ajitabhardwaj</a></p>
      </section>
    </main>
  );
}
