import React, { useEffect, useState } from "react";
import "./crew.css";
import Header from "../components/Header";
import { useData } from "../contexts/DataContext";
import ansari from "../assets/crew/image-anousheh-ansari.png";
import hurley from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import Footer from "../components/Footer";

const imgs = [hurley, mark, victor, ansari];

const Crew = () => {
  const { jsonData } = useData();
  const [crewIndex, setCrewIndex] = useState(0);
  const displayItem = (item) => {
    return jsonData.crew.map((crew) => crew).filter((_, i) => i === item);
  };
  const nextCrew = () => {
    setCrewIndex((prevIndex) =>
      prevIndex === jsonData.crew.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextCrew, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCrewClick = (index) => {
    setCrewIndex(index);
  };
  const crew = displayItem(crewIndex);
  return (
    <div className="crew-container">
      <Header />
      {crew.map((data, index) => (
        <section key={index}>
          <h5>02 MEET YOUR CREW</h5>
          <div className="crew-box">
            <div className="crew-img">
              <img src={imgs[crewIndex]} alt="planet" />
            </div>
            <div className="crew-word">
              <div className="crew-list">
                {jsonData.crew.map((p, i) => (
                  <div
                    key={i}
                    className={crewIndex === i ? "active-crew ball" : "ball"}
                    onClick={() => handleCrewClick(i)}
                  ></div>
                ))}
              </div>
              <h3>{data.role.toUpperCase()}</h3>
              <h2>{data.name.toUpperCase()}</h2>
              <p>{data.bio}</p>
            </div>
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
};

export default Crew;
