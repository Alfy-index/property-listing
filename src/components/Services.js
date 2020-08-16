import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Property Valuation",
        info:
          "Determining the current and future market value of land, Determining the current and future market value of rental and commercial buildings, Forecasting cash flows from properties and Preparing of reports.",
      },
      {
        icon: <FaHiking />,
        title: "Property Management (Rental houses and Commercial houses)",
        info:
          "Property Listings, Rent calculation, Tax returns, Offsetting bills, Agency services, Developing competitive placement and replacement plans, and Real estate product modeling.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Insurance",
        info: "InsuranceAgency services and Product development",
      },
      {
        icon: <FaBeer />,
        title: "Financial Services",
        info:
          "Investment advisory (mutual funds, securities, property, and savings), Financial research and data analytics",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
