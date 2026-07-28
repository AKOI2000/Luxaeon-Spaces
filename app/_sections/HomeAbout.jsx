import Image from "next/image";
import { TEAM } from "../_lib/data";
import Link from "next/link";

function HomeAbout() {
  return (
    <section className="container">
      <div className="home_about">
        <p className="eyebrow margin-lg">About</p>
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
              sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* <div className="home_about-team">
          <div className="section-heading">
            <h2>Meet our team</h2>
            <p>
              A group of dedicated and skilled professionals who bring their
              unique talents to make our company a wonderful place to work.
            </p>
          </div>
          <ul className="home_about-team-grid grid-2">
            {TEAM.map((member, i) => (
              <li key={member.name} className="home_about-team-item">
                <div className="home_about-team-photo">
                  <img src="/placeholder-avatar.jpg" alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <span className="text-grey">{member.role}</span>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </section>
  );
}

export default HomeAbout;
