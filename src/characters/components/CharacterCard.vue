<template>
  <div
    class="flex w-[600px] h-[220px] overflow-hidden bg-grey_card-50 m-3 rounded-lg"
  >
    <img :src="character.image" :alt="character.name" />
    <h2 class="text-2xl text-white">{{ character.name }}</h2>
  </div>
</template>
<script setup lang="ts">
import type { Character } from "@/characters/support/models/character";
defineProps<{
  character: Character;
}>();
</script>
