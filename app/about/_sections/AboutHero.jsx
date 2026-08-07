"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import fitty from "fitty";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="page-start small">
      <div className="about-hero">
        {/* <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Every Square Metre Matters.
        </motion.h1>
        <motion.p
          className="about-hero__sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          We design spaces that feel bigger, work better, and truly feel like
          home.
        </motion.p> */}

        <motion.div
          className="about-hero-img"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/about-hero.png"
            alt="Luxaeon Spaces"
              loading="eager"
            height={900}
            width={1600}
            sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
