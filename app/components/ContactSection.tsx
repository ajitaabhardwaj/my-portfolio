export default function ContactSection({
    cardStyle,
  }: {
    cardStyle: React.CSSProperties;
  }) {
    return (
      <section id="contact" style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Contact</h2>
  
        <p style={{ marginTop: 0 }}>
          If you’d like to discuss opportunities, projects, or collaborations, feel
          free to reach out.
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
    );
  }
  