<template>
  <div id="realEstate">
      <div class="head">
        <Header />
      </div>
      <RouterView />
  </div>
</template>

<script setup lang="ts">
import Header from './components/header.vue';
import { RouterView } from "vue-router";

</script>

<style lang="scss" scoped>
#realEstate{
  background: url("@/assets/images/background.png") no-repeat;
  background-size: 100% 100%;
  width: 100vw;
  // height: 100vh;
  position: relative;
  .head{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>