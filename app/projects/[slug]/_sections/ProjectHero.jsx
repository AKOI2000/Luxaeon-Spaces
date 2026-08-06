"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectHero({ title, service, category, heroImage }) {
  return (
    <section className="page-start small">
      <div className="project-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>

        <div className="project-hero__meta">
          <div className="project-hero__meta-item">
            <span>Service</span>
            <span>{service}</span>
          </div>
          <div className="project-hero__meta-item">
            <span>Category</span>
            <span>{category}</span>
          </div>
        </div>

        <motion.div
          className="project-hero__image"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={heroImage}
            alt={title}
            width={1600}
            height={900}
            loading="eager"
            sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
