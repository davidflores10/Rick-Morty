<template>
  <div class="bg-grey_bg-50 flex flex-wrap">
    <div v-for="character in characters" :key="character.id" class="w-fit">
      <CharacterCard :character="character" />
    </div>
  </div>
</template>

<script setup lang="ts">
import characterService from "@/characters/services/characterService";
import { computed } from "vue";
import CharacterCard from "@/characters/components/CharacterCard.vue";

const characters = computed(() => characterService.getCharactersFromStore());
</script>
