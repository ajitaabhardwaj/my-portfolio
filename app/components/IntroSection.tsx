"use client";

import { useEffect, useState } from "react";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import TerminalCard from "./TerminalCard";

const basePill =
  "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm no-underline border transition-colors";

const greenPill =
  basePill +
  " bg-green-500 text-green-950 border-white/10 hover:bg-green-600";

const neutralPill =
  basePill +
  " bg-white/[0.06] text-white/85 border-white/15 hover:bg-white/[0.10]";

export default function IntroSection() {
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 550);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full px-6 pt-12 pb-4 sm:px-10 lg:px-16 lg:pt-16 lg:pb-6">
      {/* HEADER */}
      <div className="mx-auto w-full max-w-[820px]">
        <div className="grid w-full items-center gap-6 lg:grid-cols-[auto_180px]">
          {/* LEFT */}
          <div className="min-w-0">
            {/* Shared column to guarantee same left edge */}
            <div className="flex flex-col items-start">
              {/* NAME */}
              <h1 className="mb-5 font-mono leading-none tracking-tight text-green-500 text-6xl sm:text-7xl lg:text-8xl xl:text-[92px]">
                Ajita Bhardwaj
                <span
                  className={`ml-2 inline-block transition-opacity ${
                    cursorOn ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                >
                  _
                </span>
              </h1>

              {/* LINKS */}
              <div className="flex flex-wrap items-center gap-3 -ml-[6px]">

                <a
                  href="https://github.com/ajitaabhardwaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={neutralPill}
                >
                  <Github size={18} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/ajitabhardwaj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={neutralPill}
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>

                <a href="mailto:abhard46@asu.edu" className={neutralPill}>
                  <Mail size={18} />
                  Email
                </a>

                <a
                  href="/Ajita_Bhardwaj_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={greenPill}
                >
                  <FileText size={18} />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-start">
            <img
              src="/profile.jpeg"
              alt="Ajita Bhardwaj"
              className="h-[145px] w-[145px] rounded-full object-cover
           border-5 border-black
           shadow-[0_0_0_1px_rgba(34,197,94,1),0_10px_30px_rgba(0,0,0,0.6)]"

              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* TERMINAL */}
      <div className="mx-auto mt-4 w-full max-w-[960px]">
        <TerminalCard />
      </div>
    </section>
  );
}
