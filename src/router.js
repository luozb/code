import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/home/home.vue"),
      children: [
        {
          path: "carmsg",
          name: "carmsg",
          component: () => import("./components/CarMsg.vue")
        },
        {
          path: "/base",
          name: "base",
          component: () => import("./views/base/base.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login/login.vue")
    }
  ]
});
