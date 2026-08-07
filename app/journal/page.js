import JournalHero from "./_sections/JournalHero";
import CTA from "../_components/CTA";
import JournalGrid from "./_sections/JournalGrid";

export const metadata = {
  title: "Journal — Luxaeon Spaces",
  description:
    "Ideas, insights, and stories on interior design and everyday living from the Modulor studio.",
};

export default function page() {
  return (
    <>
      <JournalHero />
      <JournalGrid />

      <div className="container">
        <CTA />
      </div>
    </>
  );
}
