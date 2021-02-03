import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  it("should render a div", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("app")).toBeDefined();
  });
});
