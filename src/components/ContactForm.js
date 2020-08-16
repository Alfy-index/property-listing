import React, { useContext, Component } from "react";
import { RoomContext } from "../context";
import { useState } from "react";
let name, phone, email, message;
let contactInfo = {};
class ContactForm extends Component {
  static contextType = RoomContext;
  constructor(props) {
    super(props);
    this.state = {
      name: "ken",
      phone: "0000",
      message: "properties ",
      email: "ay@ggg.com ",
      contactInfo: ["ken", "0000", "ay@ggg.com", "properties"],
      hideForm: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.hide = this.hide.bind(this);
  }
  handleChange = (event) => {
    this.setState({});
    // event.preventDefault();
    if (event.target.id === "name") {
      name = event.target.value;
    }
    if (event.target.id === "phone") {
      phone = event.target.value;
    }
    // if (event.target.id === "message") {
    message = event.target.value;
    // }
    // if (event.target.id === "email") {
    email = event.target.value;
    // }
    console.log(email);
  };
  hide = () => {
    this.setState({
      hideForm: !this.state.hideForm,
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#F8F8FF",
          border: "2px solid #F8f8f8",
          transition: "all 0.3s",
          transform: "scale(1)",
        }}
        className=""
      >
        {this.state.hideForm ? (
          <form
            action=""
            method=""
            onChange={this.handleChange}
            style={{ borderRadius: "2px", width: "50%", textAlign: "center" }}
            className="filter-form"
          >
            <label htmlFor="name">Enter Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={this.handleChange}
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="phone"
              className="form-control"
              id="phone"
              onChange={this.handleChange}
            />

            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />

            <label htmlFor="message">message</label>
            <textarea
              type="text"
              className="form-control"
              id="message"
              onChange={this.handleChange}
              style={{ minHeight: "200px" }}
            ></textarea>
            <button onClick={this.hide} className="btn btn-primary">
              Submit
            </button>
          </form>
        ) : null}
      </div>
    );
  }
}
export default ContactForm;
