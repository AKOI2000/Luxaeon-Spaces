import CTA from "../_components/CTA";
import Services from "../_components/Services";

function page() {
  return (
    <>
      <div className="page-start">
        <Services />
      </div>

      <div className="container">
        <CTA />
      </div>
    </>
  );
}

export default page;
