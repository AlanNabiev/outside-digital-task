<template>
  <BaseButton class="nav_button" @click="openModal" color="red-link"
    >Налоговый вычет</BaseButton
  >
  <BasePopup @close="closeModal" :active="popup" animation="fade">
    <div class="popup-container">
      <h1 class="popup-headline">Налоговый вычет</h1>
      <div class="popup-text">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального
        годового дохода.
      </div>
      <BaseInput
        @input="errorsHandler"
        class="popup-input"
        label="Ваша зарплата в месяц"
        placeholder="Введите данные"
        v-model="pay"
        :errors="errors"
      />
      <BaseButton @click="calculate" color="transparent">Рассчитать</BaseButton>
      <ul v-if="paymentList" class="popup-list">
        <p class="popup-list-text">Итого можете внести в качестве досрочных:</p>
        <li v-for="(payment, idx) in payments" :key="idx">
          <BaseCheckbox>
            <span :style="{ marginRight: '4px' }" class="popup-list-payment"
              >{{ payment }}
            </span>
            <span>{{
              `${idx === 1 ? "во" : "в"} ${idx + 1}-${
                idx === 1 ? "ой" : "ый"
              } год`
            }}</span>
          </BaseCheckbox>
          <hr :style="{ height: '1px', width: '100%', color: '#DFE3E6' }" />
        </li>
      </ul>
      <div class="popup-nav">
        <p class="popup-nav-text">Что уменьшаем ?</p>
        <div class="popup-nav-menu">
          <BaseButton
            @click="popupNav = 'payment'"
            color="red-tag"
            :style="{ marginRight: '16px' }"
            :active="popupNav === 'payment'"
            >Платёж</BaseButton
          >
          <BaseButton
            @click="popupNav = 'time'"
            color="red-tag"
            :active="popupNav === 'time'"
            >Срок</BaseButton
          >
        </div>
      </div>
      <BaseButton
        @click="errorsHandler"
        :style="{ marginTop: '40px' }"
        color="red"
        >Добавить</BaseButton
      >
    </div>
  </BasePopup>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const popup = ref(false);
    function openModal() {
      popup.value = true;
    }
    function closeModal() {
      popup.value = false;
    }

    const popupNav = ref("payment");

    const pay: any = ref(null);
    const paymentList = ref(false);
    function calculate() {
      errorsHandler();
      if (pay.value) {
        paymentList.value = true;
      }
    }
    const payments = computed(() => {
      const yearPayment = Math.trunc(pay.value * 12 * 0.13);
      if (yearPayment * 4 > 260000) {
        const lastpayment = 260000 - yearPayment * 3;
        if (lastpayment < 0) {
          const fixedPayment = 260000 / 4;
          return new Array(4).fill(fixedPayment);
        }
        return [yearPayment, yearPayment, yearPayment, lastpayment];
      }
      return new Array(4).fill(yearPayment);
    });

    const errors: any = ref([]);
    function errorsHandler() {
      if (!pay.value) {
        errors.value = ["Поле обязательно для заполнения"];
      } else {
        errors.value = [];
      }
    }

    return {
      openModal,
      closeModal,
      popupNav,
      popup,
      payments,
      pay,
      paymentList,
      calculate,
      errors,
      errorsHandler
    };
  }
});
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  @include bg-color;
}
#app {
  font-family: "Lab Grotesque";
  color: #808080;
  font-weight: $font-light;
  font-size: $text-m;
}
.nav_button {
  @include center;
}
.popup {
  &-headline {
    @include headline;
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 16px;
  }
  &-input {
    margin-top: 24px;
    margin-bottom: 8px;
  }
  &-nav {
    margin-top: 28px;
  }
}
.popup-list {
  list-style: none;
  &-payment {
    color: $text-black;
  }
}
.popup-list-text,
.popup-nav-text {
  @include subtitle;
}
@media (min-width: 768px) {
  .popup-nav {
    display: flex;
    justify-content: space-between;
    &-menu {
      margin: auto;
    }
  }
}
</style>
