import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    const { name, hobby, werwer, bullshit } = this.props.userInfo;
    return (
      <div>
        <h1>
          My name is {name}
        </h1>
        <h2>
          My hobby is {hobby}
        </h2>
      </div>
    );
  }
}
