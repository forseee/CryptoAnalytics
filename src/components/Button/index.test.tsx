import { render } from "@testing-library/react";
import Button from "./index";

it("Homepage snapshot is correct", () => {
  const { container } = render(<Button>Button</Button>);
  expect(container).toMatchSnapshot();
});
