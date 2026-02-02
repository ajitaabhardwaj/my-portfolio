import type React from "react";

export default function SectionDivider({
  space = 40,
}: {
  space?: number;
}) {
  return (
    <div
      style={{
        height: "1px",
        width: "100%",
        margin: `${space}px 0`,
        background:
          "linear-gradient(to right, transparent, rgba(148,163,184,0.25), transparent)",
      }}
    />
  );
}
