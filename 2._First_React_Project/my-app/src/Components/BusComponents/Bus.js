import React, { Component } from "react";

export default class Wheel extends Component {
  render() {
    const { wheel } = this.props.wheelInfo;

    return (
      <div>
        <h2>
          {wheel}
        </h2>
      </div>
    );
  }
}
