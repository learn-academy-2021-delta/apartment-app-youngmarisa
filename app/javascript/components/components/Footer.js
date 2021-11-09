import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'


class Footer extends Component {
  render() {
    return(
        <footer>
            <div className='nav-bar'>
              
                <ul>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                </ul>

                 <ul>
                    <NavLink to="/apartmentindex" className='nav-link'>Browse Listings</NavLink>
                </ul>
             
            </div>
        </footer>
      
    )
  }
}

export default Footer