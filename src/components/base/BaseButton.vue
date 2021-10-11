<template>
  <button
    :style="{
      cursor: 'url(' + require('@/assets/icons/pointer.svg') + '),pointer'
    }"
    :class="[
      BtnClasses,
      {
        'button-disabled':
          disabled && color !== 'transparent' && color !== 'button-red-tag',
        'button-disactive': !active
      },
      'button'
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    color: {
      type: String,
      default: "red",
      validator: (val: string): boolean =>
        ["red", "red-link", "red-tag", "transparent"].includes(val)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const BtnClasses = computed(() => {
      switch (props.color) {
        case "red":
          return "button-red button-small button-big";
        case "red-link":
          return "button-red-link button-small button-big";
        case "red-tag":
          return "button-red-tag";
        case "transparent":
          return "button-transparent";
        default:
          return "red";
      }
    });

    return {
      BtnClasses
    };
  }
});
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
.button {
  border-radius: 6px;
  transition: all 0.4s ease-in-out;
  &-disabled {
    background: $disabled !important;
    border: none !important;
    color: $text-white !important;
    cursor: default !important;
  }
  &-disactive {
    background: #eef0f2 !important;
    border: none !important;
    color: $text-black !important;
    &:hover {
      background: #dfe3e6 !important;
    }
  }
  &-red {
    @include bg-color;
    @include btn-shadow;
    font-weight: $font-medium;
    color: $text-white;
    border: none;
    width: 100%;
    &:hover {
      background: $bg-color-hover;
    }
    &-link {
      background: $bg-red;
      border: 1px solid $text-white;
      padding-left: 30px;
      padding-right: 30px;
      font-weight: $font-medium;
      color: $text-white;
      &:hover {
        background: $text-white;
        color: $text-black;
      }
    }
    &-tag {
      @include bg-color;
      padding: 6px 12px;
      border-radius: 50px;
      border-width: 0px;
      color: $text-white;
      font-size: $text-m;
      font-weight: $font-light;
      line-height: $line-middle;
      &:disabled {
        background: #eef0f2;
      }
    }
  }
  &-transparent {
    border: none !important;
    background: transparent;
    color: $text-red;
    font-size: $text-m;
    line-height: $line-middle;
    &:hover {
      color: $text-red-hover;
    }
  }
}

@media (max-width: 768px) {
  .button-small {
    padding-top: $text-xs;
    padding-bottom: $text-xs;
    font-size: $text-xs;
    line-height: $line-low-l;
  }
}
@media (min-width: 768px) {
  .button-big {
    padding-top: $text-l;
    padding-bottom: $text-l;
    font-size: $text-l;
    line-height: $line-middle;
  }
}
</style>
