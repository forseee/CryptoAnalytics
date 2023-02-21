import { FixForFirstNum } from "../formaters";

describe("On combination on FixForFirstNum coorect", () => {
  it("correct num 1", () => {
    const value = FixForFirstNum(1, 1);
    expect(value).toBe(1);
  });
  it("correct num 2", () => {
    const value = FixForFirstNum(0, 1);
    expect(value).toBe(0);
  });
  it("correct num 3", () => {
    const value = FixForFirstNum(0.000003232, 2);
    expect(value).toBe(0.0000032);
  });
  it("correct num 3", () => {
    const value = FixForFirstNum(0.000003232, 3);
    expect(value).toBe(0.00000323);
  });
  it("correct num 3", () => {
    const value = FixForFirstNum(0.000003232, 1);
    expect(value).toBe(0.000003);
  });
});
