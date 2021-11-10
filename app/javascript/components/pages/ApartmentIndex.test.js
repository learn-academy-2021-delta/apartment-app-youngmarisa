import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentIndex from './ApartmentIndex'
import { faItalic } from '@fortawesome/free-solid-svg-icons'

Enzyme.configure({adapter: new Adapter()})

describe('when index renders', () => {
    it('displays a header', () => {
        const indexHeader = shallow(<ApartmentIndex />).find("h3")
        expect(indexHeader.text()).toEqual("Available Listings")
    })
})