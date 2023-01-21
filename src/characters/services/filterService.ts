import { useFiltersStore } from "@/stores/filters";
export default {
  getFilters() {
    const filtersStore = useFiltersStore();
    return filtersStore;
  },

  setNewGenderFilter(newGender: string) {
    const filtersStore = useFiltersStore();
    filtersStore.gender = newGender;
  },

  setNewAliveStatusFilter(newAliveStatus: string) {
    const filtersStore = useFiltersStore();
    filtersStore.status = newAliveStatus;
  },
};
