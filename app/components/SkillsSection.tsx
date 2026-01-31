export default function SkillsSection({
    cardStyle,
  }: {
    cardStyle: React.CSSProperties;
  }) {
    return (
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
    );
  }
  