import React, { Component } from "react";
import Wheel from "./Bus";

export default class BusPage extends Component {
  render() {
    const wheel1 = { wheel: "Forrest højre" };
    const wheel2 = { wheel: "Forrest venstre" };
    const wheel3 = { wheel: "Bagerst højre" };
    const wheel4 = { wheel: "Bagerst venstre" };

    const wheels = [wheel1, wheel2, wheel3, wheel4];

    return (
      <div>
        <h1>A BIIIIG BUS</h1>
        {wheels.map((wheel, index) => {
          return <Wheel key={"Profile " + index} wheelInfo={wheel} />;
        })}
      </div>
    );
  }
}
