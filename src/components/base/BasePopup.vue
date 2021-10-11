<template>
  <transition :name="animation" mode="out-in">
    <div v-if="active" @click="closeModal" class="popup">
      <div @click.stop class="popup-content">
        <img
          @click="closeModal"
          :style="{
            cursor: 'url(' + require('@/assets/icons/pointer.svg') + '),pointer'
          }"
          class="popup-remove"
          :src="require('@/assets/icons/remove.svg')"
        />
        <slot />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasePopup",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: "fade",
      validator: (val: string): boolean => ["fade", "bounce"].includes(val)
    }
  },
  setup(_, { emit }) {
    function closeModal() {
      emit("close");
    }
    return {
      closeModal
    };
  }
});
</script>
s
<style lang="scss">
@import "@/assets/styles/global.scss";
.popup {
  &-remove {
    position: absolute;
    top: 27px;
    right: 27px;
    width: 18px;
    height: 18px;
  }
  &-content {
    background: #ffffff;
  }
}

@media (max-width: 768px) {
  .popup-content {
    position: fixed;
    overflow-y: auto;
    padding: 16px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
::-webkit-scrollbar {
  display: none;
}
@media (min-width: 768px) {
  .popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $disabled;
    &-content {
      padding: 32px;
      border-radius: 30px;
      @include center;
    }
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active {
  animation: fade-in 0.5s;
}
.fade-leave-active {
  animation: fade-in 0.5s reverse;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0, 5;
  }
  100% {
    opacity: 1;
  }
}
</style>
