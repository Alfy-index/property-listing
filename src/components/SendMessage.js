import React, { Component } from "react";
import { useState } from "react";
import ContactForm from "./ContactForm";
class SendMessage extends Component {
  constructor(props) {
    super()
    this.state = {
      contactForm: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      contactForm: <ContactForm />,
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick} className="btn-primary">
          Send Message
        </button>
        <section className="filter-form">
          <article>{this.state.contactForm}</article>
        </section>
      </>
    );
  }
}
export default SendMessage;
