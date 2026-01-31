import type React from "react";

import IntroSection from "./components/IntroSection";
import TerminalCard from "./components/TerminalCard";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const cardStyle: React.CSSProperties = {
    marginBottom: "24px",
    padding: "22px",
    borderRadius: "12px",
    background: "rgba(2,6,23,0.45)",
    border: "1px solid rgba(255,255,255,0.10)",
  };

  return (
    <main style={{ padding: "64px 24px" }}>
      <IntroSection />

      {/* TERMINAL */}
      <div style={{ marginBottom: "28px" }}>
        <TerminalCard />
      </div>

      {/* SECTIONS */}
      <SkillsSection cardStyle={cardStyle} />
      <ExperienceSection cardStyle={cardStyle} />
      <ProjectsSection cardStyle={cardStyle} />
      <ContactSection cardStyle={cardStyle} />
    </main>
  );
}
