import React, {Component} from 'react'
import {Card} from 'reactstrap'

class ApartmentShow extends Component {
  render() {
      const apartment = this.props
    
    return(
      <div className="page-body">
      <h3>Listing Information</h3>
      {appartment && 
      <Card>
      {apartment.street}
      {apartment.city}, {apartment.state}
      {apartment.price}
      {apartment.bedrooms}
      {apartment.bathrooms}
      {apartment.pets}
      {apartment.manager}
      {apartment.email}
      </Card>
    }
      </div>
      
    )
  }
}

export default ApartmentShow