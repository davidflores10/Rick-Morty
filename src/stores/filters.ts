import { defineStore } from "pinia";

export const useFiltersStore = defineStore("filtersStore", {
  state: () => ({ gender: "" as string, status: "" as string }),
});
