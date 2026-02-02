"use client";

import { Server, Share2, Code2 } from "lucide-react";

const projects = [
  {
    title: "Elastic Face Recognition on AWS",
    icon: Server,
    description:
      "Scalable face recognition system with autoscaling inference, edge processing, and serverless orchestration.",
    points: [
      "Autoscaling PyTorch inference using Lambda and ECR",
      "Async workload handling with SQS",
      "Edge inference using Greengrass and IoT Core",
    ],
    stack: ["AWS", "Lambda", "PyTorch", "Docker"],
  },
  {
    title: "Graph Based Data Pipeline",
    icon: Share2,
    description:
      "Distributed pipeline to model and analyze NYC taxi trips using graph based processing.",
    points: [
      "Kafka and Zookeeper on Kubernetes",
      "Graph algorithms for routing and connectivity",
      "Neo4j for scalable graph queries",
    ],
    stack: ["Kafka", "Kubernetes", "Neo4j"],
  },
  {
    title: "RAG System for Code Applications",
    icon: Code2,
    description:
      "Retrieval augmented generation system optimized for code search and contextual responses.",
    points: [
      "Hybrid retrieval with BM25 and dense vectors",
      "Faiss based vector indexing",
      "Context optimized chunking for repositories",
    ],
    stack: ["Python", "Faiss", "LLMs"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-20">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-neutral-100">
        Project Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="
                border border-white/10
                bg-white/[0.02]
                p-6
                transition
              "
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon size={18} className="text-green-300" />
                <h3 className="text-lg font-medium text-green-500">
                  {p.title}
                </h3>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-4 space-y-2">
                {p.points.map((point) => (
                  <li key={point} className="text-sm text-neutral-500">
                    <span className="text-green-500 mr-2">›</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-3 text-xs text-neutral-500">
                {p.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
