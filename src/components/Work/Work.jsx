import React from "react";
import "./Work.css";
import Works from "./Works";
function Work() {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Work</h2>
      <span className="section__subtitle">My all work</span>

      <Works />
    </section>
  );
}

export default Work;
