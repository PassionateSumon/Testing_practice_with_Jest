import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./Skills";

const skillsProps = ["HTML", "CSS", "JS"];

describe("Skills test suite", () => {
  it("should render skills", () => {
    const view = render(<Skills skills={skillsProps} />);
    // logRoles(view.container);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skillsProps.length);
  });

  it("render login button", () => {
    render(<Skills skills={skillsProps} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  it("render start learning button", () => {
    render(<Skills skills={skillsProps} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  xit("should render start learning button is eventually displayed", async () => {
    render(<Skills skills={skillsProps} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 3000 }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
