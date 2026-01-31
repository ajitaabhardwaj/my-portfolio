import NameBanner from "./NameBanner";
import Summary from "./Summary";

export default function IntroSection() {
  return (
    <section
      style={{
        width: "100%",
        padding: "72px 96px",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 260px",
          columnGap: "40px",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div>
          <NameBanner />
          <Summary />
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            src="/profile.jpeg"
            alt="Ajita Bhardwaj"
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "18px",
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.50)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
