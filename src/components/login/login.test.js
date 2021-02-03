import { shallow } from "enzyme";
import Login from "./login";

describe("Login component", () => {
  it("should render a div", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div")).toBeDefined();
  });
});
