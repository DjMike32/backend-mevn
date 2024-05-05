import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/tasks2",
    alias: "/tasks",
    name: "tasks",
    component: () => import("../components/TaskList.vue"),
  },
  {
    path: "/",
    name: "tasks-new",
    component: () => import("../components/TaskForm.vue"),
  },
  {
    path: "/tasks/:id",
    name: "tasks-details",
    component: () => import("../components/TaskDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
