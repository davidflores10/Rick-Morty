import { useFiltersStore } from "@/stores/filters";
export default {
  getFilters() {
    const filtersStore = useFiltersStore();
    return filtersStore;
  },

  setNewGenderFilter(newGender: string) {
    const filtersStore = useFiltersStore();
    filtersStore.gender = newGender;
    localStorage.setItem("gender", JSON.stringify(filtersStore.gender));
  },

  setNewAliveStatusFilter(newAliveStatus: string) {
    const filtersStore = useFiltersStore();
    filtersStore.status = newAliveStatus;
    localStorage.setItem("status", JSON.stringify(filtersStore.status));
  },
};
