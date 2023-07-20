<template>
  <div class="flex flex-col" ref="search">
    <van-field
      placeholder="请输入搜索内容"
      @update:model-value="searchChange"
      ref="field"
      @blur="blurA"
    />
    <ul
      class="absolute bg-red-500 w-[100%] mt-[41.99px] max-h-[100px] overflow-y-auto"
      v-if="show"
    >
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(true);
const search = ref(null);
const field = ref(null);

function blurA(){
  console.log(111)
};

const fatherTouch = (event) => {
  // if (!search.value.contains(event.target)) {
  //   // 点击事件发生在组件外部，让组件失去焦点
  //   field.value.blur();
  //   show.value = false;
  // }
};

const searchChange = () => {
  show.value = true;
};

defineExpose({ fatherTouch });
</script>

<style>
</style>