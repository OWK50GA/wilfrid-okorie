"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "FastAPI", "Python"],
  },
  {
    category: "Blockchain",
    skills: [
      "Cairo for Starknet",
      "Rust Solana",
      "Soroban Rust",
      "Rust for Bitcoin",
      "Solidity",
    ],
  },
  // {
  //   category: 'Cryptography',
  //   skills: ['ECDH', 'AES-256-GCM', 'Merkle Proofs', 'Digital Signatures', 'Zero-Knowledge Proofs'],
  // },
  {
    category: "Languages",
    skills: ["TypeScript", "Python", "Cairo", "JavaScript", "Rust"],
  },
];

export default function Skills() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills</h2>
        <div className="space-y-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-neutral-200">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-3 py-1.5 text-sm border-neutral-700 text-neutral-300 hover:border-neutral-500 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
