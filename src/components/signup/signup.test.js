import { render } from "enzyme";
import Signup from "./signup";

describe("Signup component", () => {
  it("should render a div for signup", () => {
    const wrapper = render(<Signup />);
    expect(wrapper.find("div")).toBeDefined();
  });
});
