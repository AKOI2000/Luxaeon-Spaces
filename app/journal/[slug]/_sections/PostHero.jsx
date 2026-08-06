"use client";

import { motion } from "framer-motion";

export default function PostHero({ tag, date, title, hook, heroImage }) {
  return (
    <section className="page-start small">
      <div className="post-hero">
        <div className="post-hero__meta flex-between">
          <span className="post-hero__tag">{tag}</span>
          <span className="text-grey">{date}</span>
        </div>

        <motion.h1
          className="post-hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="post-hero__hook"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {hook}
        </motion.p>

        <motion.div
          className="post-hero__image"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={heroImage} alt={title} />
        </motion.div>
      </div>
    </section>
  );
}
