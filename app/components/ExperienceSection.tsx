"use client";

import React, { useMemo, useState } from "react";

type BoxSize = "sm" | "md" | "lg" | "xl";

type TimelineItem = {
  id: string;
  title: string;
  org: string;
  duration: string;
  size: BoxSize;
  side: "left" | "right";
  details?: string[];
  bullets?: string[];
};

type TimelineRow = {
  left: TimelineItem | null;
  right: TimelineItem | null;
  rightStack?: TimelineItem[];
};

const LINE_X = "50%";
const LINE_X_MOBILE = "1rem";
const ACCENT_RGB = "34, 197, 94"; // green-500

function TimelineBox({
  item,
  isActive,
  onClick,
}: {
  item: TimelineItem;
  isActive: boolean;
  onClick: () => void;
}) {
  const sizeStyles: Record<BoxSize, string> = {
    sm: "p-2 text-xs min-h-[64px]",
    md: "p-4 text-sm min-h-[96px]",
    lg: "p-5 text-base min-h-[160px]",
    xl: "p-10 text-base min-h-[260px]",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={[
        "w-full max-w-sm rounded-2xl border text-center",
        "transition-colors duration-150",
        "border-white/5 bg-white/[0.02]",
        "hover:border-white/10",
        sizeStyles[item.size],
      ].join(" ")}
      style={
        isActive
          ? {
              borderColor: "rgba(var(--accent),0.9)",
              boxShadow:
                "0 0 0 1px rgba(var(--accent),0.25), 0 0 0 1px rgba(255,255,255,0.05) inset",
            }
          : undefined
      }
    >
      <div className="text-neutral-100 font-medium leading-snug">
        {item.title}
      </div>
      <div className="text-neutral-300 leading-snug mt-1">{item.org}</div>
      <div className="text-xs mt-2 text-green-500">{item.duration}</div>
    </button>
  );
}

