import Image from "next/image";
import { TEAM } from "../_lib/data";
import Link from "next/link";

function HomeAbout() {
  return (
    <section className="container">
      <div className="home_about">
        <p className="eyebrow margin-lg">About Luxeon Spaces</p>
        <div className="home_about-story grid-5">
          <div className="text-box">
            <h1>Our Story</h1>
            <p>
              Founded on the belief that good design is measured in human terms,
              our studio has spent over a decade shaping spaces that balance art
              and function.
            </p>

            <Link href={"/about"} className="btn">
              Learn More
            </Link>
          </div>
          <div className="img-box">
            <Image
              src={"/home-about.avif"}
              alt="About Luxaeon"
              width={1600}
              height={900}
              loading="eager"
              sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
