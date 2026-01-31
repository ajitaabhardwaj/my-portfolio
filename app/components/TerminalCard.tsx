"use client";

import { useEffect, useState } from "react";

const lines = [
  "$ whoami",
  "Software Engineer | Systems & Backend",
  "",
  "$ cat focus.txt",
  "- Backend APIs and automation",
  "- Cloud and infrastructure systems",
  "- Distributed data and ML pipelines",
  "",
  "$ ls projects/",
  "automation-at-scale",
  "rag-code-system",
  "distributed-data-pipeline",
  "ml-classification",
];

export default function TerminalCard() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const timeout = setTimeout(() => {
      setDisplayed((prev) => [...prev, lines[lineIndex]]);
      setLineIndex((prev) => prev + 1);
    }, 180);

    return () => clearTimeout(timeout);
  }, [lineIndex]);

  return (
    <section
      style={{
        background: "rgba(15,18,26,0.75)",
        color: "#c7ccd4",
        padding: "24px",
        borderRadius: "8px",
        fontFamily: "monospace",
        marginBottom: "64px",
        whiteSpace: "pre-wrap",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
        fontSize: "14.5px",
        lineHeight: "1.55",
      }}
    >
      {displayed.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </section>
  );
}
