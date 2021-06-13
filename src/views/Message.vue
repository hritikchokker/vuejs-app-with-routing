<template>
  <div>
    <p>{{ content }}</p>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    content: {
      default: "",
      type: String,
    },
  },
});
</script>
