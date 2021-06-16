<template>
  <div>
    <h3>Author:</h3>
    <p>{{ message.author }}</p>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    message: {
      type: Object,
      default: null,
    },
  },
};
</script>
