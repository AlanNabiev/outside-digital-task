<template>Outside digital task</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  @include bg-color;
  @include center;
}
#app {
  font-family: "Lab Grotesque";
  color: $text-white;
  font-weight: $font-light;
}
</style>
