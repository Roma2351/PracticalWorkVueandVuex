<template>
  <button class="btn" @click="$emit('clickButton')"><slot></slot></button>
</template>

<script>
export default {
name:'CustomButton'
}
</script>

<style>

</style>