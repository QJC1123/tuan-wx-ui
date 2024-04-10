<template>
  <view class="work-container">
    <!-- 轮播图 -->
    <uni-swiper-dot class="uni-swiper-dot-box" :info="data" :current="current" field="content">
      <swiper class="swiper-box" :current="swiperDotIndex" @change="changeSwiper">
        <swiper-item v-for="(item, index) in data" :key="index">
          <view class="swiper-item" @click="clickBannerItem(item)">
            <image :src="item.image" mode="aspectFill" :draggable="false" />
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>

    <!-- 宫格组件 -->
    <uni-section title="安防应用" type="line"></uni-section>
    <view class="grid-body">
      <uni-grid :column="4" :showBorder="false" >
        <uni-grid-item> 
          <view class="grid-item-box" @click="handleToAlarm" style="padding-top: 1px;">
			<image src="@/static/images/logo/alarm.png" style="width: 40px;height: 48px;"></image>
            <text class="text">告警中心</text>
          </view>
        </uni-grid-item>
		<uni-grid-item>
		  <view class="grid-item-box" @click="handleToDormrepport" style="padding-top: 9px;">
			<image src="@/static/images/logo/dorm.png" style="width: 40px;height: 40px;"></image>
		    <text class="text">归寝打卡</text>
		  </view>
		</uni-grid-item>
		<uni-grid-item>
		  <view class="grid-item-box" @click="handleToDutyreport" style="padding-top: 10px;">
			<image src="@/static/images/logo/duty.png" style="width: 40px;height: 40px;"></image>
		    <text class="text">值班打卡</text>
		  </view>
		</uni-grid-item>
		<uni-grid-item>
		  <view class="grid-item-box" @click="handleToVisitreport" style="padding-top: 10px;">
			<image src="@/static/images/logo/visitor.png" style="width: 45px;height: 40px;"></image>
		    <text class="text">访客申请</text>
		  </view>
		</uni-grid-item>
		<uni-grid-item >
		  <view class="grid-item-box" @click="handleToRiskreport" style="padding-top: 0px;">
			<image src="@/static/images/logo/device.png" style="width: 48px;height: 48px;"></image>
		    <text class="text">隐患上报</text>
		  </view>
		</uni-grid-item>
		
		
		<!-- <uni-grid-item >
		  <view class="grid-item-box" @click="handleToRiskreport" style="padding-top: 0px;">
			<image src="@/static/images/logo/visitorrecord.png" style="width: 48px;height: 48px;"></image>
		    <text class="text">我的申请</text>
		  </view>
		</uni-grid-item> -->：
		<!-- <uni-grid-item >
		  <view class="grid-item-box" @click="handleToAlarmrecord" style="padding-top: 0px;">
			<image src="@/static/images/logo/alarmrecord.png" style="width: 53px;height: 48px;"></image>
		    <text class="text">我的告警</text>
		  </view>
		</uni-grid-item> -->
		<!-- <uni-grid-item >
		  <view class="grid-item-box" @click="handleToRiskreport" style="padding-top: 4px;">
			<image src="@/static/images/logo/dutyrecord.png" style="width: 40px;height: 40px;"></image>
		    <text class="text" style="padding-top: 4px;">我的到岗</text>
		  </view>
		</uni-grid-item> -->
		<!-- <uni-grid-item >
		  <view class="grid-item-box" @click="handleToRiskreport" style="padding-top: 0px;">
			<image src="@/static/images/logo/dormrecord.png" style="width: 48px;height: 48px;"></image>
		    <text class="text">我的打卡</text>
		  </view>
		</uni-grid-item> -->
		
		
		<!-- <uni-grid-item >
		  <view class="grid-item-box" @click="handleToRiskreport" style="padding-top: 0px;">
			<image src="@/static/images/logo/devicerecord.png" style="width: 48px;height: 48px;"></image>
		    <text class="text">我的报修</text>
		  </view>
		</uni-grid-item> -->
		<uni-grid-item >
		  <view class="grid-item-box" @click="handleToRiskreport" style="padding-top: 2px;">
			<image src="@/static/images/logo/add.png" style="width: 48px;height: 48px;zoom:0.9"></image>
		    <text class="text" style="padding-top: 2px;">添加</text>
		  </view>
		</uni-grid-item>
		
       
        
      </uni-grid>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        current: 0,
        swiperDotIndex: 0,
        data: [{
            image: '/static/images/banner/bannar01.png'
          },
          {
            image: '/static/images/banner/bannar01.png'
          },
          {
            image: '/static/images/banner/bannar01.png'
          }
        ]
      }
    },
    methods: {
      clickBannerItem(item) {
        console.info(item)
      },
      changeSwiper(e) {
        this.current = e.detail.current
      },
      
	  handleToAlarm(){
		this.$tab.navigateTo('/pages/work/alarm/record')
	  },
	  handleToAlarmrecord(){
		  this.$tab.navigateTo('/pages/work/alarm/record')
	  },
	  handleToVisitreport(){
		this.$tab.navigateTo('/pages/work/visit/index')
	  },
	  handleToRiskreport(){
	  	this.$tab.navigateTo('/pages/work/device/index')
	  },
	  handleToDormrepport(){
		  this.$tab.navigateTo('/pages/work/dorm/index')
		  this.$tab.reLaunch('/pages/work/dorm/index')
	  },
	  handleToDutyreport(){
		  this.$tab.navigateTo('/pages/work/duty/index')
		  this.$tab.reLaunch('/pages/work/duty/index')
	  }
    }
  }
</script>

<style lang="scss">
  /* #ifndef APP-NVUE */
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #fff;
    min-height: 100%;
    height: auto;
  }

  view {
    font-size: 14px;
    line-height: inherit;
  }

  /* #endif */

  .text {
    text-align: center;
    font-size: 26rpx;
    margin-top: 10rpx;
  }

  .grid-item-box {
    flex: 1;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
  }

  .uni-margin-wrap {
    width: 690rpx;
    width: 100%;
    ;
  }

  .swiper {
    height: 300rpx;
  }

  .swiper-box {
    height: 150px;
  }

  .swiper-item {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 300rpx;
    line-height: 300rpx;
  }

  @media screen and (min-width: 500px) {
    .uni-swiper-dot-box {
      width: 400px;
      /* #ifndef APP-NVUE */
      margin: 0 auto;
      /* #endif */
      margin-top: 8px;
    }

    .image {
      width: 100%;
    }
  }
</style>
