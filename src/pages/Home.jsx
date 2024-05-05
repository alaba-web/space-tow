import Footer from "../components/Footer";
import Header from "../components/Header";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <section className="home">
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <div className="home-box">
          <div className="home-word">
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="explore">EXPLORE</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
