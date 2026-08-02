import CTA from "../_components/CTA";
import EditorialBlock from "../_components/EditorialBlock";
import AboutHero from "./_sections/AboutHero";
import Expertise from "./_sections/Expertise";
import Leadership from "./_sections/Leadership";
import OurStory from "./_sections/OurStory";
import Promise from "./_sections/Promise";

function page() {
  return (
    <>
      <AboutHero />
     <OurStory />

      <EditorialBlock
        eyebrow="Our Philosophy"
        heading="Design That Works for Life."
        // image="/placeholder-philosophy.jpg"
        // reverse
        paragraphs={[
          "Our approach is rooted in contemporary design and functional living. Every layout, finish, and material is carefully considered to create spaces that are as practical as they are beautiful.",
          "The goal is simple, to create interiors that feel like a natural extension of the people who live in them.",
        ]}
      />

      <Expertise />

      <EditorialBlock
        eyebrow="Our Approach"
        heading="Where We Create the Most Value."
        // image="/placeholder-approach.jpg"
        paragraphs={[
          "We enjoy projects where we're involved from the very beginning. Working with carcass buildings allows us to shape a space before major construction decisions are made.",
          "We also specialise in thoughtful renovations, reimagining existing interiors to unlock their full potential without losing what makes them feel like home.",
        ]}
      />

      <Leadership />
      <Promise />

      <div className="container">
        <CTA />
      </div>
    </>
  );
}

export default page;
