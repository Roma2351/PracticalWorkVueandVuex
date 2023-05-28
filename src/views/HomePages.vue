<template>
  <div class="home">
    <div class="home-navmenu">
      <nav-menu @fagInfo="showModalWindow" @contactInfo="showContactModal"></nav-menu>
    </div>
    <div class="home-page">
    <div class="home-page__title">
      <custom-title :title="'Valorous Affiliate Program'" class="home-page__title-h1"></custom-title>
    </div>
    <div class="home-page__block">
      <main-block :url="require('../assets/images/01 (3).svg')" :text="'CPA:'" :moreText="'$20 ... $60'"></main-block> 
    <div class="home-page__block-Two">
        <main-block :url="require('../assets/images/02 (1).svg')" :text="'Payments:'" :moreText="'Every Day'"></main-block>
        <main-block :url="require('../assets/images/02 (2).svg')" :text="'Revshare:'" :moreText="'UP to 60%'"></main-block>
    </div>
   </div>

   <div class="home-page__subTitle">
      <custom-sub-title :subTitle="'Become a Partner and Get:'" class="home-page__subTitle-text"></custom-sub-title>
   </div>

   <div class="home-page__block2">
    <div class="home-page__block2-part1" >

      <div class="home-page__block2-part1_one">
        <block-info :text="'Support'" :moreText="'Personal manager 24/7, Support and training'" :url="require('../assets/images/Vector (10).svg')"></block-info>
        <block-info :text="'Conversion'" :moreText="'Hight conversion from click to deposit (1:6)'" :url="require('../assets/images/Vector (11).svg')"></block-info>
      </div>

      <div class="home-page__block2-part1_two">
        <block-info :text="'Software'" :moreText="'Webview & PWA Apps'" :url="require('../assets/images/Vector (12).svg')"></block-info>
        <block-info :text="'Promo'" :moreText="'Customized promo materials'" :url="require('../assets/images/Vector (13).svg')"></block-info>
      </div>

    </div>

    <div class="home-page__block2-part2">
      <user-form @sendUserInfo="sendUserInfo"></user-form>
    </div>

   </div>
       
  </div>
  <div class="home-footer">
    <div class="home-footer__info">
   <div class="home-footer__info-title">
    <custom-sub-title class="home-footer__info-title_text" :subTitle=" 'Weve been sleeping for the last 10 years and now we are awake!'"></custom-sub-title>
   </div>
   <div class="home-footet__info-span">
    <span class="home-footet__info-span_text">Shall we meet?</span>
  </div>
    </div>
   <div class="home-footer__calendar">
    <block-of-meetings :url="require('../assets/images/cropped-TES_Logo_Colored_WhiteFont_BlackBG-1-300x193 1.svg')" :text="'Feb., 22. 2023'" :moreText="'Cascais, Portugal'"></block-of-meetings>
    <block-of-meetings :url="require('../assets/images/Logo_white_2023 1.svg')" :text="'Feb., 27. 2023'" :moreText="'Dubai, UAE'"></block-of-meetings>
   </div>
  </div>
  <transition name="bounce">
  <modal-window 
   @showModalWindow="showModalWindow"
   :showModal="showModal"
   :fag="'F.A.Q'"
   :modalItems="modalInfo" 
   ></modal-window>
  </transition>
  <transition name="bounce">
  <modal-window 
   @showModalWindow="showContactModal"
   :showModal="contactModal"
   :fag="'Contact'"
   :modalItems="modalAdmin"
   ></modal-window>
  </transition>
</div>
</template>

<script>
import data from '../../../project/data.json'
import CustomTitle from '@/components/UI/CustomTitle.vue';
import CustomSubTitle from '@/components/UI/CustomSubTitle.vue';
import CustomForm from '@/components/CustomForm.vue';
import CustomInput from '@/components/UI/CustomInput.vue';
import CustomButton from '@/components/UI/CustomButton.vue';
import FooterLayout from '@/components/layout/FooterLayout.vue';
import NavMenu from '@/components/NavMenu.vue';
import MainBlock from '@/components/MainBlock.vue';
import BlockInfo from '@/components/BlockInfo.vue';
import UserForm from '@/components/UserForm.vue';
import BlockOfMeetings from '@/components/BlockOfMeetings.vue';
import ModalWindow from '@/components/ModalWindow.vue';
export default {
components:{CustomTitle, CustomSubTitle, CustomForm, CustomInput, CustomButton, FooterLayout,NavMenu,MainBlock,BlockInfo,UserForm,BlockOfMeetings,ModalWindow},
name:'HomePages',
data(){
 return{
  contactModal:false,
  showModal:false,
  modalInfo:[],
  modalAdmin:[]
 }
},


methods:{
  sendUserInfo(user){
    console.log(user);
  },

  showModalWindow(){
    this.showModal = !this.showModal
  },
   showContactModal(){
    this.contactModal = !this.contactModal
   },
  getText(){
    return new Promise((resovle, reject) => {
      setTimeout(() => {
        resovle(data.text);
      }, 1000)
    })
  },

  getUserModal(){
    return new Promise((resovle, reject) => {
      setTimeout(() => {
        resovle(data.admin);
      }, 1000)
    })
  }
},

async mounted(){
  await this.getText().then((text) => {this.modalInfo = text})
  await this.getUserModal().then((admin) => {this.modalAdmin = admin})
  console.log(this.modalInfo)
  console.log(this.modalAdmin);
  
  
}
}
</script>

