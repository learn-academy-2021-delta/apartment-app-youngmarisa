import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
// import { Button } from 'reactstrap'
import {faLocationArrow, faCity} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class ApartmentIndex extends Component {
  render() {
    const {apartments} = this.props
    return(
      <div className="page-body">
      <h3>Available Listings</h3>
      <br />
      <br />
      <br />
      <article className = "cards">
        {apartments && apartments.map(apartment => {
          return(
            <section key={apartment.id} className="card">
              <div>
                <FontAwesomeIcon icon={faCity} className="fa-icon" />
                {apartment.street}
              </div>
              <div>
              <FontAwesomeIcon icon={faLocationArrow}  className="fa-icon" />
                {apartment.city}, {apartment.state}
              </div>
              <NavLink to={`/apartmentshow/${apartment.id}`}>
                See More
              </NavLink>
            </section>
          )
        })}
      </article>
      </div>
      
    )
  }
}

export default ApartmentIndex