"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery({ images, title }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="container">
      <div className="project-gallery">
        <div className="project-gallery__grid grid-2">
          {images.map((src, i) => (
            <motion.div
              key={src}
              className="project-gallery__image"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Image
                src={src}
                alt={title}
                width={1600}
                height={900}
                // loading="eager"
                sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
