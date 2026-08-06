import { JOURNAL_DETAILS } from "@/app/_lib/journals";
import PostHero from "./_sections/PostHero";
import PostIntro from "./_sections/PostIntro";
import PostSection from "./_sections/PostSection";
import OtherPosts from "./_sections/OtherPosts";
import CTA from "@/app/_components/CTA";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return JOURNAL_DETAILS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = JOURNAL_DETAILS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Luxaeon`,
    description: post.metaDescription,
  };
}

async function page({ params }) {
  const { slug } = await params;
  const post = JOURNAL_DETAILS.find((p) => p.slug === slug);
  if (!post)
    return (
      <div className="page-start">
        <h1>Page not found</h1>
        <Link href={"/"} className="btn">Go to home</Link>
      </div>
    );
  return (
    <>
      <PostHero
        tag={post.tag}
        date={post.date}
        title={post.title}
        hook={post.hook}
        heroImage={post.heroImage}
      />

      <PostIntro paragraphs={post.intro} />

      {post.sections.map((section, i) => (
        <PostSection
          key={i}
          heading={section.heading}
          paragraphs={section.paragraphs}
          list={section.list}
          image={section.image}
        />
      ))}

      <OtherPosts currentSlug={post.slug} />
      <div className="container">
        <CTA />
      </div>
    </>
  );
}

export default page;
