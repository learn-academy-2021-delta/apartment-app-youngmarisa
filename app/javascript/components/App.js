import React from "react"
import {
  BrowserRouter as  Router,
  Routes,
  Route
} from "react-router-dom"



class App extends React {
  render () {
    console.log("logged in:", this.props.logged_in);
    console.log("user:", this.props.current_user);
    console.log("sign up:", this.props.new_user_route);
    console.log("sign in:", this.props.sign_in_route);
    console.log("sign out:", this.props.sign_out_route);
    return (
      <React.Fragment>
        <h3>This is Home</h3>
      </React.Fragment>
    );
  }
}

export default App
