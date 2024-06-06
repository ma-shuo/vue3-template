<template>
    <div class="box">
        <img src="@/assets/images/index.png" >
        <div class="title"><i>共富联盟资源一体化开发平台</i></div>
        <div class="box">
            <div class="item">
                <img class="img1" src="@/assets/images/index-item.png" />
                <img class="img2" src="" >
            </div>
            <div class="item">
                <img class="img1" src="@/assets/images/index-item.png" />
                <img class="img2" src="" >
            </div>
            <div class="item">
                <img class="img1" src="@/assets/images/index-item.png" />
                <img class="img2" src="" >
            </div>
            <div class="item">
                <img class="img1" src="@/assets/images/index-item.png" />
                <img class="img2" src="" >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.box{
    position: relative;
    width: 100%;
    img{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
    .title{
        width: 100%;
        text-align: center;
        padding-top: 24px;
        font-family: YouSheBiaoTiHei;
        font-weight: 700;
        font-size: 44px;
        color: #EFF8FC;
        line-height: 32px;
        background: linear-gradient(0deg, rgba(119,186,255,0.45) 0%, rgba(233,248,255,0.45) 73.3154296875%, rgba(255,255,255,0.45) 100%);
        opacity: 0.99;
        // -webkit-text-stroke: 1px #FFFFFF;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .box{
        width: (360px * 4) + (54px * 3);
        margin: 0 auto;
        display: flex;
        padding-top: 180px;
        justify-content: space-between;
        .item{
            width: 360px;
            height: 460px;
            box-sizing: border-box;
            .img1{
                position: static;
                width: 360px;
                height: 460px;
            }
        }
    }
}
</style>