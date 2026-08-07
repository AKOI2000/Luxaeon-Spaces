"use client";

import { motion } from "framer-motion";

export default function JournalHero() {
  return (
    <section className="page-start small">
      <div className="journal-hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Journal
        </motion.h1>
        <motion.p
          className="journal-hero__sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Ideas, insights, and stories on design and everyday living.
        </motion.p>
      </div>
    </section>
  );
}