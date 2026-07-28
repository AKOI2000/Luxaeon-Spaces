import Image from "next/image";
import { SERVICES } from "../_lib/data";

function HomeServices() {
  return (
    <section className="container">
      <div className="home_services">
        <p className="eyebrow">Services</p>
        <h2>
          Crafting Spaces,
          <br />
          Elevating Experiences
        </h2>

        <div className="home_services-grid grid-2">
          {SERVICES.map((service, i) => (
            <div className="home_services-item" key={i}>
              <div className="text-box">
                <div className="title">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <a href="mailto:" target="_blank" className="btn">
                  Get A Quote
                </a>
              </div>

              <div className="img-box">
                {service.imgUrl ? (
                  <Image
                    src={service.imgUrl}
                    alt={service.title}
                    width={1600}
                    height={900}
                    sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <Image
                    src={"/about-2.jpg"}
                    alt={service.title}
                    width={1600}
                    height={900}
                    sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
