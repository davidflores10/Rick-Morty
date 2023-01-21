<template>
  <div>
    <select v-model="gender">
      <option disabled value="">Please select one</option>
      <option>{{ Gender.MALE.id }}</option>
      <option>{{ Gender.FEMALE.id }}</option>
      <option>{{ Gender.GENDERLESS.id }}</option>
      <option>{{ Gender.UNKWON.id }}</option>
    </select>
  </div>

  <div>
    <select v-model="aliveStatus">
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
import { ref } from "vue";
const gender = ref<string>("");
const aliveStatus = ref<string>("");
</script>
