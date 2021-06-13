<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>current user param {{ $route.params.user }}</h3>
    <h3>this is via route prop {{ user }} age {{ age }}</h3>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "About",
  props: {
    user: String,
    age: Number,
  },
});
</script>
