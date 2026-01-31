export default function ExperienceSection({
    cardStyle,
  }: {
    cardStyle: React.CSSProperties;
  }) {
    return (
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
    );
  }
  