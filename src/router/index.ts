import AboutPage from "@/pages/AboutPage.vue";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutPage
    },
    {
      path: "/sign-up",
      component: SignUpPage
    },
    {
      path: "/log-in",
      component: LoginPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundPage,
    },
  ],
});

export default router;
