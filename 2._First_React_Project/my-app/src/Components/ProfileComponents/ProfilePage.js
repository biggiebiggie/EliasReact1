import React, { Component } from "react";
import Profile from "./Profile";

export default class ProfilePage extends Component {
  render() {
    const user1 = { name: "Emer", hobby: "Music", bullshit: "åhgud" };
    const user2 = { name: "Eli", hobby: "Gaming", werwer: "awerew" };
    const user3 = { name: "Teacher", hobby: "Teache" };

    const users = [user1, user2, user3];

    return (
      <div>
        <h1>Profile Page</h1>

        {users.map((user, index) =>
          <Profile key={"profile" + index} userInfo={user} />
        )}
      </div>
    );
  }
}
