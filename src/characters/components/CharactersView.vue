<template>
  <div class="bg-green-900">
    <div v-for="character in characters" :key="character.id">
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
