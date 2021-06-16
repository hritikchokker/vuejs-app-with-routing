import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // props: true,
    props: { user: "Jon Doe", age: 22 },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/messages",
    name: "messageFeed",
    component: () =>
      import(/* webpackChunkName: "messages" */ "../views/MessageFeed.vue"),
    props: true,
    async beforeEnter(to: any, from: any, next: any) {
      if (!to.params || !to.params.messages) {
        const module = await import(
          /* webpackChunkName: "messagesFeed" */ "../assets/messages"
        );
        const messages = module.default;
        if (messages && messages.length > 0) {
          to.params.messages = messages;
        }
      }

      next();
    },
  },
  {
    path: "/message/:id",
    name: "message",
    component: () =>
      import(/* webpackChunkName: "message" */ "../views/Message.vue"),
    async beforeEnter(to, from, next) {
      if (to.params && to.params.id) {
        const id = to.params.id;
        const module: any = await import(
          /* webpackChunkName: "messagesFeed" */ "../assets/messagesList"
        );
        const messages: any = module.default;
        if (messages && messages.length > 0 && id < messages.length) {
          to.params.message = messages[id];
        }
      }

      next();
    },
    props: true,
    children: [
      {
        path: "author",
        name: "messageAuthor",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "messageAuthor" */ "../views/MessageAuthor.vue"
          ),
      },
      {
        path: "info",
        props: true,
        name: "messageInfo",
        component: () =>
          import(
            /* webpackChunkName: "messageInfo" */ "../views/MessageInfo.vue"
          ),
      },
    ],
  },
  // {
  //   path: "/message",
  //   name: "message",
  //   component: () =>
  //     import(/* webpackChunkName: "message" */ "../views/Message.vue"),
  //   props: true,
  // },
  {
    path: "/error",
    name: "error",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/Error.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
