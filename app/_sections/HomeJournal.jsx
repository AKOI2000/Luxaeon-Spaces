"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FEATURED_JOURNALS } from "../_lib/journals";
import Image from "next/image";

export default function HomeJournal() {
  return (
    <section className="journal">
      <div className="container">
        <div className="journal__header grid-2">
          <h2>
            Latest news and Insights
            <br />
            <span className="text-grey">from Our Studio</span>
          </h2>

          <div className="journal__intro">
            <p>
              Explore the latest industry news, gain valuable insights, and read
              expert interviews from the world of design.
            </p>
            <Link href="/journal" className="btn">
              All Posts
            </Link>
          </div>
        </div>

        <div className="journal__grid grid-2">
          {FEATURED_JOURNALS.map((post, i) => (
            <motion.article
              key={post.slug}
              className="journal__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40%" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={`/journal/${post.slug}`}>
                <div className="journal__image">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    height={900}
                    width={1600}
                    sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <h3>{post.title}</h3>
                <p className="journal__excerpt">{post.excerpt}</p>

                <div className="journal__meta flex-between">
                  <span className="journal__tag">{post.tag}</span>
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
