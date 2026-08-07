"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { JOURNAL_DETAILS } from "@/app/_lib/journals";
import Image from "next/image";

export default function JournalGrid() {
  return (
    <section className="journal-grid">
      <div className="container">
        <div className="journal-grid__grid grid-2">
          {JOURNAL_DETAILS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={`/journal/${post.slug}`}>
                <div className="journal-grid__image">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    width={1600}
                    height={900}
                  />
                </div>

                <h3>{post.title}</h3>
                <p className="journal-grid__excerpt">{post.metaDescription}</p>

                <div className="journal-grid__meta flex-between">
                  <span className="journal-grid__tag">{post.tag}</span>
                  <span className="text-grey">{post.date}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
