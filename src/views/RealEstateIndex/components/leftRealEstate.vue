<template>
  <div class="left-box">
    <div class="item">
      <div class="item-title">
        <span class="title-active">大村镇民房、耕地资源</span>
        <!-- <span class="more-button pointer">查看详情 ></span> -->
      </div>
      <div class="item-content">
        <div class="chart-box">
          <div class="chart" ref="chart1"></div>
          <div class="info">
            <div class="num">1000</div>
            <div class="tips">总房屋数(户)</div>
          </div>
        </div>
        <div class="chart-box">
          <div class="chart" ref="chart2"></div>
          <div class="info">
            <div class="num">1000</div>
            <div class="tips">总耕地数(亩)</div>
          </div>
        </div>
      </div>
    </div>

    <div class="item">
      <div class="item-title">
        <span class="title pointer">民房资源</span>
        <span class="title-fff">/</span>
        <span class="title active pointer">耕地资源</span>
        <span class="more-button pointer">查看详情 ></span>
      </div>
      <div class="item-content2">
        <div class="chart" ref="chart3"></div>
        <div class="change-btn">
          <div class="prev">
            <img src="@/assets/images/left-btn.png" >
          </div>
          <div class="next">
            <img src="@/assets/images/right-btn-active.png" >
          </div>
        </div>
      </div>
    </div>

    <div class="item">
      <div class="item-title">
        <span class="title-active">大村镇闲置民房规划用途</span>
        <span class="more-button pointer">查看详情 ></span>
      </div>
      <div class="item-content3">
        <div class="tab">
          <div class="tab-item pointer active">屋顶光伏</div>
          <div class="tab-item pointer">特色民宿</div>
          <div class="tab-item pointer">共富工坊</div>
        </div>
        <div class="swiper-img">
          <div class="swiper-content">
            <div class="swiper-item">
              <div class="img">
                <img src="@/assets/images/linshi2.png" alt="">
              </div>
              <div class="tit">庙子山村100号</div>
            </div>
            <div class="swiper-item">
              <div class="img">
                <img src="@/assets/images/linshi2.png" alt="">
              </div>
              <div class="tit">庙子山村100号</div>
            </div>
            <div class="swiper-item">
              <div class="img">
                <img src="@/assets/images/linshi2.png" alt="">
              </div>
              <div class="tit">庙子山村100号</div>
            </div>
          </div>
          <div class="swiper-btn">
            <div class="left"></div>
            <div class="right"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="item">
      <div class="item-title">
        <span class="title-active">高标准农田建设</span>
        <span class="more-button pointer">查看详情 ></span>
      </div>
      <div class="item-content2">
        <div class="chart" ref="chart4"></div>
        <div class="change-btn">
          <div class="prev">
            <img src="@/assets/images/left-btn.png" >
          </div>
          <div class="next">
            <img src="@/assets/images/right-btn-active.png" >
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chart1 = ref(null)
const chart2 = ref(null)
const chart1Options = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '10%',
    right: 'right',
    formatter: function (name:any) {
      const str = name == "空闲房屋(户)" ? "{b|456}" : "{c|654}"
      return [
              `{a|${name}}`,
              str
            ].join('\n');
    },
    textStyle: {
      padding: [25, 0, 0, 0],
      rich:{
        a: {
          color: '#D5DEF3',
          lineHeight: 24,
          fontSize: "14px"
        },
        b: {
          color: '#91CC75',
          lineHeight: 24,
          fontSize: "14px"
        },
        c: {
          color: '#5470C6',
          lineHeight: 24,
          fontSize: "14px"
        }
      }
    }
  },
  series: [
    {
      center: ['30%', '35%'],
      name: '',
      type: 'pie',
      radius: ['25%', '45%'],
      itemStyle: {
        borderRadius: 2,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 6
      },
      label: {
        show: false,
        position: 'center'
      },
    
      data: [
        { value: 456, name: '空闲房屋(户)',itemStyle: {color: "#91CC75"}},
        { value: 654, name: '使用中房屋(户)',itemStyle: {color: "#5470C6"}}
      ]
    }
  ]
})
const chart2Options = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '10%',
    right: 'right',
    formatter: function (name:any) {
      const str = name == "可流转耕地(亩)" ? "{b|456}" : "{c|654}"
      return [
              `{a|${name}}`,
              str
            ].join('\n');
    },
    textStyle: {
      padding: [25, 0, 0, 0],
      rich:{
        a: {
          color: '#D5DEF3',
          lineHeight: 24,
          fontSize: "14px"
        },
        b: {
          color: '#75ACCC',
          lineHeight: 24,
          fontSize: "14px"
        },
        c: {
          color: '#C65494',
          lineHeight: 24,
          fontSize: "14px"
        }
      }
    }
  },
  series: [
    {
      center: ['30%', '35%'],
      name: '',
      type: 'pie',
      radius: ['25%', '45%'],
      itemStyle: {
        borderRadius: 2,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 6
      },
      label: {
        show: false,
        position: 'center'
      },
    
      data: [
        { value: 456, name: '可流转耕地(亩)',itemStyle: {color: "#75ACCC"}},
        { value: 654, name: '使用中耕地(亩)',itemStyle: {color: "#C65494"}}
      ]
    }
  ]
})

