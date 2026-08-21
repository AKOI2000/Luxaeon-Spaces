"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import fitty from "fitty";
import { motion } from "framer-motion";

function HomeHero() {
  const headingRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const headingFit = fitty(headingRef.current, {
      minSize: 30,
      maxSize: 1000,
      multiLine: false,
    });

    const taglineFit = fitty(taglineRef.current, {
      minSize: 16,
      maxSize: 200,
      multiLine: true, // allows natural wrapping, unlike the h1
    });

    if (document.fonts) {
      document.fonts.ready.then(() => {
        headingFit.fit();
        taglineFit.fit();
      });
    }

    return () => {
      headingFit.unsubscribe();
      taglineFit.unsubscribe();
    };
  }, []);

  return (
    <section className="page-start">
      <div className="hero-heading">
        <motion.h1
          ref={headingRef}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          Luxaeon Spaces
        </motion.h1>
        <motion.p
          className="hero_tagline"
          ref={taglineRef}
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(5px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
        >
          designed to feel like you
        </motion.p>
      </div>

      <motion.div
        className="hero-img"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.6,
        }}
      >
        <Image
          src="/hero-img.avif"
          alt="Luxaeon Spaces"
          height={900}
          width={1600}
          loading="eager"
          sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </section>
  );
}

export default HomeHero;
