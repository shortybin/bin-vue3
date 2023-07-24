<script setup>
import { RouterView } from "vue-router";
import { ref, watch } from "vue";
import SearchSelect from "@/components/SearchSelect/index.vue";
import JobRequest from "./api/JobRequest"

const active = ref(0);
const searchSelect = ref(null);

const onChange = (index) => {
  //active.value=index
};

watch(active, (n, o) => {
  console.log(n);
});

const touchStart = (event) => {
  searchSelect.value.fatherTouch(event);
  JobRequest.getBannerList()
};

console.log(import.meta.env.VITE_BASIC_URL);


</script>

<template>
  <div class="h-[44px] flex items-center">
    <p class="grow text-center">首页</p>
  </div>
  <div class="content" @touchstart="touchStart">
    <SearchSelect ref="searchSelect"></SearchSelect>
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
