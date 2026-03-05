"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const featuredProjects = [
  {
    name: "Kirocred",
    slug: "kirocred",
    description:
      "Privacy-preserving credential issuance and verification system on Starknet. Full monorepo with Next.js frontend, Express + PostgreSQL backend, and Cairo smart contracts. Implements ECDH, AES-256-GCM, Merkle proofs, and signature-based key derivation.",
    stack: [
      "TypeScript",
      "Cairo",
      "Next.js",
      "Express",
      "PostgreSQL",
      "IPFS",
      "Starknet",
    ],
    category: [
      "Web2",
      "Web3",
      "Privacy",
      "Cryptography",
      "Blockchain",
      "Identity",
    ],
    link: "https://github.com/OWK50GA/kirocred",
  },
  {
    name: "Ankh",
    slug: "Ankh",
    description:
      "Published VS Code extension for Cairo/Starknet smart contract development. Auto-discovers contracts, generates ABI-based interfaces, and handles the full deploy/interact lifecycle with intuitive workflows.",
    stack: ["TypeScript", "React", "Vite", "Starknet.js"],
    category: ["Web3", "Dev Tooling", "Node.js", "Blockchain"],
    link: "https://github.com/OWK50GA/Ankh",
  },
  {
    name: "Digital Eye Strain Detector",
    slug: "digital-eye-strain-detector",
    description:
      "Full-stack ML app detecting eye strain from webcam video. Features a FastAPI + PyTorch backend with bidirectional LSTM and attention pooling, Next.js frontend, and model hosted on HuggingFace.",
    stack: ["Python", "FastAPI", "PyTorch", "Next.js", "HuggingFace"],
    category: ["Web2", "Machine Learning", "AI"],
    link: "https://github.com/OWK50GA/digital-eye-strain-detector",
  },
  {
    name: "BNB Super Web3 Agent",
    slug: "Q402",
    description:
      "Web3 AI Agent built with Chain-GPT API + Q402 for onchain interactions. Used for Web3 research and minimal actions like one-step onchain tx, and contracts deployment",
    stack: ["Next.js", "TypeScript"],
    category: ["AI", "Blockchain"],
    link: "https://github.com/OWK50GA/Q402",
  },
  {
    name: "devlinks",
    slug: "devlinks",
    description:
      "Link-sharing platform with authentication, Firestore persistence, and public profile pages. Built with a focus on clean UX and data security.",
    stack: ["Next.js", "Firebase", "TypeScript"],
    category: ["Web2", "Identity"],
    link: "https://github.com/OWK50GA/devlinks",
  },
  {
    name: "Griffin",
    slug: "Griffin",
    description:
      "Intent-based cross-chain payment protocol. Features orchestration backend with pathfinding across bridges and DEX aggregators, gas abstraction for users, and seamless multi-chain transactions.",
    stack: ["TypeScript", "Express", "Node.js", "Starknet.js"],
    category: ["Web3", "Dev Tooling", "DeFi", "Blockchain"],
    link: "https://github.com/OWK50GA/Griffin",
  },
];

const categoryColors: Record<string, string> = {
  Web2: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Web3: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Privacy: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Cryptography: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "Dev Tooling": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "Node.js": "bg-lime-500/20 text-lime-300 border-lime-500/30",
  "Machine Learning": "bg-rose-500/20 text-rose-300 border-rose-500/30",
  Blockchain: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  DeFi: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  AI: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Identity: "bg-teal-500/20 text-teal-300 border-teal-500/30",
  "Smart Contracts": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  // 'Web2': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
};

export default function FeaturedProjects() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Featured Projects
        </h2>
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.slug}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block p-6 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                </div>
                <ExternalLink
                  size={18}
                  className="text-neutral-500 group-hover:text-neutral-300 transition-colors shrink-0"
                />
              </div>

              <p className="text-neutral-400 mb-4 text-sm sm:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs border-neutral-700 text-neutral-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {project.category.map((c, i) => {
                  if (c === "Web3") return;
                  return (
                    <Badge
                      key={c}
                      className={`text-xs border ${categoryColors[c]}`}
                      variant="outline"
                    >
                      {c}
                    </Badge>
                  );
                })}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
