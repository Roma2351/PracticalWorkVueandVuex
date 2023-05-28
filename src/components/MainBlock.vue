<template>
  <div class="block">
    <div class="block-img">
          <img :src="url" :alt="url">
        </div>
        <div class="block-title__content">
          <div class="block-title__text">
             <span>{{text}}</span>
          </div>
          <div class="block-title__moreText">
              <span>{{moreText}}</span>
          </div>
        </div>
  </div>
</template>

<script>
export default {
name: 'MainBlock',
props:{
    url:{
        type:String
    },
    text:{
        type:String
    },
    moreText:{
      type:String
    }

}
}
</script>

<style>
.block{
display: flex;
width: 302px;
height: 136px;
margin-bottom: 20px;
background: rgba(33, 33, 66, 0.6);
border: 1px solid rgba(184, 184, 227, 0.08);
box-shadow: 0px 10px 10px rgba(6, 6, 40, 0.55), inset 0px -8px 0px rgba(5, 5, 27, 0.4), inset 0px 1px 0px rgba(189, 189, 238, 0.15);
border-radius: 4px;
flex-direction: column;
flex-wrap: wrap;
align-content: center;
justify-content: center;
}
.block-img{
width: 136px;
height: 136px;
}
.block-title__text{
width: 35px;
height: 22px;
font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
letter-spacing: -0.03em;
color: #FFFFFF;
}

.block-title__moreText{
width: 121px;
height: 32px;
font-family: 'Mulish';
font-style: normal;
font-weight: 800;
font-size: 26px;
line-height: 32px;
letter-spacing: -0.03em;
color: #FFFFFF;
}
</style>