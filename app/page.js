import HomeAbout from "./_sections/HomeAbout";
import HomeCTA from "./_sections/HomeCTA";
import HomeFAQs from "./_sections/HomeFAQs";
import HomeHero from "./_sections/HomeHero";
import HomeJournal from "./_sections/HomeJournal";
import HomeServices from "./_sections/HomeServices";
import HomeTestimonial from "./_sections/HomeTestimonial";
import HomeWorks from "./_sections/HomeWorks";

function page() {
  return (
    <>
      <HomeHero />
      <HomeWorks />
      <HomeServices />
      <HomeAbout />
      <HomeTestimonial />
      <HomeFAQs />
      <HomeJournal />
      <HomeCTA />
    </>
  );
}

export default page;
