import { describe, expect, it, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useCharactersStore } from "@/stores/characters";
import characterService from "@/characters/services/characterService";
import { rickSanchez } from "mocks/characters/characterMock.ts";

describe("characters/services/characterService.ts", () => {
  it("Should set characters from request in store", async () => {
    setActivePinia(createPinia());
    const characterStore = useCharactersStore();
    await characterService.getCharacters();
    expect(characterStore.characters.length).toBe(5);
  });
});
