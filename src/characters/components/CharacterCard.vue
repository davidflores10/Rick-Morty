<template>
  <span class="text-blue-600">{{ character.name }}</span>
</template>
<script setup lang="ts">
import type { Character } from "@/characters/support/models/character";
defineProps<{
  character: Character;
}>();
</script>
