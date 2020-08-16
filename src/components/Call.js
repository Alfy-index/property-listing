import React, { Component } from "react";
import { FaPhone } from "react-icons/fa"
let contactForm = [];

export default class Call extends Component {
  constructor(props) {
    super();
    this.state = {
      phone: "",
      email: "",
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handleClick1 = this.handleClick1.bind(this);
  }

  handleClick = () => {
    this.setState({
      phone: (
        <a href="tel:+254711280760">
          <FaPhone />
        </a>
      ),
      email: <a href="info@finsalsavannah.com">info@finsalsavannah.com</a>,
    });
  };

  render() {
    return (
      <>
        <FaPhone />
        <button onClick={this.handleClick} className="btn btn-primary">
          {this.state.phone}
        </button>

        <div id="themodal" className="modal-hide-fade">
          <h3> Make call</h3>
        </div>
        <div className="modal-body"></div>
        <article>{this.state.email}</article>
        
      </>
    );
  }
}
