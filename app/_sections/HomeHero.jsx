"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import fitty from "fitty";

function HomeHero() {
  const headingRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const headingFit = fitty(headingRef.current, {
      minSize: 40,
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
        <h1 ref={headingRef}>Spaces</h1>
        <p className="hero_tagline" ref={taglineRef}>
         That Speak Before You Do
        </p>
      </div>

      <div className="hero-img">
        <Image
          src="/hero-img.avif"
          alt="Luxaeon Spaces"
          height={900}
          width={1600}
          sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
}

export default HomeHero;