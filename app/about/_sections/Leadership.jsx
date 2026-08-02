"use client";

import { motion } from "framer-motion";
import { LEADERSHIP } from "@/app/_lib/about";
import { TEAM } from "@/app/_lib/data";

export default function Leadership() {
  return (
    <>
      <section className="container">
        <div className="about-team">
          <div className="section-heading">
            <h2>Meet our team</h2>
            <p>
              A group of dedicated and skilled professionals who bring their
              unique talents to make our company a wonderful place to work.
            </p>
          </div>
          <ul className="about-team-grid grid-2">
            {LEADERSHIP.map((member, i) => (
              <li key={member.name} className="about-team-item">
                <div className="about-team-photo">
                  <img src={member.imgUrl} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <span className="text-grey">{member.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
