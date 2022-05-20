import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import admin from "../views/admin.vue";
import custom from "../views/custom.vue";
import blog from "../views/blog.vue";
import error from "../components/not_found.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
  },
  {
    path: "/custom",
    name: "custom",

    component: custom,
    // children:[
    //   {
    //     path:':id',
    //     name: "custom_detail",
    //     // component:() => import("../components/custom/custom_detail.vue"),
    //     component:custom_detail

    //   }
    // ]
  },
  {
    path: "/custom/:id",
    name: "custom_detail",
    component: () => import("../components/custom/custom_detail.vue"),
  },

  {
    path: "/blog",
    name: "blog",
    component: blog,
  },
  {
    path: "/blog/:id",
    name: "blog_detail",
    component: () => import("../components/blog/blogDetail.vue"),
  },
  { path: "/:pathMatch(.*)*", component: error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.path === "/custom/0") {
    router.push("/custom");
  }
});

export default router;
