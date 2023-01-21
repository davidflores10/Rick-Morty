<script setup lang="ts">
import { onBeforeMount } from "vue";
import filterService from "@/characters/services/filterService";

onBeforeMount(async () => {
  const filters = JSON.parse(String(localStorage.getItem("filters")));
  filterService.setNewAliveStatusFilter(filters.status);
  filterService.setNewGenderFilter(filters.gender);
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
