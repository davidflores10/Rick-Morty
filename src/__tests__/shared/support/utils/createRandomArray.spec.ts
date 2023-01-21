import { describe, it } from "vitest";
import { createRandomArray } from "@/shared/support/utils/createRandomArray";
import { expect } from "vitest";
import { charactersList } from "mocks/characters/characterMock";

describe("@/shared/support/utils/createRandomArray", () => {
  it("Should return an array of random not recurrent elements", () => {
    const newRandomArray = createRandomArray(charactersList, 5);
    expect(newRandomArray.length).toBe(5);
  });
});