const chart3 = ref(null)
const chartC:any = ref(null)
const chart3Options = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['总耕地数', '使用中耕地数'],
    textStyle: {
      color: "#fff"
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['大村1', '大村2', '大村3', '大村4', '大村5', '大村6', '大村7'],
      axisLabel: {
        textStyle: {
          color: '#D5DEF3' 
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: { 
        "show": false
      },
      axisLabel: {
        textStyle: {
          color: '#D5DEF3'
        }
      },
      name: "单位：亩",
      nameTextStyle: {
        color: "#fff",
      },
    }
  ],
  series: [
    {
      name: '使用中耕地数',
      type: 'line',
      areaStyle: {
        color: "#75ACCC"
      },
      emphasis: {
        focus: 'series'
      },
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    },
    {
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      name: '总耕地数',
      type: 'line',
      areaStyle: {
        color: "#C65494"
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
})


const chart4 = ref(null)
const chartD:any = ref(null)
const chart4Options = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['总耕地数', '使用中耕地数'],
    textStyle: {
      color: "#fff"
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '7%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['大村1', '大村2', '大村3', '大村4', '大村5', '大村6', '大村7'],
      axisLabel: {
        textStyle: {
          color: '#D5DEF3' 
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: { 
        "show": false
      },
      axisLabel: {
        textStyle: {
          color: '#D5DEF3'
        }
      },
      name: "单位：亩",
      nameTextStyle: {
        color: "#fff",
      },
    }
  ],
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      barWidth: "20%",
      itemStyle: {
        color: "#4dbabd"
      },
    }
  ]
})


onMounted(() => {
  const chartA = echarts.init(chart1.value);
  chartA.setOption(chart1Options.value);
  const chartB = echarts.init(chart2.value);
  chartB.setOption(chart2Options.value);

  chartC.value = echarts.init(chart3.value);
  chartC.value.setOption(chart3Options.value);

  chartD.value = echarts.init(chart4.value);
  chartD.value.setOption(chart4Options.value);

});


</script>

<style lang="scss" scoped>
.left-box{
  font-family: MiSans;
  width: 595px;
  .item{
    width: 100%;
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
      width: 100%;
      display: flex;
      .chart-box{
        position: relative;
        width: 50%;
        height: 195px;
        background: url("@/assets/images/chart-round.png") no-repeat;
        background-size: 121px 121px;
        background-position: 17% 11%;
        .chart{
          width: 100%;
          height: 100%;
        }
      }
      .info{
        position: absolute;
        bottom: 10px;
        left: 12%;
        width: 100px;
        text-align: center;
        .num{
          font-family: MiSans;
          font-weight: 500;
          font-size: 20px;
          color: #00C6FF;
        }
        .tips{
          font-family: MiSans;
          font-weight: 500;
          font-size: 14px;
          color: #FFFFFF;
        }
      }
    }

    .item-content2{
      height: 203px;
      width: 100%;
      position: relative;
      .chart{
        width: 100%;
        height: 100%;
      }
      .change-btn{
        position: absolute;
        top: 5%;
        right: 0%;
        display: flex;
        justify-content: space-between;
        width: 60px;
        height: 29px;
        .prev, .next{
          width: 29px;
          height: 29px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .item-content3{
      .tab{
        margin: 0 auto;
        width: 337px;
        display: flex;
        margin-top: 14px;
        justify-content: space-between;
        .tab-item{
          width: 107px;
          height: 43px;
          text-align: center;
          font-size: 16px;
          line-height: 43px;
          color: #d5def3;
          background: url("@/assets/images/tab-btn.png") no-repeat;
          background-size: 100% 100%;
          &.active{
            background-image: url("@/assets/images/tab-btn-active.png");
            color: #00C6FF;
          }
        }
      }
      .swiper-img{
        position: relative;
        height: 150px;
        .swiper-content{
          margin: 0 auto;
          white-space: nowrap;
          overflow: hidden;
          width: 231px * 2.2;
          height: 100%;
          .swiper-item{
            display: inline-block;
            .img{
              width: 231px;
              height: 142px;
              background: url("@/assets/images/left-box.png") no-repeat;
              background-size: 100% 100%;
              padding-top: 16px;
              box-sizing: border-box;
              img{
                width: 192px;
                height: 102px;
                display: block;
                margin: 0 auto;
              }
            }
            .tit{
              position: relative;
              bottom: 10px;
              font-size: 14px;
              color: #D5DEF3;
              text-align: center;
              width: 100%;
            }
          }
        }
        .swiper-btn .left{
          position: absolute;
          width: 21px;
          height: 19px;
          background: url("@/assets/images/x-left.png") no-repeat;
          background-size: 100% 100%;
          top: 64px;
          left: 0;
        }
        .swiper-btn .right{
          position: absolute;
          width: 21px;
          height: 19px;
          background: url("@/assets/images/x-right.png") no-repeat;
          background-size: 100% 100%;
          top: 64px;
          right: 0;
        }
      }
    }
  }
}
</style>