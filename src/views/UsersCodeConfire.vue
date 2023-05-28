<template>
  <div class="container">
    <form class="user-confirm">
      <div v-if="step === 1" class="user-confirm__step">
        <input type="text" v-model="userCodeComputed" class="user-confirm__step__input" />
        <button @click.prevent="sendUserCode" class="user-confirm__step__button">Вперед</button>
      </div>

      <div v-if="step === 2" class="user-confirm__step">
        <input type="text"  class="user-confirm__step__input" v-model="userCodeConfireComputed" />
        <button @click.prevent="checkCode" class="user-confirm__step__button">Подтвердить код</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "UsersCodeConfire",
  data() {
    return {
      validat: false,
      codeAttemptsCount: 0,
    };
  },

  methods: {
    sendUserCode() {
      this.validatForm();
      const codeUser = this.userCode;
      const codeUserCount = {};
      for (let i = 0; i < codeUser.length; i++) {
        if (!codeUserCount[codeUser[i]]) {
          codeUserCount[codeUser[i]] = true;
        } else {
          alert("Вы ввели повторяющие символы");
          return;
        }
        console.log(codeUserCount);
      }
      this.setStep(2);
    },
    validatForm() {
      if (this.userCode == "") {
        alert("Вы не заполнели поле");
        return;
      }
    },

    checkCode() {
      if (this.userCode == this.userCodeConfire) {
        this.codeAttemptsCount = 0;
        console.log(this.codeAttemptsCount);
        alert("Код подтвержден");
        return;
      }
      if (this.codeAttemptsCount >= 3) {
        console.log(this.codeAttemptsCount);
        alert("Вы забанены");
        setTimeout(() => {
          this.codeAttemptsCount = 0;
          alert("Попробуйте снова");
        }, 3000);
        return;
      } else {
        this.codeAttemptsCount += 1;
        alert("Нет совпдения");
        return;
      }
    },

    ...mapMutations({
      setStep: "SET_STEP",
      setUserCode: "SET_USERCODE",
      setUserCodeConfire: "SET_USERCODECONFIRM",
    }),
  },

  computed: {
    ...mapState({
      step: (state) => state.step,
      userCode: (state) => state.userCode,
      userCodeConfire: (state) => state.userCodeConfire,
    }),

    userCodeComputed: {
      get() {
        return this.userCode;
      },
      set(value) {
        this.setUserCode(value);
      },
    },

    userCodeConfireComputed: {
      get() {
        return this.userCodeConfire;
      },
      set(value) {
        this.setUserCodeConfire(value);
      },
    },
  },

  mounted() {},
};
</script>

<style lang="scss">
.user-confirm{
  width: 300px;
  height: 300px;
  &__step{
    width: 100%;
    height: 100%;
    &__input{
      background: white;
    }
    &__button{
      width: 80px;
      height: 20px;
      background: green;
    }
  }
}
</style>
