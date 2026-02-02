"use client";

import { useEffect, useRef, useState } from "react";

const LINE_DELAY = 520; // slow + readable
const BLOCK_DELAY = 820;

export default function TerminalCard() {
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const [readmeCmd, setReadmeCmd] = useState("");
  const [readmeLines, setReadmeLines] = useState<string[]>([]);

  const [whoamiCmd, setWhoamiCmd] = useState("");
  const [whoamiOut, setWhoamiOut] = useState("");

  const [statusCmd, setStatusCmd] = useState("");
  const [statusLines, setStatusLines] = useState<string[]>([]);

  const [uptimeCmd, setUptimeCmd] = useState("");
  const [uptimeOut, setUptimeOut] = useState("");

  const [finalComment, setFinalComment] = useState("");

  const sleep = (ms: number) =>
    new Promise<void>((res) => {
      setTimeout(res, ms);
    });

  async function pushLine(setter: (v: string) => void, text: string) {
    if (!mountedRef.current) return;
    setter(text);
    await sleep(LINE_DELAY);
  }

  async function pushLines(setter: (v: string[]) => void, lines: string[]) {
    const out: string[] = [];
    for (const line of lines) {
      if (!mountedRef.current) return;
      out.push(line);
      setter([...out]);
      await sleep(LINE_DELAY);
    }
  }

  useEffect(() => {
    (async () => {
      await sleep(260);

      // README
      await pushLine(setReadmeCmd, "cat README.md");
      await sleep(160);
      await pushLines(setReadmeLines, [
        "M.S. Computer Science student with 2+ years of industry experience building backend services, automation-driven systems, and applied data and ML pipelines. Actively seeking full-time software engineering roles.",
      ]);
      await sleep(BLOCK_DELAY);

      // whoami
      await pushLine(setWhoamiCmd, "whoami");
      await sleep(160);
      await pushLine(setWhoamiOut, "software-engineer");
      await sleep(BLOCK_DELAY);

      // systemctl
      await pushLine(setStatusCmd, "systemctl status career.target");
      await sleep(160);
      await pushLines(setStatusLines, [
        "Current: M.S. Computer Science student",
        "Status: graduating",
        "ETA: May 2026",
        "Seeking: software engineering roles",
        "Target: backend and data-driven applications",
      ]);
      await sleep(BLOCK_DELAY);

      // uptime
      await pushLine(setUptimeCmd, "uptime");
      await sleep(160);
      await pushLine(
        setUptimeOut,
        "up 2+ years (professional experience), load average: backend, systems, data, ml"
      );
      await sleep(BLOCK_DELAY);

      // final comment
      await pushLine(setFinalComment, "# I build systems I trust to run unattended.");
    })();
  }, []);

  const showCursorOn = (cmdText: string, full: string) =>
    cmdText.length > 0 && cmdText !== full;

  return (
    <section className="w-full flex justify-center px-10 py-0">
      <div className="w-full max-w-6xl rounded-2xl border border-white/10 bg-black shadow-sm">
        <div className="px-8 py-4 font-mono text-[12.5px] leading-relaxed">
          {/* README */}
          <div className="mb-5">
            <span className="text-white/60">$</span>{" "}
            <span className="text-green-500">
              {readmeCmd}
              {showCursorOn(readmeCmd, "cat README.md") ? (
                <span className="ml-0.5 animate-pulse text-white/45">▍</span>
              ) : null}
            </span>
            <div className="mt-2 text-white/70 leading-relaxed">
              {readmeLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>

          {/* whoami */}
          <div className="mb-5">
            <span className="text-white/60">$</span>{" "}
            <span className="text-green-500">
              {whoamiCmd}
              {showCursorOn(whoamiCmd, "whoami") ? (
                <span className="ml-0.5 animate-pulse text-white/45">▍</span>
              ) : null}
            </span>
            <div className="mt-2 text-white/70">{whoamiOut}</div>
          </div>

          {/* systemctl */}
          <div className="mb-5">
            <span className="text-white/60">$</span>{" "}
            <span className="text-green-500">
              {statusCmd}
              {showCursorOn(statusCmd, "systemctl status career.target") ? (
                <span className="ml-0.5 animate-pulse text-white/45">▍</span>
              ) : null}
            </span>
            <div className="mt-2 text-white/70 leading-relaxed">
              {statusLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>

          {/* uptime */}
          <div className="mb-5">
            <span className="text-white/60">$</span>{" "}
            <span className="text-green-500">
              {uptimeCmd}
              {showCursorOn(uptimeCmd, "uptime") ? (
                <span className="ml-0.5 animate-pulse text-white/45">▍</span>
              ) : null}
            </span>
            <div className="mt-2 text-white/70">{uptimeOut}</div>
          </div>

          {/* final comment */}
          {finalComment ? (
            <div className="text-[13px] text-white/60 mt-2">
            {finalComment}
          </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
