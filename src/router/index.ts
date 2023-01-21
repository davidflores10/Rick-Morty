import { createRouter, createWebHistory } from "vue-router";
import Characters from "@/characters/views/characters.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "characters",
      component: Characters,
    },
  ],
});

export default router;
