<template>
  <div>
    <select v-model="gender" @change="setGenderChange">
      <option disabled value="">Please select one</option>
      <option>{{ Gender.MALE.id }}</option>
      <option>{{ Gender.FEMALE.id }}</option>
      <option>{{ Gender.GENDERLESS.id }}</option>
      <option>{{ Gender.UNKWON.id }}</option>
    </select>
  </div>

  <div>
    <select v-model="aliveStatus" @change="setFiltersChange">
      <option disabled value="">Please select one</option>
      <option>{{ AliveStatus.ALIVE.id }}</option>
      <option>{{ AliveStatus.DEAD.id }}</option>
      <option>{{ AliveStatus.UNKWON.id }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { Gender } from "@/characters/support/models/constants/gender";
import { AliveStatus } from "@/characters/support/models/constants/aliveStatus";
import { onMounted } from "vue";
import characterService from "@/characters/services/characterService";
import filterService from "@/characters/services/filterService";
import { ref } from "vue";

const filters = filterService.getFilters();
const gender = ref<string>(filters.gender);
const aliveStatus = ref<string>(filters.status);
onMounted(() => characterService.getCharacters());

const setGenderChange = (newGender: Event) => {
  filterService.setNewGenderFilter(newGender?.target?.value);
  characterService.getCharacters();
};

const setFiltersChange = (newAliveStatus: Event) => {
  filterService.setNewAliveStatusFilter(newAliveStatus?.target?.value);
  characterService.getCharacters();
};
</script>
