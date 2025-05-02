import { calculateComplexity } from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
  it("calculates complexity", () => {
    const someInfoAsStub = {
      length: 5,
      extraInfo: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
      },
    };

    const actual = calculateComplexity(someInfoAsStub as any);

    expect(actual).toBe(25);
  });
});
