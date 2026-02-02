import type React from "react";

import IntroSection from "./components/IntroSection";
import TerminalCard from "./components/TerminalCard";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  const pageStyle: React.CSSProperties = {
    padding: "72px 24px",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1240px",
    margin: "0 auto",
  };

  const cardStyle: React.CSSProperties = {
    padding: "24px",
    borderRadius: "14px",
    background: "rgba(2,6,23,0.55)",
    border: "1px solid rgba(148,163,184,0.12)",
    backdropFilter: "blur(6px)",
  };

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <section id="home">
          <IntroSection />
        </section>

        <SectionDivider space={56} />

        <section id="skills">
          <SkillsSection />
        </section>

        <SectionDivider space={56} />

        <section id="experience">
          <ExperienceSection />
        </section>

        <SectionDivider space={56} />

        <section id="projects">
          <ProjectsSection />
        </section>

        <SectionDivider space={56} />

        <section id="contact">
          <ContactSection cardStyle={cardStyle} />
        </section>
      </div>
    </main>
  );
}