export default function ExperienceSection() {
  const rows: TimelineRow[] = useMemo(
    () => [
      {
        left: {
          id: "ms",
          title: "M.S. Computer Science",
          org: "Arizona State University",
          duration: "Aug 2024 – May 2026",
          size: "lg",
          side: "left",
          details: [
            "Focus: distributed systems, cloud, data mining, and applied ML.",
            "Outcome: stronger systems thinking for building scalable, secure backend and data platforms.",
            "Core coursework:",
          ],
          bullets: [
            "Data Processing at Scale",
            "Cloud Computing",
            "Foundations of Algorithms",
            "Data Mining and Semantic Web Mining",
            "Statistical Machine Learning",
            "Knowledge Representation",
            "Information Assurance and Security",
            "Data Visualization",
          ],
        },
        right: {
          id: "nlp",
          title: "NLP Intern",
          org: "IDX Exchange",
          duration: "Oct 2025 – Present",
          size: "sm",
          side: "right",
          details: [
            "Built a safe, production style text to SQL system for real estate queries.",
            "Hybrid approach: rules for common intents, LLM for harder queries, with strict SQL validation and fallbacks.",
          ],
          bullets: [
            "Text to SQL pipeline with intent and entity extraction.",
            "Schema profiling to ground model prompts.",
            "Guardrails: SELECT only, whitelist, validation, fallback paths.",
            "FastAPI endpoint integrated with MySQL for sub second queries.",
            "Caching and logging for reliability and iteration.",
          ],
        },
      },
      {
        left: null,
        right: {
          id: "dev",
          title: "Developer",
          org: "Fastenal India",
          duration: "Jul 2022 – Jul 2024",
          size: "lg",
          side: "right",
          details: [
            "Backend and internal platform development with strong emphasis on Development, Linux systems, cloud infrastructure, and API and automation at scale.",
            "Built software-driven solutions that combined backend services with infrastructure-aware execution, validation, and reliability.",
          ],
          bullets: [
            "Designed and built backend automation services using Python, Ansible, Puppet and Bash to replace manual workflows across environments.",
            "Developed API-driven systems to orchestrate patching, validation, and rollback workflows over large Linux server fleets.",
            "Built modular and reusable IaC software components to standardize execution logic across teams.",
            "Integrated backend services with CI/CD pipelines and operational tooling for reliable deployments.",
            "Worked closely with Linux systems and cloud environments while implementing safety checks and failure handling.",
            "Containerized backend services using Docker to improve deployment consistency and reliability.",
            "Collaborated with cross-functional teams to integrate workflows in Rundeck, Jenkins, and Bitbucket, automating deployments.",
            "Mentored and supported interns throughout ongoing projects, fostering collaboration and ownership within the team.",
          ],
        },
      },
      {
        left: {
          id: "btech",
          title: "B.Tech Computer and Communication",
          org: "Manipal Institute of Technology",
          duration: "Jul 2018 – Jul 2022",
          size: "xl",
          side: "left",
          details: [
            "Minor specialization: Big Data.",
            "Outcome: strong foundation in systems, networks, databases, and applied data and ML.",
            "Core coursework:",
          ],
          bullets: [
            "Data Structures and Algorithms",
            "Object Oriented Programming",
            "Operating Systems",
            "Database Systems",
            "Computer Network Protocols",
            "Design and Analysis of Algorithms",
            "Information Security",
            "Big Data Modeling and Management",
            "Big Data Integration and Processing",
            "Machine Learning with Big Data",
            "Graph Analytics for Big Data",
            "Social Network Analysis",
            "Data Mining and Predictive Analysis",
          ],
        },
        right: {
          id: "it",
          title: "IT Intern",
          org: "Fastenal India",
          duration: "Jan 2022 – Jul 2022",
          size: "sm",
          side: "right",
          details: [
            "Linux operations and automation support across environments.",
            "Built small tooling and supported patching and hardening workflows.",
          ],
          bullets: [
            "Python scripts for disk monitoring and filesystem validation",
            "Patch management, OS updates, and system hardening support",
            "Log audits and operational checks for uptime and compliance",
            "Linux server administration across dev, test, and prod environments",
            "Filesystem configuration and permissions management",
          ]          
        },
        rightStack: [
          {
            id: "summer",
            title: "Summer Intern",
            org: "Comviva",
            duration: "May 2021 – Jun 2021",
            size: "sm",
            side: "right",
            details: [
              "Backend API work focused on authentication and secure access integration.",
            ],
            bullets: [
              "Java APIs to integrate SSO into a deployment automation platform",
              "Worked with authentication flows and access control mechanisms",
            ],            
          },
        ],
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string | null>(null);

  const activeItem = useMemo(() => {
    for (const row of rows) {
      if (row.left?.id === activeId) return row.left;
      if (row.right?.id === activeId) return row.right;
      if (row.rightStack?.length) {
        const found = row.rightStack.find((x) => x.id === activeId);
        if (found) return found;
      }
    }
    return null;
  }, [rows, activeId]);

  const connectorStyleBase: React.CSSProperties = {
    height: "2px",
    backgroundColor: "rgba(var(--accent),0.75)",
    boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
  };

  return (
    <section className="w-full" style={{ ["--accent" as any]: ACCENT_RGB }}>
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-neutral-100">
        Education and Experience
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative lg:pr-6 overflow-visible">
          <div
            className="absolute inset-y-0 w-px hidden sm:block"
            style={{
              left: LINE_X,
              transform: "translateX(-50%)",
              backgroundImage:
                "linear-gradient(to bottom, rgba(var(--accent),0.45), rgba(var(--accent),0.15), rgba(var(--accent),0.45))",
            }}
          />
          <div
            className="absolute inset-y-0 w-px sm:hidden"
            style={{
              left: LINE_X_MOBILE,
              backgroundImage:
                "linear-gradient(to bottom, rgba(var(--accent),0.45), rgba(var(--accent),0.15), rgba(var(--accent),0.45))",
            }}
          />

          <div className="space-y-4">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className="relative grid grid-cols-1 sm:grid-cols-2 items-start gap-2 sm:gap-0"
              >
                {/* CONNECTORS (no dots) */}
                {/* Desktop: connectors from center line to each side */}
                {row.left && (
                  <div
                    className="hidden sm:block absolute top-6 pointer-events-none"
                    style={{
                      left: LINE_X,
                      transform: "translateX(-100%)",
                      width: "26px",
                      ...connectorStyleBase,
                    }}
                  />
                )}
                {row.right && (
                  <div
                    className="hidden sm:block absolute top-6 pointer-events-none"
                    style={{
                      left: LINE_X,
                      width: "26px",
                      ...connectorStyleBase,
                    }}
                  />
                )}

                {/* Mobile: connector from left rail to the card */}
                {(row.left || row.right) && (
                  <div
                    className="sm:hidden absolute top-6 pointer-events-none"
                    style={{
                      left: LINE_X_MOBILE,
                      width: "22px",
                      ...connectorStyleBase,
                    }}
                  />
                )}

                <div className="sm:pr-10 sm:flex sm:justify-end">
                  {row.left ? (
                    <TimelineBox
                      item={row.left}
                      isActive={activeId === row.left.id}
                      onClick={() =>
                        setActiveId((prev) =>
                          prev === row.left!.id ? null : row.left!.id
                        )
                      }
                    />
                  ) : (
                    <div />
                  )}
                </div>

                <div className="sm:pl-10">
                  {row.right ? (
                    <div className="space-y-4">
                      <TimelineBox
                        item={row.right}
                        isActive={activeId === row.right.id}
                        onClick={() =>
                          setActiveId((prev) =>
                            prev === row.right!.id ? null : row.right!.id
                          )
                        }
                      />

                      {row.rightStack?.map((it) => (
                        <TimelineBox
                          key={it.id}
                          item={it}
                          isActive={activeId === it.id}
                          onClick={() =>
                            setActiveId((prev) => (prev === it.id ? null : it.id))
                          }
                        />
                      ))}
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:pl-6">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 min-h-[320px] relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 w-[3px]"
              style={{ backgroundColor: "rgba(var(--accent),0.75)" }}
            />

            {!activeItem ? (
              <div className="pl-3 text-neutral-300">
                <div className="text-lg font-medium text-neutral-100 mb-2">
                  Hi
                </div>
                <p>Here is a quick view of my education and work.</p>
                <p>
                  Left side is education and right side is professional experience.
                </p>
                <p>Click any box to see a short summary.</p>
              </div>
            ) : (
              <div className="pl-3 text-neutral-300">
                <div className="mt-2 text-xl font-semibold text-neutral-100">
                  {activeItem.title}
                </div>
                <div className="text-neutral-400">{activeItem.org}</div>
                <div className="text-green-500 text-sm mt-1">
                  {activeItem.duration}
                </div>

                {activeItem.details && (
                  <div className="mt-4 space-y-2 leading-relaxed">
                    {activeItem.details.map((d, i) => (
                      <p key={i}>{d}</p>
                    ))}
                  </div>
                )}

                {activeItem.bullets && (
                  <ul className="mt-4 space-y-2">
                    {activeItem.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: "rgb(var(--accent))" }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
