<template>
    <div class="block-meet__calendar-block">
      <div class="block-meet__calendar-block_img">
        <img :src="url" :alt="url">
      </div>
      <div class="block-meet__calendar-block_text">
        <span class="block-meet__calendar-block_text-data">{{text}}</span>
      </div>
      <div class="block-meet__calendar-block_text">
        <span class="block-meet__calendar-block_text-country">{{moreText}}</span>
      </div>
    </div>
</template>

<script>
export default {
name:'BlockOfMeetings',
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
.block-meet__calendar-block{
width: 302px;
height: 240px;
background: rgba(3, 3, 31, 0.6);
border: 1px solid rgba(184, 184, 227, 0.08);
box-shadow: 0px 10px 10px rgba(6, 6, 40, 0.55), inset 0px -8px 0px rgba(5, 5, 27, 0.4), inset 0px 1px 0px rgba(189, 189, 238, 0.15);
border-radius: 4px;
margin-right: 24px;
}

.block-meet__calendar-block_img{
width: 174px;
height: 136px;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 32px;
}
.block-meet__calendar-block_text{
  margin-left: 32px;
}
.block-meet__calendar-block_text-data{
width: 164px;
height: 32px;
font-family: 'Mulish';
font-style: normal;
font-weight: 800;
font-size: 26px;
line-height: 32px;
letter-spacing: -0.03em;
color: #FFFFFF; 
}


.block-meet__calendar-block_text-country{
width: 121px;
height: 22px;
font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
letter-spacing: -0.03em;
color: #FFFFFF;
}
</style>