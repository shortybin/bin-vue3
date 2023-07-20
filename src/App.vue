<script setup>
import { RouterView } from "vue-router";
import { ref, watch } from "vue";
const active = ref(0);
const show = ref(true);
const search= ref(null)

const onChange = (index) => {
  //active.value=index
};

watch(active, (n, o) => {
  console.log(n);
});

const touchStart=(event)=>{
  if (!search.value.$el.contains(event.target)) {
    // 点击事件发生在组件外部，让组件失去焦点
    search.value.blur();
    show.value=false
  }
}

const searchChange=()=>{
  show.value=true
}

</script>

<template>
  <div class="h-[44px] flex items-center" >
    <p class="grow text-center">首页</p>
  </div>
  <div class="content" @touchstart="touchStart">
    <div class="flex flex-col" >
      <van-field placeholder="请输入搜索内容" @update:model-value="searchChange" ref="search"/>
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
