<template>
  <div class="footer">
   <div class="footer-layout">
     <div class="footer-layout__logo">
      <img :src="require('../../assets/images/Logo.svg')" alt="">
     </div>
      <div class="footer-layout__span">
        <span class="footer-layout__span-text">© 2023. Valor Partners</span>
      </div>
      <div class="footer-layout__btn">
        <custom-button class="footer-layout__btn-button"><span class="footer-layout__btn-button_span">F.A.Q.</span></custom-button>
        <custom-button class="footer-layout__btn-button"><span class="footer-layout__btn-button_span">Terms</span></custom-button>
      </div>

      <div class="footer-layout__send">
        <custom-button class="footer-layout__send-button"><img :src="require('../../assets/images/path9 1.svg')" alt=""><span class="footer-layout__send-button_span">@ValorManager</span></custom-button>
        <custom-button class="footer-layout__send-button"><img :src="require('../../assets/images/Vector (14).svg')" alt=""><span class="footer-layout__send-button_span">@ValorManager</span></custom-button>
      </div>
   </div>
  </div>
</template>

<script>
import CustomSubTitle from '../UI/CustomSubTitle.vue';
import CustomButton from '../UI/CustomButton.vue';
export default {
components:{CustomSubTitle,CustomButton},
name: 'FooterLayout'
}
</script>

<style>
.footer{
  width: 100%;
  background-image: url(../../assets/images/GroundBottom.jpg);
}
@media(max-width: 700px){
  .footer-layout{
    flex-direction: column !important;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 0px !important;
  }
}
.footer-layout{
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
padding-top: 100px;
}

.footer-layout__logo{
width: 158px;
margin-left: 40px;
}

.footer-layout__span-text{
width: 130px;
height: 18px;
font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 18px;
letter-spacing: -0.03em;
color: #FFFFFF;
}
.footer-layout__btn-button{
background-color: transparent;
border: none;
cursor: pointer;
width: 95px;
height: 40px;
}
.footer-layout__btn-button_span{
width: 34px;
height: 18px;
font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 18px;
letter-spacing: -0.03em;
color: #8989AA;
}

.footer-layout__send-button{
border: none;
background-color: transparent;
cursor: pointer;
margin-left: 40px;
}

.footer-layout__send-button_span{
width: 94px;
height: 18px;
font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 18px;
letter-spacing: -0.03em;
color: #FFFFFF;
margin-left: 10px;
}
</style>