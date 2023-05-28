<template>
<div class="container">
    <header class="nav-menu">
        <div class="nav-menu__lang">
            <custom-button class="nav-menu__lang-btn_en"><span class="nav-menu__lang-btn_en-span">En</span></custom-button>
            <custom-button class="nav-menu__lang-btn_ru"><span class="nav-menu__lang-btn_ru-span">Ru</span></custom-button>
        </div>
        <div class="nav-menu__logo">
            <img :src="require('../assets/images/Logo.svg')" alt="">
        </div>
        <div class="nav-menu__btn">
            <custom-button class="nav-menu__btn-button"><img :src="require('../assets/images/III.svg')" alt=""><span class="nav-menu__btn-button_span">Home</span></custom-button>
            <custom-button class="nav-menu__btn-button"><img :src="require('../assets/images/III2.svg')" alt=""><span class="nav-menu__btn-button_span">Benefits</span></custom-button>
            <custom-button @click="$emit('contactInfo')" class="nav-menu__btn-button"><img :src="require('../assets/images/III3.svg')" alt=""><span class="nav-menu__btn-button_span">Contact</span></custom-button>
            <custom-button @click="$emit('fagInfo')" class="nav-menu__btn-button"><img :src="require('../assets/images/III4.svg')" alt=""><span class="nav-menu__btn-button_span">F.A.Q.</span></custom-button>
        </div>
        <div class="nav-menu__user">
            <custom-button class="nav-menu__user-button_signIn"><img :src="require('../assets/images/Vector (7).svg')" alt=""><span class="nav-menu__user-button_signIn_span">Sign In</span></custom-button>
            <custom-button class="nav-menu__user-button_signUp"><img :src="require('../assets/images/Vector (8).svg')" alt=""><span class="nav-menu__user-button_signUp_span">Sign Up</span></custom-button>
        </div>
        <div class="nav-menu__buttonUser">
            <custom-button class="nav-menu__buttonUser-send"><img :src="require('../assets/images/011.svg')" alt=""></custom-button>
            <custom-button class="nav-menu__buttonUser-send"><img :src="require('../assets/images/02.svg')" alt=""></custom-button>
        </div>
    </header>
</div>
 
</template>

<script>
import CustomButton from './UI/CustomButton.vue';
export default {
components:{CustomButton},
name:'NavMenu'
}
</script>

<style>
@media (max-width: 1208px){
    .nav-menu__buttonUser{
        margin-left: 40px;
    }
   
}

.container{
width: 100%;
height: 136px;
}


.container .nav-menu {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    
}


.nav-menu__lang{
display: inline-block;
margin-left: 48px;
}

.nav-menu__lang-btn_en{
padding: 0px;
width: 40px;
height: 40px;
background: rgba(3, 3, 31, 0.6);
border: 1px solid rgba(184, 184, 227, 0.08);
opacity: 1;
border-radius: 4px;
cursor: pointer;
}

.nav-menu__lang-btn_en-span{
width: 40px;
height: 18px;
font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 18px;
text-align: center;
letter-spacing: -0.03em;
color: #FFFFFF;
}

.nav-menu__lang-btn_ru{
padding: 0px;
width: 40px;
height: 40px;
background: rgba(3, 3, 31, 0.6);
border: 1px solid rgba(184, 184, 227, 0.08);
opacity: 0.6;
border-radius: 4px;
cursor: pointer;
}

.nav-menu__lang-btn_ru-span{
width: 40px;
height: 18px;
font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 18px;
text-align: center;
letter-spacing: -0.03em;
color: #FFFFFF;
}
.nav-menu__logo{

padding: 0px 0px 0px 8px;
gap: 4px;
width: 172px;

}


.nav-menu__btn{
display: inline-block;
display: flex;
}

.nav-menu__btn-button{
background-color: transparent;
border: none;
padding: 0;
cursor: pointer;
width: 95px;
height: 40px;
margin-left: 30px;
}

.nav-menu__btn-button_span{
width: 43px;
height: 22px;
font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #FFFFFF;
padding: 10px
}

.nav-menu__user{
display: inline-block;
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 17px;
}
.nav-menu__user-button_signIn{
box-sizing: border-box;
padding: 0px 16px;
gap: 8px;
width: 106px;
height: 43px;
background: rgba(3, 3, 31, 0.6);
border: 1px solid rgba(184, 184, 227, 0.08);
box-shadow: 0px 10px 10px rgba(6, 6, 40, 0.55), inset 0px -8px 0px rgba(5, 5, 27, 0.4), inset 0px 1px 0px rgba(189, 189, 238, 0.15);
border-radius: 4px;
}

.nav-menu__user-button_signIn img{
width: 16px;
height: 16px;
}

.nav-menu__user-button_signIn_span{
width: 50px;
height: 22px;
font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
letter-spacing: -0.03em;
color: #FFFFFF;
}

.nav-menu__user-button_signUp{
padding: 0px 16px;
gap: 8px;
isolation: isolate;
width: 106px;
height: 40px;
top: calc(50% - 40px/2);
background-color: #E48B04;
border: 1px solid rgba(184, 184, 227, 0.08);
box-shadow: 0px 10px 10px rgba(6, 6, 40, 0.55), inset 0px -8px 0px #E48B04, inset 0px 1px 0px rgba(255, 255, 255, 0.6);
border-radius: 4px;
}

.nav-menu__user-button_signUp img{
width: 18px;
height: 18px;
}

.nav-menu__user-button_signUp_span{
width: 58px;
height: 22px;
font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
letter-spacing: -0.03em;
color: #000000;

}

.nav-menu__buttonUser{
display: inline-block;
margin-top: 25px;
}

.nav-menu__buttonUser-send{
display: contents;
cursor: pointer;
}
</style>