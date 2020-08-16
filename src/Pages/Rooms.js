import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomsContainer";
const Properties = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Properties">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};
export default Properties;
