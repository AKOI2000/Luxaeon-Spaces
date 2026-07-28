import Link from "next/link";
import { PROJECTS } from "../_lib/data";
import Image from "next/image";

function HomeWorks() {
  return (
    <section className="container">
      <div className="home_works">
        <div className="heading">
          <p className="eyebrow">Works</p>
          <h2>Spaces we have shaped</h2>
          <p className="home_works-intro">
            A selection of the projects that have shaped our practice.
          </p>
        </div>

        <ul className="home_works-list">
          {PROJECTS.map((project, index) => (
            <li className="home_works-row" key={index}>
              <Link
                href={`/projects/${project.slug}`}
                className="home_works-link"
              >
                <div className="home-works-meta">
                  <h3>{project.name}</h3>
                  <span className="text-grey">{project.category}</span>
                </div>
                <div className="home_works-image">
                  <Image
                    src={project.imgUrl}
                    alt={project.name}
                    width={1600}
                    height={500}
                    sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomeWorks;
