<template>
    <h1>{{ textmsg }}</h1>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "InlineAlert",
  props: {
    msg: String
  },
  setup() {
    const textmsg = "I am Hello World Component";
    return {
      textmsg
    };
  }
});
</script>