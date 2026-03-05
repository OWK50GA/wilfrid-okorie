"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Frontend Web Developer",
    company: "Genti Media Technology",
    highlights: [
      "Migrated creator portal from React to Next.js for improved performance and SEO",
      "Shipped promo code system with validation and tracking",
      "Resolved critical production bugs in real-time",
      "Integrated Amplitude analytics for user behavior tracking",
    ],
  },
  {
    role: "Fullstack Developer & Technical Instructor",
    company: "GIDA / Ginakev Digital Academy (Volunteer)",
    highlights: [
      "Built curriculum and contracts for Web3 education programs",
      "Created fullstack demos for teaching blockchain development",
      "Co-organized Starknet Africa Cairo Bootcamp with Starknet Foundation",
      "Mentored 100+ developers in blockchain and smart contract development",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Bitcoin, Starknet & Stellar Ecosystems",
    period: "2024 – Present",
    highlights: [
      "Contributed to 30+ open source projects across the Bitcoin, Starknet and Stellar ecosystems",
      "Worked across the full stack in contributions: Underlying Protocols, Cairo and Rust smart contracts, TypeScript frontends (Next.js/React), and Node.js/Express backends",
      // 'Notable repos: starknet-foundry, ZeroXBridge Contracts, mediolano-contracts, spherre-dapp, streamfi (frontend + contracts), starkhive (backend + contracts), paystell-backend, AttensysUI, soroban-security-portal',
      "Contributions span DeFi protocols, credential systems, job marketplaces, streaming platforms, and developer tooling",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pb-8 border-b border-neutral-800 last:border-0 last:pb-0"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-neutral-400 mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-neutral-300 text-sm"
                  >
                    <span className="text-blue-400 mt-1">›</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
