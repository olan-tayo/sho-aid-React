import { render, screen } from "@testing-library/react";
import Dropdown from "./components/Dropdown/Dropdown";

test("renders dropdown", () => {
  render(<Dropdown />);
  const linkElement = screen.getByText(/dropdown/i);
  expect(linkElement).toBeInTheDocument();
});
