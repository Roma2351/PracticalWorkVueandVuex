<template>
  <div class="block-info">
    <div class="block-info__block2-part1_title">
      <div class="block-info__block2-part1_title-text">
        <span>{{text}}</span>
      </div>
      <div class="block-info__block2-part1_title-text2">
        <span>{{moreText}}</span>
      </div>
    </div>
    <div class="block-info__block2-part1_img">
      <img :src="url" :alt="url" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BlocInfo",
  props: {
    url: {
      type: String,
    },
    text: {
      type: String,
    },
    moreText: {
      type: String,
    },
  },
};
</script>

<style>
.block-info{
display: flex;
width: 302px;
height: 178px;
margin-right: 24px;
background: rgba(33, 33, 66, 0.6);
border: 1px solid rgba(184, 184, 227, 0.08);
box-shadow: 0px 10px 10px rgba(6, 6, 40, 0.55), inset 0px -8px 0px rgba(5, 5, 27, 0.4), inset 0px 1px 0px rgba(189, 189, 238, 0.15);
border-radius: 4px;
}
.block-info__block2-part1_title{
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 32px;
}
.block-info__block2-part1_title-text{
width: 99px;
height: 32px;
font-family: 'Mulish';
font-style: normal;
font-weight: 800;
font-size: 26px;
line-height: 32px;
letter-spacing: -0.03em;
color: #FCB223;
}

.block-info__block2-part1_title-text2{
width: 144px;
height: 66px;
font-family: 'ui-monospace';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
letter-spacing: -0.03em;
color: #FFFFFF;
}
.block-info__block2-part1_img img{
width: 126px;
height: 178px;
}
</style>
