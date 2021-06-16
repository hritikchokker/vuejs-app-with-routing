<template>
  <div id="nav">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <main class="main">
      <slot />
    </main>
    <footer>
      <div>Vue Footer</div>
    </footer>
  </div>
  <!-- <div id="nav">
      <component :is="layout">
        <router-link to="/">Home</router-link> |
        <router-link :to="{ name: `About`, params: { user: 'Hritik' } }"
          >About</router-link
        >
        |
        <router-link :to="{ path: '/messages' }">Messages Feed</router-link> |
        <router-link :to="{ path: '/message' }">Message</router-link>
      </component>
    </div>   -->
</template>

<style lang="scss">
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
