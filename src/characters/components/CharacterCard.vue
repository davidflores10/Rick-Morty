<template>
  <div
    class="flex w-[600px] h-[220px] overflow-hidden bg-grey_card-50 m-3 rounded-lg"
  >
    <img :src="character.image" :alt="character.name" />
    <div class="p-3">
      <a :href="character.url" class="text-2xl text-white h-fit"
        ><h2>{{ character.name }}</h2></a
      >
      <h3 class="text-2xl text-white text-[16px]">
        <span
          class="inline-block h-2 w-2 rounded-[50%]"
          :class="getStatusClass(character)"
        ></span>
        {{ `${character.status}-${character.species}` }}
      </h3>
      <span class="text-[16px] text-grey_title-50 block"
        >Last known location:
      </span>
      <a
        :href="character.location.url"
        class="text-white hover:text-orange-600"
        >{{ character.location.name }}</a
      >

      <span class="text-[16px] text-grey_title-50 block">First seen in: </span>
      <a
        class="text-white hover:text-orange-600"
        :href="character.episode[0]"
        >{{ character.origin.name }}</a
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Character } from "@/characters/support/models/character";
import { AliveStatus } from "@/characters/support/models/constants/aliveStatus";
defineProps<{
  character: Character;
}>();

const getStatusClass = (character: Character) => {
  if (character.status === AliveStatus.ALIVE.id) {
    return "bg-green-500";
  }

  if (character.status === AliveStatus.DEAD.id) {
    return "bg-red-500";
  }

  if (character.status === AliveStatus.UNKWON.id) {
    return "bg-yellow-500";
  }
};
</script>
