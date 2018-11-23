import React from "react";
import Search from "./search";
import { shallow } from "enzyme";
import App from ".app";

describe("Search", () => {
  describe`('when submitting,()=>{
    it ('should prevent the submit event\'s default',()=>
    const makeSubmitSearch = jest.fn();
    const mockEvent = {preventDeafualt:jest.fn()}
    const wrapper= shallow(
      search submitSearch{makeSubmitSearch}/>)
      
      const form = wrapper.find('form')
      form.simulate('submit, mockEvent);
      expect(mockEvenet.preventDefault).tohaveBeenCalled();
      expect(mockEvent.preventDefault.mock.calls.length).toBe(1);
    )
    )}

    it('should call the submitSearch receiver function with movieStr')
  })

  describe (when typing in the input, ()=>{
    it ('should call handleChange with the input value')
  })
it('should render consistently')

  // test("should initially set value to input text", () => {
  //   const wrapper = shallow(<Search />);
  //   expect(wrapper.find(inputText));
  // });
  // test("should on change update the state of the booksearc string", () => {
  //   const wrapper = shallow(<Search />);
  //   expect(wrapper.find(handleChange));
  // });
})
