<template>
  <div class="wrapper">
    <!-- <div>
      <NavMenu></NavMenu>
    </div> -->
    <router-view/>
    <!-- <div class="home-footer">
      <footer-layout class="home-footer__block"></footer-layout>
    </div> -->
    <div class="home-footer__layout">
    <footer-layout></footer-layout>
   </div>
  </div>
</template>
<script>
import NavMenu from "./components/NavMenu.vue";
import FooterLayout from "./components/layout/FooterLayout.vue";
export default {
  components:{NavMenu,FooterLayout},

}
</script>
<style>
@import url('../css/global.css');
/* .home-footer{
background-image: url('../src/assets/images/GroundBottom.jpg');
background-size: cover; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
overflow: hidden;
margin: 0 auto;
max-width: 1920px;
} */


</style>
