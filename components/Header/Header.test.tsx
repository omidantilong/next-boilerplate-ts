import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("header", () => {
  it("renders the header", () => {
    render(<Header />);
    expect(screen.getByText("Header")).toBeInTheDocument();
  });
});
