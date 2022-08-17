<template>
  <div class="checkbox-wrapper">
    <input type="checkbox" id="checkbox" :checked="checked" :disabled="disabled" />
    <label for="checkbox"></label>
    <span>{{ label }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: true
  },
  label: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
input[type='checkbox'] {
  display: none;
}

input[type='checkbox'] + label {
  cursor: pointer;
  font-size: 12px;
}

.checkbox-wrapper {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

#checkbox + label {
  box-sizing: border-box;
  border: 1px solid var(--vp-c-brand);
  padding: 10px;
  display: inline-block;
  position: relative;
  margin-right: 1em;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  transition: all 0.5s linear;
  transform-style: preserve-3d;
  transform-origin: 100% 100%;
}

#checkbox + label:after {
  transform: rotateY(90deg);
  transform-origin: 100% 100%;
  transition: all 0.3s ease-in;
  position: absolute;
  top: 0px;
  left: 0px;
  content: '\2713';
  padding: 10px 0 0 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  font-size: 1.5em;
  line-height: 0;
  background: var(--vp-c-brand);
  color: #fff;
  text-align: center;
}

#checkbox:checked + label:after {
  transform: rotateY(0deg) !important;
}
</style>
