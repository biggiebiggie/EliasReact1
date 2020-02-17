import React from "react";
import "./App.css";
import BusPage from "./Components/BusComponents/BusPage";
import ProfilePage from "./Components/ProfileComponents/ProfilePage";
//import ProfilePage from "./Components/ProfileComponents/ProfilePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navpage: "buspage",
      liveordie: "rip"
    };
  }

  onNavButtonClicked = navpage => {
    this.setState({ navpage }); // this.setState({ "navpage": navpage})
  };

  onLiveOrDieClicked = liveordie => {
    this.setState({ liveordie });
    console.log(liveordie);
  };

  render() {
    const { navpage } = this.state;

    console.log("this is the new value " + navpage);

    return (
      <div className="App">
        <button onClick={() => this.onNavButtonClicked("buspage")}>
          Bus Page
        </button>
        <button onClick={() => this.onNavButtonClicked("profilepage")}>
          Profile Page
        </button>

        <div onClick={() => this.onLiveOrDieClicked("rip")}>TO DIE</div>
        <div onClick={() => this.onLiveOrDieClicked("live")}>TO LIVE</div>

        {navpage === "buspage" ? <BusPage /> : <ProfilePage />}
      </div>
    );
  }
}

export default App;
