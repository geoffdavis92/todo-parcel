// Parcel test app
import React from "react";
import { render } from "react-dom";

class Hello extends React.PureComponent {
  constructor() {
    super();
    this.style = {
      color: "#333",
      fontFamily: '"Roboto", sans-serif',
      fontSize: "20px",
      textAlign: "center"
    };
  }
  render() {
    return <p style={this.style}>Hello {this.props.message}</p>;
  }
}

const node = document.getElementById("app");

render(<Hello message="Parcel-built app!" />, node);