<style>
.home{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    max-width: 1920px;
    background-image: url(../assets/images/GroundTop.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.home-navmenu{
  width: 100%;
  margin-bottom: 60px;
}
@media(max-width: 1400px){
  .home-page{
    width: 76%;
  }
  .home-page__block2 {
    display: flex;
    flex-direction: column;
  }
  .home-page__block2-part1_two{
    margin-bottom: 24px;
  }
  .home-footer{
    position: relative;
    left: 70px;
    margin-right: 0px !important;
   
  }
}



@media(max-width: 1100px){
    .home-page{
    position: relative;
    right: 75px;
    }
    .home-page__block2 {
    display: flex;
    flex-direction: column;
    }
    .home-footer{
    position: relative;
    left: 19px;
    margin-right: 0px !important;
  }

}

@media(max-width: 700px){
  .home{
    background-position: inherit;
  }
  .home-page{
    position: relative;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home-page__block{
    display: flex;
    flex-direction: column;
  }
  .home-page__block-Two{
    display: flex;
    flex-direction: column;
  }
  .home-page__block2-part1_one{
    display: flex;
    flex-direction: column;
  }
  .home-page__block2-part1_two{
    display: flex;
    flex-direction: column;
  }
  .home-footer__info{
    align-items: center;
  }
  .home-footer__calendar{
    flex-direction: column !important;
    width: 100%;
    align-items: center;
  }
  .home-footer__info-title_text{
    width: 280px !important;
    font-size: 39px !important; 
    line-height: 46px !important;
  }
}
.home-page{
margin-bottom: 70px;

}

.home-page__title{
width: 393px;
height: 288px;
margin-bottom: 80px;
}
.home-page__subTitle{
width: 380px;
height: 96px;
margin-bottom: 52px;
}

.home-page__title-h1{
font-family: 'Mulish';
font-style: normal;
font-weight: 800;
font-size: 44px;
line-height: 96px;
letter-spacing: -0.03em;
color: #FFFFFF;
text-shadow: 0px 15px 15px rgba(6, 6, 40, 0.5)
 }
.home-page__subTitle-text{
font-family: 'Mulish';
font-style: normal;
font-weight: 800;
font-size: 44px;
line-height: 48px;
letter-spacing: -0.03em;
color: #FFFFFF;
text-shadow: 0px 15px 15px rgba(6, 6, 40, 0.5)
}

.home-page__block{
margin-bottom: 120px;
}

.home-page__block-Two{
  display: flex;
  gap:24px
}

.home-page__title-content{
display: flex;
flex-direction: column;
justify-content: center;
}
/* Part 1 ////////////////////////////////////////////////////////////////////////////////////////////// */
.home-page__block2{
  display: flex;
}
.home-page__block2-part1_one{
  display: flex;
  margin-bottom: 24px;
}

.home-page__block2-part1_two{
  display: flex;
}

/* Part2  /////////////////////////////////////////////////////////////////////////////////////////////// */
.home-page__block2-part2{
display: flex;
}


/* ////////////////////////////////////////////////////////HOME-FOOTER////////////////////////////////////////// */


.home-footer{ 
display: flex;
max-width: 1920px;
flex-wrap: wrap;
margin-right: 150px;
}

.home-footer__info{
display: flex;
flex-direction: column;
margin-bottom: 24px;
width: 100%;
}

.home-footer__info-title_text{
width: 479px;
height: 144px;
font-family: 'Mulish';
font-style: normal;
font-weight: 800;
font-size: 46px;
line-height: 48px;
letter-spacing: -0.03em;
color: #FFFFFF;
margin-bottom: 48px;
}

.home-footet__info-span{
width: 181px;
height: 32px;
margin-top: 48px;
}

.home-footet__info-span_text{
font-family: 'Mulish';
font-style: normal;
font-weight: 800;
font-size: 26px;
line-height: 32px;
letter-spacing: -0.03em;
color: #FCB223;
}


.home-footer__calendar{
display: flex;
padding-left: -16px;
flex-direction: row;
}



.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
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
</style>