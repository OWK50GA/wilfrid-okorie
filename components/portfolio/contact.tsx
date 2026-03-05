"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-neutral-400 mb-8">
          Have a project in mind or just want to chat? Reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://github.com/OWK50GA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </Link>
          <Link
            href="mailto:wilfridokorie@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </Link>
        </div>

        <p className="text-neutral-500 text-sm mt-12">
          © 2025 Wilfrid Okorie. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
