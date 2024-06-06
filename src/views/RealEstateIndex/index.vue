<template>
  <div class="real-estate-home">
      <leftRealEstate />
      <div class="center">
        <div class="center-box">
          <div class="map3">
            <img src="@/assets/images/center3.png" alt="">
            <div class="tip">新增耕地总数(亩)：12222</div>
          </div>
        </div>
        <div class="tab">
          <div class="t-item">民房耕地总览</div>
          <div class="t-item">高标准农田建设</div>
          <div class="t-item active">新增耕地整治</div>
          <div class="t-item">招商建设用地</div>
        </div>

        <div class="content">
          <div class="item-title">
            <span class="title-active">新增耕地整治</span>
            <!-- <span class="more-button pointer">查看详情 ></span> -->
          </div>
          <div class="item-content">
            <div class="table-title">
              <div class="title-item">地块名称</div>
              <div class="title-item">毛面积(㎡)</div>
              <div class="title-item">实测耕地面积(㎡)</div>
              <div class="title-item">变更净面积(㎡)</div>
              <div class="title-item">入库面积-实测耕地面积(㎡)</div>
            </div>
            <div class="table-data-box">
              <div class="table-data" v-for="i in 7">
                <div class="data-item">1</div>
                <div class="data-item">1</div>
                <div class="data-item">1</div>
                <div class="data-item">1</div>
                <div class="data-item">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <rightRealEstate />
  </div>
</template>

<script setup lang="ts">
import leftRealEstate from './components/leftRealEstate.vue';
import rightRealEstate from './components/rightRealEstate.vue';

</script>

<style lang="scss" scoped>
.real-estate-home{
  position: relative;
  z-index: 1;
  padding: 60px 32px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .center{
    flex: 1;
    .center-box{
      margin-bottom: 37px;
      .map3{
        padding-top: 43px;
        width: 492px;
        height: 492px;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
          display: block
        }
        .tip{
          font-weight: 600;
          font-size: 16px;
          color: #FFFFFF;
          line-height: 24px;
          margin-top: 13px;
          text-align: center;
        }
      }
    }
    .tab{
      width: 542px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;

      .t-item{
        width: 151px;
        height: 64px;
        // background: rgba(16,220,238,0.32);
        border-radius: 4px;
        // border: 1px solid #10DCEE;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
        color: #FFFFFF;
        background-image: url("@/assets/images/tab-btn-index.png");
        background-size: 100% 100%;
        &.active{
          background-image: url("@/assets/images/tab-btn-index-active.png");
        }
      }
    }
    .content{
      width: 592px;
      margin: 0 auto;
      .item-title{
        width: 100%;
        height: 55px;
        background: url("@/assets/images/group-title.png") no-repeat;
        background-size: 100% 100%;
        padding-top: 26px;
        padding-left: 59px;
        box-sizing: border-box;
        position: relative;
        .title-active{
          line-height: 18px;
          font-size: 18px;
          color: #FFFFFF;
          background: linear-gradient(0deg, #55BDFF 0%, #FFFFFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .title{
          font-family: MiSans;
          font-weight: 400;
          font-size: 14px;
          color: #FFFFFF;
          opacity: 0.5;
          &.active{
            font-family: MiSans;
            font-weight: 500;
            font-size: 18px;
            color: #FFFFFF;
            opacity: 1;
            position: relative;
            &::after{
              content: "";
              display: block;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -10px;
              width: 100%;
              height: 100%;
              background: url("@/assets/images/active-line.png") no-repeat;
              background-position: -10px 4px;
            }
          }
        }
        .title-fff{
          font-family: MiSans;
          font-weight: 500;
          font-size: 18px;
          color: #FFFFFF;
          opacity: 1;
          margin: 0 20px;
        }
        .more-button{
          position: absolute;
          top: 25px;
          right: 0;
          font-size: 14px;
          color: #00C6FF;
        }
      }
      .item-content{
        margin-top: 24px;
        .table-title{
          width: 592px;
          height: 44px;
          background: rgba(25,51,130,0.2);
          display: flex;
          .title-item{
            flex: 1;
            text-align: center;
            font-family: PingFang SC;
            font-weight: 800;
            font-size: 14px;
            color: #00C6FF;
            line-height: 44px;
            &:nth-child(3){
              flex: 2;
            }
            &:nth-child(4){
              flex: 2;
            }
            &:last-child{
              flex: 3;
            }
          }
        }
        .table-data-box{
          height: 44px * 6;
          overflow-y: auto;
          &::-webkit-scrollbar {
            display: none;
          }
        }
        .table-data{
          width: 592px;
          height: 44px;
          line-height: 44px;
          background: rgba(25,51,130,0.2);
          display: flex;
          &:nth-child(2n-1){
            background: rgba(25,51,130,0);
          }

          .data-item{
            font-weight: 500;
            font-size: 14px;
            color: #C5DBE2;
            flex: 1;
            text-align: center;
            &:nth-child(3){
              flex: 2;
            }
            &:nth-child(4){
              flex: 2;
            }
            &:last-child{
              flex: 3;
            }
          }
        }
      }
    }
  }
}
</style>