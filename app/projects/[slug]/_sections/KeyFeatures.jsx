"use client";

import { motion } from "framer-motion";

export default function KeyFeatures({ features }) {
  if (!features || features.length === 0) return null;

  return (
    <section className="container">
      <div className="project-features">
        <p className="eyebrow">Key Features</p>

        <div className="project-features__grid grid-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="project-features__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
