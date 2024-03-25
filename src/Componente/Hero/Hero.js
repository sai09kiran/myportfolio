import React from "react";

import "../Hero/Hero.css";

import react2 from "../Assets/reactjs.png";
import me from "../Assets/img2.jpg";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import java from "../Assets/javascript.png";
import redux from "../Assets/redux.png";
import node from "../Assets/nodejs.png";
const Hero = () => {
  return (
    <>
      <div className="heroscetion">
        <div className="herocontainer">
          <h2>Building Digital Experience That Inspire</h2>
          <p>
            Passionate Front-End-Developer | Transforming Idea Into Sameless And
            Virtual Stunting Web Solution
          </p>
        </div>

        <div className="heroimg">
            <div>
            <div className="icons">
            <img src={react2} alt="" />
          </div>
          <img src={me} alt="" />
            </div>
    
          <div>
            <div className="icons">
              <img src={html} alt="" />
            </div>

            <div className="icons">
              <img src={css} alt="" />
            </div>

            <div className="icons">
              <img src={java} alt="" />
            </div>

            <div className="icons">
              <img src={redux} alt="" />
            </div>

            <div className="icons">
              <img src={node} alt="" />
            </div>

          </div>

        </div>
        
      </div>
    </>
  );
};

export default Hero;
