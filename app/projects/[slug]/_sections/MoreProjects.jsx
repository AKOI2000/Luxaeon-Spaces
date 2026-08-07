"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECT_DETAILS } from "@/app/_lib/projects";
import Image from "next/image";

export default function MoreProjects({ currentSlug }) {
  const others = PROJECT_DETAILS.filter((p) => p.slug !== currentSlug).slice(
    0,
    2,
  );

  return (
    <section className="more-projects">
      <div className="container">
        <h2>More Projects</h2>

        <div className="more-projects__grid grid-2">
          {others.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="more-projects__card"
              >
                <div className="more-projects__meta">
                  <h3>{project.title}</h3>
                  <span className="text-grey">{project.category}</span>
                </div>
                <div className="more-projects__image">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    width={1600}
                    height={900}
                    // loading="eager"
                    sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
