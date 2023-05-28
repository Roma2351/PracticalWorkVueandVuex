<template>
    <div>
      <input :type="type" v-model="value">
      <label></label>
    </div>
  </template>
  
  <script>
  export default {
  name: 'CustomForm',
  props: ['modelValue','type'],
  emits: ['update:modelValue'],
  
    
    data(){
      return {
      props:{
        text:{
        type:String
       }
      }
      
      }
    },
  
    computed: {
      value: {
        get() {
          return this.modelValue
        },
        set(value) {
          this.$emit('update:modelValue', value)
        }
      }
    }
  }
  
  </script>
  
  <style>
  
  </style>