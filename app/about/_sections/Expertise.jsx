"use client";

import { motion } from "framer-motion";
import { EXPERTISE } from "@/app/_lib/about";

export default function Expertise() {
  return (
    <section className="container">
      <div className="expertise">
        <p className="eyebrow">What We Do</p>
        <h2>Our Expertise.</h2>

        <div className="expertise__grid grid-2">
          {EXPERTISE.map((item, i) => (
            <motion.div
              key={item.title}
              className="expertise__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="expertise__image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
