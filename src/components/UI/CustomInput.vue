<template>
    <div>
      <input :type="type" v-model="value">
    </div>
  </template>
  
  <script>
  export default {
  name: 'CustomInput',
  props: ['modelValue','type'],
  emits: ['update:modelValue'],
  
    
    data(){
      return {
       
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