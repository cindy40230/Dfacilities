import React, { useEffect } from "react";
import Loop from "../assets/video/loop.mp4";
import DynamicText from "./DynamicText";

export default function Header() {
  useEffect(() => {
    const anim = setTimeout(() => {
      document.getElementById("header-text").style.display = "none";
    }, 16000);
    return () => clearTimeout(anim);
  }, []);
  useEffect(() => {
    const anim1 = setTimeout(() => {
      document.getElementById("header-dynamic").style.display = "block";
    }, 17000);
    return () => clearTimeout(anim1);
  }, []);

  return (
    <>
      <div className="video">
        <div id="background-video" className="va-container">
          <video autoPlay muted id="video" role="presentation">
            <source src={Loop} type="video/mp4"></source>
          </video>
          <div id="header-text">
            <p>
              Notre Métier,
              <br /> S’adapter aux spécificités de vos sites
            </p>
          </div>
          <div id="header-dynamic">
            <h1>D-FACILITIES</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
