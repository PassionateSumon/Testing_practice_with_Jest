import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application test suite using getByRole", () => {
  it("should render application", () => {
    render(<Application />);

    const headingElement1 = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement1).toBeInTheDocument();
    const headingElement2 = screen.getByRole("heading", {
      level: 2,
    });
    expect(headingElement2).toBeInTheDocument();

    const hiddenHeading = screen.getByRole("heading", {
      level: 3,
      hidden: true,
    });
    expect(hiddenHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();
  });
});

describe("Application test suite using getByLabelText", () => {
  it("should render application", () => {
    render(<Application />);

    const nameElement = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement).toBeInTheDocument();

    const paraElement = screen.getByText((content) =>
      content.startsWith("This form is mandatory")
    );
    expect(paraElement).toBeInTheDocument();

  });
});
