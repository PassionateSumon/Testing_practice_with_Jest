import { getPerson, StringUtils, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils test suite", () => {
    let sut: StringUtils;
    beforeEach(() => {
      sut = new StringUtils();
    });

    it("should return the uppercase for given valid string", () => {
      const actual = sut.toUpperCase("hey there!");
      const expected = "HEY THERE!";
      expect(actual).toBe(expected);
    });

    it("should return the error on invalid argument normal function", () => {
      function expectError() {
        const actual = sut.toUpperCase("");
      }
      expect(expectError).toThrow();
      expect(expectError).toThrowError("String is empty or null");
    });

    it("should return the error on invalid argument arrow function", () => {
      expect(() => {
        const actual = sut.toUpperCase("");
      }).toThrow();
      expect(() => {
        const actual = sut.toUpperCase("");
      }).toThrowError("String is empty or null");
    });

    it("should return the error on invalid argument try catch block", (done) => {
      try {
        sut.toUpperCase("");
        done("StringUtils should throw an error while invalid argument");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "String is empty or null");
        done();
      }
    });
  });

  it("should return the uppercase for given valid string", () => {
    // Arrange
    const sut = toUpperCase;
    const expected = "HEY THERE!";
    // Act
    const actual = sut("hey there!");

    // Assert
    expect(actual).toBe(expected);
  });
});

describe("getPerson test suite", () => {
  it("should return a person object with the correct properties", () => {
    // Arrange
    const sut = getPerson;
    const expected = {
      upperCase: "JOHN DOE",
      lowerCase: "john doe",
      titleCase: "John doe",
    };
    // Act
    const actual = sut({
      name: "John Doe",
      age: 30,
      address: "123 Main St, Anytown, USA",
      phone: ["123-456-7890", "987-654-3210"],
      gender: "male",
    });

    // Assert
    expect(actual).toEqual(expected);
  });
});
