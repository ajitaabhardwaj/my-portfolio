"use client";

import { useEffect, useState } from "react";

type NameBannerProps = {
  name?: string;
  className?: string;
};

export default function NameBanner({
  name = "Ajita Bhardwaj",
  className = "",
}: NameBannerProps) {
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 550);
    return () => clearInterval(id);
  }, []);

  return (
    <h1
      className={[
        "inline-block font-mono tracking-tight",
        "text-green-500 transition-opacity",
        "text-4xl sm:text-5xl lg:text-6xl xl:text-[78px]",
        "mb-3",
        className,
      ].join(" ")}
    >
      {name}
      <span
        className={[
          "ml-2 inline-block",
          "text-green-500 transition-opacity",
          cursorOn ? "opacity-100" : "opacity-0",
        ].join(" ")}
        aria-hidden="true"
      >
        _
      </span>
    </h1>
    
    
  );
}
