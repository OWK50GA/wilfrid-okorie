"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">About</h2>
        <div className="space-y-4 text-neutral-300 leading-relaxed">
          <p>
            I started my journey as a frontend engineer, building interfaces and
            learning React. Over time, I expanded into fullstack development,
            working across the full stack from databases to user interfaces.
          </p>
          <p>
            In early 2025, I discovered cryptography through the Bitcoin BOSS
            program, which opened up a new dimension to my engineering work.
            This led me to explore Web3 deeply, and now I build across both Web2
            and Web3 ecosystems with a strong focus on security-sensitive
            systems.
          </p>
          <p>
            My work spans from traditional web applications to blockchain
            protocols, always with an emphasis on clean architecture,
            performance, and security. I'm particularly interested in applied
            cryptography, system design, and building tools that developers love
            to use.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
