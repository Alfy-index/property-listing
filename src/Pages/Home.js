import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const Home = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="Properties both Houses and Land Available"
          subtitle="Luxurious houses starting at Ksh.6500"
        >
          <Link to="/rooms" className="btn-primary">
            Our Properties
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
};
export default Home;
