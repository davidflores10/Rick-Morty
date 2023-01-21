import characterRepository from "@/characters/repository/characterRepository";
import { useCharactersStore } from "@/stores/characters";
import type { Character } from "@/characters/support/models/character";
import { createRandomArray } from "@/shared/support/utils/createRandomArray";
import { numberOfCharacters } from "@/shared/support/constants/numberOfCharacters";

export default {
  async getCharacters() {
    const characters = await characterRepository.getCharacters();
    this.setCharactersInStore(
      createRandomArray(characters, numberOfCharacters)
    );
  },

  getCharactersFromStore() {
    const charactersStore = useCharactersStore();
    return charactersStore.characters;
  },

  setCharactersInStore(charactersToBeSetted: Character[]) {
    const charactersStore = useCharactersStore();
    charactersStore.characters = charactersToBeSetted;
  },
};
