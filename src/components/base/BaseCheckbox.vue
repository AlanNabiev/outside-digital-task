<template>
  <label class="checkbox">
    <slot />
    <input
      @change="$emit('update:modelValue', checked ? $event.target.value : '')"
      v-model="checked"
      :value="option"
      :disabled="disabled"
      type="checkbox"
    />
    <span
      :style="{
        cursor: 'url(' + require('@/assets/icons/pointer.svg') + '),pointer'
      }"
      class="checkmark"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    option: {
      type: String,
      required: false,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const checked = ref(false);
    return {
      checked
    };
  }
});
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
.checkbox label {
  margin-left: 1em;
}
.checkbox {
  transition: all 0.4s ease-in-out;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  font-size: 1em;
  height: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
}
.checkbox input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}
.checkbox .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #dfe3e6;
  border-radius: 6px;
  &:hover {
    border: 1px solid #000000;
  }
}
.checkbox input:checked ~ .checkmark {
  border: none;
  @include bg-color;
  background-image: url("../../assets/icons/check.svg");
  background-repeat: no-repeat;
  background-position: center;
}
.checkbox input:disabled ~ .checkmark {
  border: none;
  background: $disabled;
  background-image: url("../../assets/icons/check.svg");
  background-repeat: no-repeat;
  background-position: center;
  cursor: default !important;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox input:checked ~ .checkmark:after {
  display: block;
}
</style>
