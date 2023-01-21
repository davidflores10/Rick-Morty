import characterRepository from "@/characters/repository/characterRepository";
import { useCharactersStore } from "@/stores/characters";
import type { Character } from "@/characters/support/models/character";

export default {
  async getCharacters() {
    const characters = await characterRepository.getCharacters();
    this.setCharactersInStore(characters);
  },

  setCharactersInStore(charactersToBeSetted: Character[]) {
    const charactersStore = useCharactersStore();
    charactersStore.characters = charactersToBeSetted;
  },
};
