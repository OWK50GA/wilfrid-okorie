"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Repository {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
}

const languageColors: Record<string, { dot: string; text: string }> = {
  TypeScript: { dot: "bg-blue-400", text: "text-blue-400" },
  Python: { dot: "bg-yellow-400", text: "text-yellow-400" },
  Cairo: { dot: "bg-purple-400", text: "text-purple-400" },
  Rust: { dot: "bg-orange-400", text: "text-orange-400" },
  JavaScript: { dot: "bg-yellow-300", text: "text-yellow-300" },
  Go: { dot: "bg-cyan-400", text: "text-cyan-400" },
  Solidity: { dot: "bg-gray-300", text: "text-gray-300" },
};

export default function AllProjects() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch(
          "https://api.github.com/users/OWK50GA/repos?per_page=100",
        );
        const repos = await response.json();

        const filtered = repos
          .filter((repo: any) => !repo.fork && repo.description)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            language: repo.language || "Other",
            stargazers_count: repo.stargazers_count,
            html_url: repo.html_url,
          }))
          .sort(
            (a: Repository, b: Repository) =>
              b.stargazers_count - a.stargazers_count,
          );

        setRepositories(filtered);
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRepositories();
  }, []);

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repositories.map((repo, index) => {
            const colors = languageColors[repo.language] || {
              dot: "bg-neutral-400",
              text: "text-neutral-400",
            };
            return (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-base font-semibold group-hover:text-blue-400 transition-colors flex-1 text-balance">
                    {repo.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-neutral-500 group-hover:text-neutral-300 transition-colors shrink-0 mt-0.5"
                  />
                </div>

                <p className="text-neutral-400 text-xs sm:text-sm mb-4 grow line-clamp-2">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                    <span className={`text-xs font-medium ${colors.text}`}>
                      {repo.language}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-neutral-400">
                    <Star size={14} />
                    <span className="text-xs">{repo.stargazers_count}</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
