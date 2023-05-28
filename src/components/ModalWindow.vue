<template>
  <div class="modal-window" v-if="showModal == true">
    <div class="modal-window__info">
      <div class="modal-window__info-btn">
        <custom-button
          class="modal-window__info-btn_button"
          @clickButton="$emit('showModalWindow')"
          >X</custom-button
        >
      </div>

      <div class="modal-window__info-text">
        <div class="modal-window__info-text_title">
          <span class="modal-window__info-text_title-h3">{{ fag }}</span>
        </div>
        <div v-for="item in modalItems" :key="item" class="modal-window__info-text_block">
          <div class="modal-window__info-text_block-title">
            <span class="modal-window__info-text_block-title_span">{{
              item.title
            }}</span>
          </div>
          <div class="modal-window__info-text_block-text">
            <span class="modal-window__info-text_block-text_span">{{
              item.subTitle
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "./UI/CustomButton.vue";
import CustomTitle from "./UI/CustomTitle.vue";
export default {
  components: { CustomButton, CustomTitle },
  name: "ModalWindow",
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    fag: {
      type: String,
    },
    modalItems:{
      type:Array
    }
  },

  beforeDestroy(){
    console.log('сработало');
  }
};
</script>

<style>
.modal-window {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  /* background: rgba(56, 69, 93, 0.5); */
}
.modal-window__info {
  position: absolute;
  left: 50%;
  top: 50%;
  overflow: auto;
  height: 100%;
  transform: translate(-50%, -50%);
  width: 750px;
  background: rgba(6, 6, 31, 0.97);
  border: 1px solid rgba(184, 184, 227, 0.08);
  box-shadow: 0px 10px 10px rgba(6, 6, 40, 0.55),
    inset 0px -8px 0px rgba(5, 5, 27, 0.4),
    inset 0px 1px 0px rgba(189, 189, 238, 0.15);
  border-radius: 4px;
  padding: 65px;
}
@media (max-width: 1100px) {
  .modal-window__info {
    width: 650px;
  }
}
@media (max-width: 670px) {
  .modal-window__info {
    width: 550px;
  }
}
@media (max-width: 570px) {
  .modal-window__info {
    width: 400px;
  }
}
.modal-window__info::-webkit-scrollbar {
  width: 10px;
  background-color: #f9f9fd;
}
.modal-window__info::-webkit-scrollbar-thumb {
  background-color: #fcb223;
}
.modal-window__info::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #f9f9fd;
}

.modal-window__info-btn {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
}

.modal-window__info-btn_button {
  position: relative;
  width: 16px;
  height: 16px;
  background: rgba(6, 6, 31, 0.97);
  color: #fcb223;
  border: none;
  font-size: 24px;
  bottom: 45px;
  left: 30px;
}

.modal-window__info-text_title-h3 {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 48px;
  letter-spacing: -0.03em;
  color: #ffffff;
}

.modal-window__info-text_block-title_span {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 32px;
  letter-spacing: -0.03em;
  color: #fcb223;
}

.modal-window__info-text_block-text_span {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #ffffff;
}

.modal-window__info-text_title {
  display: flex;
  height: 65px;
  margin-bottom: 25px;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
}
.modal-window__info-text_block-title {
  margin-bottom: 20px;
}

.modal-window__info-text_block-text {
  margin-bottom: 20px;
}
</style>
