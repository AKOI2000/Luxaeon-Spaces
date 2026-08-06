"use client";

import { motion } from "framer-motion";

export default function Callout({ eyebrow, label, body }) {
  return (
    <section className="container">
      <div className="project-callout">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="project-callout__label">{label}</h2>
          <p className="project-callout__body">{body}</p>
        </motion.div>
      </div>
    </section>
  );
}
