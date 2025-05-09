import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter test suite", () => {
  it("render correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementBtn).toBeInTheDocument();
  });

  it("render a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  it("render a count of 1", async () => {
    user.setup();
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementBtn);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  it("render a count of 2", async () => {
    user.setup();
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    await user.dblClick(incrementBtn);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  it("render a count of 10 after clicking set button", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");

    const setBtn = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setBtn);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  it("shuold focus in the right direction", async () => {
    user.setup();
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });
    const amountInput = screen.getByRole("spinbutton");
    const setBtn = screen.getByRole("button", {
      name: "Set",
    });

    await user.tab();
    expect(incrementBtn).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setBtn).toHaveFocus();
  });
});

describe("Practice of Utility API", () => {
  it("clear", () => {
    user.setup();
    render(<textarea defaultValue="Hey there!" />);
    user.clear(screen.getByRole("textbox"));
    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  it("select", async () => {
    user.setup();
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );
    await user.selectOptions(screen.getByRole("listbox"), ["1", "C"]);
    expect(
      (screen.getByRole("option", { name: "A" }) as HTMLOptionElement).selected
    ).toBe(true);
    expect(
      (screen.getByRole("option", { name: "B" }) as HTMLOptionElement).selected
    ).toBe(false);
    expect(
      (screen.getByRole("option", { name: "C" }) as HTMLOptionElement).selected
    ).toBe(true);
  });

  xit("deselect", async () => {
    user.setup();
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2" selected>
          B
        </option>
        <option value="3">C</option>
      </select>
    );
    await user.deselectOptions(screen.getByRole("listbox"), "2");
    expect(
      (screen.getByRole("option", { name: "B" }) as HTMLOptionElement).selected
    ).toBe(false);
  });

  it("upload", async () => {
    user.setup();
    render(
      <div>
        <label htmlFor="file-uploader">Upload file:</label>
        <input type="file" id="file-uploader" />
      </div>
    );
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    const input: any = screen.getByLabelText(/Upload file/i);
    await user.upload(input, file);
    // console.log(input.files);

    expect(input.files[0]).toBe(file);
    expect(input.files.item(0)).toBe(file);
    expect(input.files).toHaveLength(1);
  });

  

});
