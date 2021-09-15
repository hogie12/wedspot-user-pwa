import { render, screen } from "@testing-library/react";
import App from "./App";

test("wedspot venue text", () => {
  render(<App />);
  const VenueText = screen.getByText(/download/i);
  expect(VenueText).toBeInTheDocument();
});
