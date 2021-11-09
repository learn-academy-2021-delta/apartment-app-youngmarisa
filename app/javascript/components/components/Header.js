import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import aptlogo from '../assets/aptlogo.png'

class Header extends Component {
  render() {
      const {
          logged_in,
          current_user,
          new_user_route,
          sign_in_route,
          sign_out_route
      } = this.props
    return(
        <header>
            <NavLink to = "/">
                <img src={aptlogo} alt="apartment app logo" className="aptlogo"/>
                </NavLink>
            <div className = "nav-bar">
                <ul>
                    <NavLink to="/apartmentindex" className='nav-link'>Browse Listings</NavLink>
                </ul>

                {!logged_in &&
                    <ul>
                        <a href={new_user_route} className ='nav-link'>Sign Up</a>
                    </ul>
                }
                
                
                {logged_in &&
                    <ul>
                        <NavLink to="/apartmentnew" className='nav-link'>New Listing</NavLink>
                    </ul>
                }
                
                
                {logged_in &&
                    <ul>
                        <NavLink to="/myapartments" className='nav-link'>My Listings</NavLink>
                    </ul>
                }
                <ul>
                    {logged_in && 
                        <a href={sign_out_route} className ='nav-link'>Sign Out</a>
                    }
                    {!logged_in &&
                        <a href={sign_in_route} className ='nav-link'>Sign In</a>
                    }
                </ul>
                

            </div>
        </header>
    )
  }
}

export default Header