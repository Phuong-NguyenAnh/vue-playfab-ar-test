import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/sign-up",
      component: SignUpView,
    },
    {
      path: "/log-in",
      component: LoginView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

// document.title = to.name;
router.beforeEach((to, from, next) => {
  document.title = "Phuong | " + (to.name as string);
  next();
});

export default router;
