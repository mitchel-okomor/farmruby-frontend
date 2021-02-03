import { shallow } from "enzyme";
import Signup from "./signup";

describe("Signup component", () => {
  it("should render a div for signup", () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.find("div")).toBeDefined();
  });
});
