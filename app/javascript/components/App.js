import React, {Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'



class App extends Component {
  render () {
    console.log("logged in:", this.props.logged_in);
    console.log("user:", this.props.current_user);
    console.log("sign up:", this.props.new_user_route);
    console.log("sign in:", this.props.sign_in_route);
    console.log("sign out:", this.props.sign_out_route);
    return (
      <Router>
        <Header {...this.props}/>
        <Routes>
          <Route exact path = "/" element={<Home />}/>
          <Route path = "/apartmentindex" element={<ApartmentIndex />}/>
          <Route path = "/apartmentnew" element={<ApartmentNew />}/>
          <Route path = "/myapartments" element={<ApartmentEdit />}/>

        </Routes>  
        <Footer {...this.props}/>
      </Router>
    );
  }
}

export default App
