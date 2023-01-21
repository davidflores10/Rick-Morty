import { defineStore } from "pinia";
import type { Character } from "@/characters/support/models/character";

export const useCharactersStore = defineStore("charactersStore", {
  state: () => ({ characters: [] as Character[] }),
});
