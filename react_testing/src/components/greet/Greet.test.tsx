import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet test suite", () => {
  it("should render hello", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
  it("should render hello with name prop", () => {
    render(<Greet name="Sumon" />);
    const textElement = screen.getByText("Hello Sumon");
    expect(textElement).toBeInTheDocument();
  });
});
