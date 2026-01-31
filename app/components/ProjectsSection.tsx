export default function ProjectsSection({
    cardStyle,
  }: {
    cardStyle: React.CSSProperties;
  }) {
    return (
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
    );
  }
  