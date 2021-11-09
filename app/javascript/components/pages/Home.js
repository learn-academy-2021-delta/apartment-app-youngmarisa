
import React, {Component} from 'react'
import apartments from '../assets/apartments.jpg'

class Home extends Component {
  render() {
    return(
      <>
      <img src={apartments} alt='colored apartments' className='apartments'/>
      </>
    )
  }
}

export default Home