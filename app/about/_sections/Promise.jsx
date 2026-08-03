"use client";

import { motion } from "framer-motion";
import { PROMISES } from "@/app/_lib/about";

const ICONS = {
  function: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  ),
  authenticity: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  value: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 22 12 12 22 2 12 12 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Promise() {
  return (
    <section className="container">
      <div className="promise">
        <p className="eyebrow">Our Promise</p>
        <h2>What We Never Compromise On.</h2>

        <div className="promise__grid grid-3">
          {PROMISES.map((item, i) => (
            <motion.div
              key={item.title}
              className="promise__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* <span className="promise__icon">{ICONS[item.icon]}</span> */}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
