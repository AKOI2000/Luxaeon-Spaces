"use client";

import { motion } from "framer-motion";

export default function TextBlock({ label, body }) {
  return (
    <section className="container">
      <div className="project-text">
        <motion.div
          className="project-text__inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {label && <p className="eyebrow">{label}</p>}
          <p className="project-text__body">{body}</p>
        </motion.div>
      </div>
    </section>
  );
}
