<template>
  <div id="app">
    <div id="nav">
      <!-- <component :is="layout"> -->
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: `About`, params: { user: 'Hritik' } }"
        >About</router-link
      >
      |
      <router-link :to="{ path: '/messages' }">Messages Feed</router-link> |
      <router-link :to="{ path: '/message' }">Message</router-link>
      <!-- </component> -->
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data: () => ({
    layout: () =>
      import(/* webpackChunkName: "defaultlayout" */ "./layouts/default.vue"),
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
