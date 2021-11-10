import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'


Enzyme.configure({adapter: new Adapter()})

describe("when footer renders", () =>{
    it("displays a nav bar", () => {
        const footer = shallow(<Footer />)
        const footerNav = footer.find("ul")
        expect(footerNav.length).toEqual(2)
    })
})