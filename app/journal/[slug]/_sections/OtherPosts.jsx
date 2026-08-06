"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { JOURNAL_DETAILS } from "@/app/_lib/journals";

export default function OtherPosts({ currentSlug }) {
  const others = JOURNAL_DETAILS.filter((p) => p.slug !== currentSlug).slice(0, 2);

  return (
    <section className="other-posts">
      <div className="container">
        <h3>Other Posts</h3>

        <div className="other-posts__grid grid-2">
          {others.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/journal/${post.slug}`}>
                <div className="other-posts__image">
                  <img src={post.heroImage} alt={post.title} />
                </div>

                <h4>{post.title}</h4>
                <p className="other-posts__excerpt">{post.metaDescription}</p>

                <div className="other-posts__meta flex-between">
                  <span className="other-posts__tag">{post.tag}</span>
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
