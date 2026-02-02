"use client";

import React from "react";

const SKILL_POOLS = [
  {
    id: "languages",
    title: "Programming Languages",
    items: ["Python", "Java", "C++", "C", "C#", "PHP","Go", "SQL", "Javascript", "React", "Node.js", "Typescript", "Bash"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    items: ["FastAPI", "Flask", "REST APIs", "Microservices Architecture", "API Design & Versioning"],
  },
  {
    id: "data",
    title: "Data Engineering & Analytics",
    items: ["MySQL", "PostgreSQL", "Spark", "Hadoop", "Kafka", "Spark SQL", "Neo4j", "Zookeeper", "Graph Databases", "Schema Design"],
  },
  {
    id: "frontend",
    title: "Frontend & Web",
    items: ["HTML", "CSS", "Javascript", "TypeScript", "React", "Next.js", "REST API Integration", "Client–Server Architecture"],
  },
  {
    id: "infra",
    title: "Systems & Cloud Infrastructure",
    items: ["Linux", "AWS", "Azure", "Ansible", "Puppet", "Shell Scripting", "Terraform", "Docker", "Kubernetes", , "Google Cloud Platform", "Rundeck", "VMware", "CI/CD Pipelines", "OS Patching", "SSH & Key-based Authentication"],
  },
  {
    id: "ml",
    title: "Machine Learning & Data Science",
    items: ["PyTorch", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "LLMs", "CNN Architectures", "Multilayer Perceptrons", "Model Training & Evaluation", "Data Mining", "Feature Engineering"],
  },
  
];

export default function SkillsSection() {
  return (
    <section className="w-full">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-neutral-100">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {SKILL_POOLS.map((pool) => (
          <div
            key={pool.id}
            className="
              h-full min-h-[132px]
              rounded-2xl border border-white/5 bg-white/[0.02]
              p-4
              flex flex-col
            "
          >
            <div className="text-sm uppercase tracking-widest text-green-500">
              {pool.title}
            </div>

            <ul className="mt-3 flex flex-wrap gap-2 content-start">
              {pool.items.map((skill) => (
                <li
                  key={skill}
                  className="
                    px-2 py-1 text-sm rounded-md
                    border border-white/10
                    bg-white/[0.04]
                    text-white/90
                    whitespace-nowrap
                  "
                >
                  {skill}
                </li>
              ))}
            </ul>

            <div className="flex-1" />
          </div>
        ))}
      </div>
    </section>
  );
}
<div className="h-6" />
