export default function ContactSection({
  cardStyle,
}: {
  cardStyle: React.CSSProperties;
}) {
  const green = "#22c55e";
  const text = "#d1d5db";
  const muted = "#9ca3af";
  const border = "rgba(255,255,255,0.10)";

  const primaryPill: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "10px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(34,197,94,0.35)",
    background:
      "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(255,255,255,0.05))",
    color: "#e5e7eb",
    textDecoration: "none",
    boxShadow: "0 0 0 1px rgba(34,197,94,0.10) inset",
  };

  const secondaryPill: React.CSSProperties = {
    ...primaryPill,
    border: `1px solid ${border}`,
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
  };

  return (
    <section
      id="contact"
      style={{
        ...cardStyle,
        textAlign: "center",
        marginTop: "72px", // spacing from previous section
      }}
    >
      <h2 style={{ marginTop: 0 }}></h2>

      <p style={{ marginTop: "8px", marginBottom: "16px", color: text }}>
        Open to roles, projects, and collaborations. Reach out if something here
        aligns.
      </p>

      <div
        style={{
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          fontSize: "14px",
          marginBottom: "18px",
        }}
      >
        <div style={{ color: green, marginBottom: "6px" }}>
          $ echo "connect"
        </div>

        <div style={{ color: text, marginBottom: "6px" }}>
          <span style={{ color: muted }}>Email:</span>{" "}
          <span style={{ color: "#e5e7eb" }}>abhard46@asu.edu</span>
        </div>

        <div style={{ color: text, marginBottom: "6px" }}>
          <span style={{ color: muted }}>LinkedIn:</span>{" "}
          <span style={{ color: "#e5e7eb" }}>ajitabhardwaj</span>
        </div>

        <div style={{ color: text }}>
          <span style={{ color: muted }}>Phone:</span>{" "}
          <span style={{ color: "#e5e7eb" }}>+1 (XXX) XXX-XXXX</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <a href="mailto:abhard46@asu.edu" style={primaryPill}>
          <span style={{ color: green }}>●</span> Email
        </a>

        <a
          href="https://www.linkedin.com/in/ajitabhardwaj/"
          target="_blank"
          rel="noopener noreferrer"
          style={secondaryPill}
        >
          <span style={{ color: green }}>↗</span> LinkedIn
        </a>

        <a href="tel:+1XXXXXXXXXX" style={secondaryPill}>
          <span style={{ color: green }}>☎</span> Call
        </a>
      </div>

      <p
        style={{
          marginTop: "18px",
          marginBottom: 0,
          color: muted,
          fontSize: "13px",
        }}
      >
        Thanks for stopping by. If you are building something meaningful, I am
        happy to talk.
      </p>
    </section>
  );
}
