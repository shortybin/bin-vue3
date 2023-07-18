<script setup>
import { RouterView } from "vue-router";
import {ref, watch} from "vue"
const active = ref(0);
const onChange = (index) => {
  //active.value=index
};

watch(active,(n,o)=>{
  console.log(n)
})
</script>

<template>
  <div class="top">首页</div>
  <div class="content">
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
    <div class="top">top</div>
  </div>
  <!-- <div class="bottom">
    <div class="bottom-content">
      <div class="bottom-item">首页</div>
      <div class="bottom-item">我的</div>
    </div>
  </div> -->

  <van-tabbar @change="onChange" v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
.top {
  height: 44px;
  display: flex;
  align-items: center;
}
.content {
  height: calc(100vh-50px);
  padding-bottom: 52px;
  background-color: blue;
}
.bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: white;
}
.bottom-content {
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: center;
}
.bottom-item {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
</style>
