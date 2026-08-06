"use client";

export default function PostIntro({ paragraphs }) {
  return (
    <section className="container">
      <div className="post-intro">
        <div className="post-intro__inner">
          <p>
            {paragraphs.map((p, i) => (
              <span key={i}> {p}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
