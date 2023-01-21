<script setup lang="ts">
import { onBeforeMount } from "vue";
import filterService from "@/characters/services/filterService";

onBeforeMount(async () => {
  const genderFilter = JSON.parse(String(localStorage.getItem("gender")));
  if (genderFilter) {
    filterService.setNewGenderFilter(genderFilter.gender);
  }

  const statusFilter = JSON.parse(String(localStorage.getItem("status")));
  if (statusFilter) {
    filterService.setNewGenderFilter(statusFilter.statusFilter);
  }
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
