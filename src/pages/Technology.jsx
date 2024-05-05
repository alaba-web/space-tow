import React, { useEffect, useState } from "react";
import "./technology.css";
import Header from "../components/Header";
import { useData } from "../contexts/DataContext";
import lvLand from "../assets/technology/image-launch-vehicle-landscape.jpg";
import lvPort from "../assets/technology/image-launch-vehicle-portrait.jpg";
import scLand from "../assets/technology/image-space-capsule-landscape.jpg";
import scPort from "../assets/technology/image-space-capsule-portrait.jpg";
import spLand from "../assets/technology/image-spaceport-landscape.jpg";
import spPort from "../assets/technology/image-spaceport-portrait.jpg";
import Footer from "../components/Footer";

const imgsLand = [lvLand, spLand, scLand];
const imgsPort = [lvPort, spPort, scPort];

const Technology = () => {
  const { jsonData } = useData();
  const [techIndex, setTechIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [imgUrl, setImgUrl] = useState("");

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (viewportWidth < 1000) {
      setImgUrl(imgsLand[techIndex]);
    } else {
      setImgUrl(imgsPort[techIndex]);
    }
  }, [viewportWidth]);
  const displayItem = (item) => {
    return jsonData.technology.map((tech) => tech).filter((_, i) => i === item);
  };

  const handleTechClick = (index) => {
    setTechIndex(index);
  };
  const tech = displayItem(techIndex);
  return (
    <div className="tech-container">
      <Header />
      {tech.map((data, index) => (
        <section key={index}>
          <h5>03 SPACE LAUNCH 101</h5>
          <div className="tech-box">
            <div className="tech">
              <img src={imgUrl} alt="technology" />
            </div>
            <div className="tech-word">
              <div className="tech-list">
                {jsonData.technology.map((_, i) => (
                  <div
                    key={i}
                    className={techIndex === i ? "active-tech oval" : "oval"}
                    onClick={() => handleTechClick(i)}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="tech-word-word">
                <h3>THE TERMINOLOGY...</h3>
                <h2>{data.name.toUpperCase()}</h2>
                <p>{data.description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
};

export default Technology;
