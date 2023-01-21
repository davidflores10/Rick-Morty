import type { Character } from "@/characters/support/models/character";

export const createRandomArray = (
  array: Array<Character>,
  arrayLength: number
): Array<Character> => {
  const resultArray = [];
  while (resultArray.length < arrayLength) {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    if (!resultArray.map((ra) => ra.id).find((ra) => ra === randomElement.id)) {
      resultArray.push(randomElement);
    }
  }
  return resultArray;
};
