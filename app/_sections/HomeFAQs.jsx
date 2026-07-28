"use client";

import { useState } from "react";
import { FAQS } from "../_lib/data";
import { AnimatePresence, motion } from "framer-motion";

function HomeFAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="home_faq">
      <div className="container">
        <div className="heading">
          <p className="eyebrow inverted">FAQ</p>
          <h1>
            Have questions?
            <br />
            <span>We have answers.</span>
          </h1>
        </div>

        <ul className="home_faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <li key={i} className="home_faq-item">
                <button
                  className="home_faq-question flex-between"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="home_faq-icon">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="home_faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default HomeFAQs;
