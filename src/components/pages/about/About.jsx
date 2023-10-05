import React from "react";
import aboutImg from "../../../assets/about-img.jpg";

import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-section-title">
          <h2>About</h2>
        </div>
        <div className="about-content">
          <div className="about-content-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-content-text">
            <h2 className="about-content-text-title">About BookHub</h2>
            <p className="about-content-text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              dignissimos consequuntur vero commodi provident maiores, iusto
              atque corrupti voluptate vel sequi consectetur unde aliquam
              corporis saepe animi non, tempora reiciendis molestias sed
              laudantium dolores. Assumenda aperiam fuga quo voluptate commodi
              ullam aliquam expedita voluptas delectus.
            </p>
            <p className="about-content-text-description-two">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dicta, possimus inventore eveniet atque voluptatibus repellendus
              aspernatur illo aliquam dignissimos illum. Commodi, porro omnis
              dolore amet neque modi quas eum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
