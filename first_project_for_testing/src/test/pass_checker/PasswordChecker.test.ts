import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Password less than 8 charaters should be invalid", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual.valid).toBe(false);
    expect(actual.errors).toContain(PasswordErrors.SHORT);
  });
  it("Password greater than 8 charaters should be ok", () => {
    const actual = sut.checkPassword("12345678");
    expect(actual.valid).toBe(true);
    expect(actual.errors).not.toContain(PasswordErrors.SHORT);
  });
});
