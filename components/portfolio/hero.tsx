"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  // Github,
  Mail,
  // Linkedin,
  // Twitter
} from "lucide-react";
import Image from "next/image";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <Image
              src="https://avatars.githubusercontent.com/u/114712580?v=4"
              alt="Wilfrid Okorie"
              fill
              className="rounded-full object-cover border-2 border-neutral-700 hover:border-neutral-500 transition-colors"
              priority
            />
          </div>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          Wilfrid Okorie
        </h1>
        <p className="text-lg sm:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
          Fullstack engineer. Web2 & Web3. Applied cryptography.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="https://github.com/OWK50GA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-700 hover:border-neutral-500 transition-colors"
          >
            <FaGithub size={20} />
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

        <div className="flex justify-center gap-6">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="https://github.com/OWK50GA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-neutral-700 hover:border-neutral-500 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="https://www.linkedin.com/in/wilfrid-okorie-072685232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-neutral-700 hover:border-neutral-500 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="https://X.com/WilfridOkorie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-neutral-700 hover:border-neutral-500 hover:text-blue-400 transition-colors"
              aria-label="X"
            >
              <FaXTwitter size={24} />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <div className="w-6 h-10 border border-neutral-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-neutral-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
