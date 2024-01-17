import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

test("test dropdown component", () => {
  render(<Dropdown />);
  const dropdownText = screen.getByText(/Dropdown/i);
  expect(dropdownText).toBeInTheDocument();
});
