"use client";

import { useEffect, useState } from "react";

export default function NameBanner() {
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 550);
    return () => clearInterval(id);
  }, []);

  return (
    <h1
      style={{
        fontSize: "78px",
        marginBottom: "12px",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        letterSpacing: "-0.5px",
        color: "#22c55e",
        textAlign: "center",
        }}
    >

      Ajita Bhardwaj
      <span
        style={{
          color: "#e5e7eb",
          marginLeft: "6px",
          display: "inline-block",
          width: "10px",
          opacity: cursorOn ? 1 : 0,
        }}
      >
        ▍
      </span>
    </h1>
  );
}
