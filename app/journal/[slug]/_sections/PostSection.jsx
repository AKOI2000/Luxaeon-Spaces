"use client";

import { motion } from "framer-motion";

export default function PostSection({ heading, paragraphs, list, image }) {
  return (
    <section className="post-section">
      <div className="container">
        <motion.div
          className="post-section__inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3>{heading}</h3>

          <p>
            {paragraphs.map((p, i) => (
              <span key={i}>{" "} {p}</span>
            ))}
          </p>

          {list && (
            <ul className="post-section__list">
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </motion.div>

        {image && (
          <motion.div
            className="post-section__image"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={image} alt="" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
