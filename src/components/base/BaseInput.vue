<template>
  <div class="input">
    <label :for="label" class="input_label">
      {{ label }}
    </label>
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      :type="type"
      :id="label"
      :placeholder="placeholder"
      :class="[
        { 'input_box-disabled': disabled, 'input_box-hasError': errors.length },
        'input_box'
      ]"
      :disabled="disabled"
    />
    <div v-if="errors.length" class="input-errors">
      <p v-for="(error, idx) in errors" :key="idx">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    modelValue: [String, Number],
    label: {
      type: String,
      default: "For input"
    },
    placeholder: {
      type: String,
      default: "Text..."
    },
    type: {
      type: String,
      default: "text"
    },
    errors: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
.input {
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: $font-medium;
  font-size: $text-m;
  line-height: $line-middle;
  transition: all 0.4s ease-in-out;
  &_label {
    color: $text-black;
    margin-bottom: 8px;
  }
  &_box {
    border: 1px solid #dfe3e6;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 8px 8px 10px;
    &:hover {
      border: 1px solid #000000;
    }
    &:focus {
      border: 1px solid #dfe3e6;
      outline: none;
      color: #000000;
    }
    &-hasError {
      border: 1px solid $text-red-hover !important;
    }
    &-disabled {
      border: 1px solid #808080;
      &:hover {
        border: 1px solid #808080;
      }
    }
  }
  &-errors {
    color: $text-red-hover;
    font-size: $text-s;
    line-height: $line-low;
    position: absolute;
    bottom: -24px;
  }
}
input[type="text"]::-webkit-input-placeholder {
  color: $disabled;
}
input[type="text"]::-moz-placeholder {
  color: $disabled;
}
</style>
