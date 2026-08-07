"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EditorialBlock({
  eyebrow,
  heading,
  paragraphs,
  image,
  grid = "2",
  reverse = false,
}) {
  return (
    <section className="container">
      <div
        className={`editorial-block ${reverse ? " editorial-block--reverse" : ""}`}
      >
        <div className="editorial-block__top">
          <p className="eyebrow margin-lg">{eyebrow}</p>
        </div>

        <motion.div
          className={`editorial-block__grid grid-${grid}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="editorial-block__body">
            <h2>{heading}</h2>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="editorial-block__image">
            <Image
              src={image ? image : "/service-1.avif"}
              alt={heading}
              width={1600}
              height={900}
              // loading="eager"
              sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
