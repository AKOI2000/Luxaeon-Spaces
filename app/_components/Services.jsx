"use client";

import Image from "next/image";
import { SERVICES } from "../_lib/data";
import { motion } from "framer-motion";

function Services() {
    return (
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
              <motion.div
                className="img-box"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Image
                  src={service.imgUrl}
                  alt={service.title}
                  width={1600}
                  height={900}
                  sizes="(max-width: 763px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Services
