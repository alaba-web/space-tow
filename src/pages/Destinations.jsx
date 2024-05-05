import React from "react";
import "./destinations.css";
import Header from "../components/Header";
import { useData } from "../contexts/DataContext";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import Footer from "../components/Footer";

const imgs = [moon, mars, europa, titan];
const planets = ["MOON", "MARS", "EUROPA", "TITAN"];
const Destinations = () => {
  const { jsonData, displayItem, handleDestClick, destination } = useData();
  const planet = displayItem(destination);
  return (
    <div className="destination">
      <Header />
      {planet.map((data, index) => (
        <section className="dest" key={index}>
          <h5>01 PICK YOUR DESTINATION</h5>
          <div className="destination-box">
            <div className="planet">
              <img src={imgs[destination]} alt="planet" />
            </div>
            <div className="destination-word">
              <div className="planet-list">
                {jsonData.destinations.map((p, i) => (
                  <div
                    key={i}
                    className={destination === i ? "active-planet" : ""}
                    onClick={() => handleDestClick(i)}
                  >
                    {p.name.toUpperCase()}
                  </div>
                ))}
              </div>
              <h2>{data.name.toUpperCase()}</h2>
              <p>{data.description}</p>
              <div className="travel">
                <div>
                  <h3>AVG. DISTANCE</h3> <p>{data.distance.toUpperCase()}</p>
                </div>
                <div>
                  <h3>EST. TRAVEL TIME</h3> <p>{data.travel.toUpperCase()}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
};

export default Destinations;
