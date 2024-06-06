<template>
    <div class="header-box"> 
        <div class="back-button pointer">返回</div>
        <span class="title">房地e共享</span>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header-box{
    width: 100%;
    height: 110px;
    background: url("@/assets/images/header.png") no-repeat;
    background-size: 100% 100%;
    text-align: center;
    position: relative;
    .title{
        width: 164px;
        height: 34px;
        font-family: Alimama ShuHeiTi;
        font-weight: bold;
        font-size: 36px;
        color: #FFFFFF;
        line-height: 65px;
        text-shadow: 0px 6px 26px #007EFF;
        padding-top: 23px;
    }
    .back-button{
        width: 129px;
        height: 44px;
        text-align: left;
        padding-left: 37px;
        box-sizing: border-box;
        line-height: 44px;
        background: url("@/assets/images/back.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: 30px;
        top: 4px;
        font-size: 14px;
        color: #FFFFFF;
    }
}
</style>