<template>
  <div class="home-page__block2-part2_user">

<div class="home-page__block2-part2_user-input">
 <div class="home-page__block2-part2_user-form">
  <span class="home-page__block2-part2_user-form_span">Email</span>
    <custom-form :type="'text'" v-model="user.userEmail"></custom-form>
 </div>
 <div class="home-page__block2-part2_user-form">
  <span class="home-page__block2-part2_user-form_span">Password</span>
    <custom-form :type="'password'" v-model="user.userPassword"></custom-form>
 </div>
</div>

<div class="home-page__block2-part2_user-input_two">
 <div class="home-page__block2-part2_user-form">
  <span class="home-page__block2-part2_user-form_span">Your Business</span>
    <custom-form :type="'text'" v-model="user.userBusiness"></custom-form>
 </div>
 <div class="home-page__block2-part2_user-form">
  <span class="home-page__block2-part2_user-form_span">Your Telegram Account</span>
    <custom-form :type="'text'" v-model="user.userTelegram"></custom-form>
 </div>
</div>

  <div class="home-page__block2-part2_user-input_three">
    <div class="home-page__block2-part2_user-input_three-inp">
      <span class="home-page__block2-part2_user-form_span">Tell about Your results</span>
      <custom-input class="textarea" :type="'text'" v-model="user.userResults"></custom-input>
    </div>
    <div class="home-page__block2-part2_user-input_three-button">
      <custom-button class="home-page__block2-part2_user-input_three-button_1" @clickButton="userInfo"><img :src="require('../assets/images/Vector (8).svg')" alt=""><span>Sign Up</span></custom-button>
      <div class="home-page__block2-part2_user-input_three-checkBox">
        <span class="home-page__block2-part2_user-input_three-checkBox_text">I have read and agree to the Terms & Coditions</span>
          <custom-form :type="'checkbox'"></custom-form>
       </div>
    </div> 
  </div>
</div>
</template>

<script>
import CustomButton from './UI/CustomButton.vue';
import CustomForm from './CustomForm.vue';
import CustomInput from './UI/CustomInput.vue';
export default {
components:{CustomButton,CustomForm,CustomInput},
name:'UserForm',
data (){
    return{
        user:{
        userEmail:'',
        userPassword:'',
        userBusiness:'',
        userTelegram:'',
        userResults:''
        }
      
    }

},
methods:{
    userInfo(){
        this.$emit('sendUserInfo',this.user)
    }
}
}
</script>

<style>
.home-page__block2-part2_user{
/* display: flex; */
width: 628px;
height: 380px;
background: rgba(33, 33, 66, 0.6);
border: 1px solid rgba(184, 184, 227, 0.08);
box-shadow: 0px 10px 10px rgba(6, 6, 40, 0.55), inset 0px -8px 0px rgba(5, 5, 27, 0.4), inset 0px 1px 0px rgba(189, 189, 238, 0.15);
border-radius: 4px;
}

.home-page__block2-part2_user-form input{
width: 274px;
height: 40px;
background: rgba(3, 3, 31, 0.6);
border: 1px solid rgba(184, 184, 227, 0.25);
border-radius: 4px;
color: #FFFFFF;
}

.home-page__block2-part2_user-form{
  margin-right: 16px;
  
}

.home-page__block2-part2_user-input{
  display: flex;
  margin-left: 32px;
  margin-top: 32px;

}

.home-page__block2-part2_user-form_span{
width: 32px;
height: 18px;
font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 18px;
letter-spacing: -0.03em;
color: #8989AA;
}

.home-page__block2-part2_user-input_two{
display: flex;
margin-left: 32px;
margin-top: 24px;
}
.home-page__block2-part2_user-input_three-inp{
margin-top: 3px;
margin-left: 32px;
}
.home-page__block2-part2_user-input_three .textarea input{
width: 568px;
height: 74px;
color: #FFFFFF;
background: rgba(3, 3, 31, 0.6);
border: 1px solid rgba(184, 184, 227, 0.25);
border-radius: 4px;
font-weight: 400;
font-size: 25px;
}

.home-page__block2-part2_user-input_three-button{
  display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
}

.home-page__block2-part2_user-input_three-button_1{
padding: 0px 16px;
gap: 8px;
margin-top: 24px;
margin-right: 21px;
isolation: isolate;
width: 106px;
height: 40px;
background-color: #E48B04;
box-shadow: 0px 10px 10px rgba(6, 6, 40, 0.55), inset 0px -8px 0px #E48B04, inset 0px 1px 0px rgba(255, 255, 255, 0.6);
border-radius: 4px;
}

.home-page__block2-part2_user-input_three-checkBox input{
  width: 24px;
  margin-top: 33px;
  height: 24px;
  margin-left: 34px;
  background: rgba(3, 3, 31, 0.6);
  border: 1px solid rgba(184, 184, 227, 0.25);
  border-radius: 4px;
  color: #8989AA;
}

.home-page__block2-part2_user-input_three-checkBox{
display: flex;
flex-direction: row-reverse;
align-items: baseline;
}
.home-page__block2-part2_user-input_three-checkBox_text{
width: 264px;
height: 18px;
font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 18px;
letter-spacing: -0.03em;
color: #8989AA;
margin-left: 5px;
}

@media(max-width: 700px){
  .home-page__block2-part2_user-input{
    display: flex;
    flex-direction: column;
  }
  .home-page__block2-part2_user-input_two{
    display: flex;
    flex-direction: column;
  }
  .home-page__block2-part2_user{
    width: 334px;
    height: 515px
  }
  .home-page__block2-part2_user-input_three .textarea input{
    width: 274px;
    height: 99px;
  }
  .home-page__block2-part2_user-input_three-button{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  }

  .home-page__block2-part2_user-input_three-checkBox{
    position: relative;
    bottom: 31px;
  }
}
</style>