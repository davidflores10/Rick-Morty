import characterRepository from "@/characters/repository/characterRepository";
import { useCharactersStore } from "@/stores/characters";
import type { Character } from "@/characters/support/models/character";
import { createRandomArray } from "@/shared/support/utils/createRandomArray";

export default {
  async getCharacters() {
    const characters = await characterRepository.getCharacters();
    this.setCharactersInStore(createRandomArray(characters, 5));
  },

  setCharactersInStore(charactersToBeSetted: Character[]) {
    const charactersStore = useCharactersStore();
    charactersStore.characters = charactersToBeSetted;
  },
};
