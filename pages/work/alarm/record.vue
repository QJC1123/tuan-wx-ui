<template>
	<view class="container" style="background-color: #f5faff;height: 800px;">
		<!-- 顶部选项卡 -->
		<scroll-view class="pagecontrol-top-scroll" scroll-x="true" scroll-with-animation
			:scroll-into-view="scrollInto" style="background-color: #FFFFFF;">
			<view class="pagecontrol-top-title" style="background-color: #FFFFFF;">
				<view v-for="(item,index) in itemsArr" :key="index" class="pagecontrol-top-text"
					@click="changeTab(index)" :id="'tab' + index" style="background-color: #FFFFFF;">
					<view :class="tabIndex === index?'pagecontrol-top-selected':'pagecontrol-top-normal'"  s>
						{{item}}
					</view>
					<view class="pagecontrol-bottom-line"
						:class="tabIndex === index?'pagecontrol-bottom-line-show':'pagecontrol-bottom-line-visibility'">
					</view>
				</view>
			</view>
		</scroll-view>

		<swiper :duration="150" :current="tabIndex" @change="onChangeTab" :style="'height:'+scrollH+'px;'" style="background-color: #f5faff;"> 
			<swiper-item v-for="(item,index) in itemsArr" :key="index" style="background-color: #f5faff;">
				<scroll-view scroll-y="true" show :style="'height:'+scrollH+'px;'" style="background-color: #f5faff;">
					<template v-if="tabIndex==0" style="background-color: #f5faff;">
						<uni-card>
							<view slot="title"style="padding-top: 10px;">
								<view>
									<view style="float: left;">
										<image src="@/static/images/logo/alarm2.png" style="width: 43px;height: 43px;float: left;"></image>
									</view>
									<view style="padding-top: 2px;">
										<text style="font-size: 16px;font-weight: 520;padding-left: 10px;">二级告警</text>
										<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">2023-03-30 12:45:12</text>
									</view>
									<view style="padding-left: 52px;">
										<text style="font-size: 13px;color: #939394;">交通告警</text>
									</view>
								</view>
								<view style="padding-top: 12px;padding-bottom: 0px;">
									<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">停车场-西发现车辆违停，请立即前往处理！</text>
								</view>
								<view style="padding-top: 12px;">
									<uni-list style="padding-top: 0px;" >
									</uni-list>
								</view>
								<view style="padding-top: 17px;">
									<uni-tag :inverted="true" text="认领" type="success"/>
									<uni-tag :inverted="true" text="忽略" style="padding-left: 10px;" />
									<uni-icons type="right" size="18" style="float: right;"></uni-icons>
									<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看详情</text>
								</uni-list></view>
							</view>
						</uni-card>
						<uni-card>
							<view slot="title"style="padding-top: 10px;">
								<view>
									<view style="float: left;">
										<image src="@/static/images/logo/alarm4.png" style="width: 45px;height: 43px;float: left;"></image>
									</view>
									<view style="padding-top: 2px;">
										<text style="font-size: 16px;font-weight: 520;padding-left: 10px;">解除告警</text>
										<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">2023-03-30 13:50:32</text>
									</view>
								</view>
								<view style="padding-left: 55px;">
									<text style="font-size: 13px;color: #939394;">交通告警</text>
								</view>
								<view style="padding-top: 12px;">
									<uni-list style="padding-top: 0px;" >
									</uni-list>
								</view>
								<view style="padding-top: 17px;">
									<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">“停车场-西发现车辆违停”告警事件已解除！</text>
								</uni-list></view>
							</view>
						</uni-card>
						<uni-card>
							<view slot="title"style="padding-top: 10px;">
								<view>
									<view style="float: left;">
										<image src="@/static/images/logo/alarm3.png" style="width: 45px;height: 43px;float: left;"></image>
									</view>
									<view style="padding-top: 2px;">
										<text style="font-size: 16px;font-weight: 520;padding-left: 10px;">三级告警</text>
										<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">2023-03-30 15:23:22</text>
									</view>
									<view style="padding-left: 52px;">
										<text style="font-size: 13px;color: #939394;">人员异常告警</text>
									</view>
								</view>
								<view style="padding-top: 12px;padding-bottom: 0px;">
									<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">8号寝室楼-2楼-西发现有人抽烟，请立即前往处理！</text>
								</view>
								<view style="padding-top: 12px;">
									<uni-list style="padding-top: 0px;" >
									</uni-list>
								</view>
								<view style="padding-top: 17px;">
									<uni-tag :inverted="true" text="认领" type="success"/>
									<uni-tag :inverted="true" text="忽略" style="padding-left: 10px;" />
									<uni-icons type="right" size="18" style="float: right;"></uni-icons>
									<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看详情</text>
								</uni-list></view>
							</view>
						</uni-card>
						<uni-card>
							<view slot="title"style="padding-top: 10px;">
								<view>
									<view style="float: left;">
										<image src="@/static/images/logo/alarm1.png" style="width: 45px;height: 43px;float: left;"></image>
									</view>
									<view style="padding-top: 2px;">
										<text style="font-size: 16px;font-weight: 520;padding-left: 10px;">一级告警</text>
										<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">2023-03-30 16:00:12</text>
									</view>
									<view style="padding-left: 52px;">
										<text style="font-size: 13px;color: #939394;">消防告警</text>
									</view>
								</view>
								<view style="padding-top: 12px;padding-bottom: 0px;">
									<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">停车场-西出现明火，请立即前往处理！</text>
								</view>
								<view style="padding-top: 12px;">
									<uni-list style="padding-top: 0px;" >
									</uni-list>
								</view>
								<view style="padding-top: 17px;">
									<uni-tag :inverted="true" text="认领" type="success"/>
									<uni-tag :inverted="true" text="忽略" style="padding-left: 10px;" />
									<uni-icons type="right" size="18" style="float: right;"></uni-icons>
									<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看详情</text>
								</uni-list></view>
							</view>
						</uni-card>
					</template>
					
					
					<template v-if="tabIndex==1" style="background-color: #f5faff;">
						<uni-card>
							<view slot="title"style="padding-top: 10px;">
								<view>
									<view style="float: left;">
										<image src="@/static/images/logo/alarm3.png" style="width: 45px;height: 43px;float: left;"></image>
									</view>
									<view style="padding-top: 2px;">
										<text style="font-size: 16px;font-weight: 520;padding-left: 10px;">三级告警</text>
										<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">2023-03-30 15:23:22</text>
									</view>
									<view style="padding-left: 52px;">
										<text style="font-size: 13px;color: #939394;">人员异常告警</text>
									</view>
								</view>
								<view style="padding-top: 12px;padding-bottom: 0px;">
									<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">8号寝室楼-2楼-西发现有人抽烟，请立即前往处理！</text>
								</view>
								<view style="padding-top: 12px;">
									<uni-list style="padding-top: 0px;" >
									</uni-list>
								</view>
								<view style="padding-top: 17px;">
									<uni-tag :inverted="true" text="处理中" type="warning"/>
									<uni-icons type="right" size="18" style="float: right;"></uni-icons>
									<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看详情</text>
								</uni-list></view>
							</view>
						</uni-card>
						<uni-card>
							<view slot="title"style="padding-top: 10px;">
								<view>
									<view style="float: left;">
										<image src="@/static/images/logo/alarm1.png" style="width: 45px;height: 43px;float: left;"></image>
									</view>
									<view style="padding-top: 2px;">
										<text style="font-size: 16px;font-weight: 520;padding-left: 10px;">一级告警</text>
										<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">2023-03-30 16:00:12</text>
									</view>
									<view style="padding-left: 52px;">
										<text style="font-size: 13px;color: #939394;">消防告警</text>
									</view>
								</view>
								<view style="padding-top: 12px;padding-bottom: 0px;">
									<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">停车场-西出现明火，请立即前往处理！</text>
								</view>
								<view style="padding-top: 12px;">
									<uni-list style="padding-top: 0px;" >
									</uni-list>
								</view>
								<view style="padding-top: 17px;">
									<uni-tag :inverted="true" text="处理中" type="warning"/>
									<uni-icons type="right" size="18" style="float: right;"></uni-icons>
									<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看详情</text>
								</uni-list></view>
							</view>
						</uni-card>
					</template>
					
					<template v-if="tabIndex==2" style="background-color: #f5faff;">
						<uni-card>
							<view slot="title"style="padding-top: 10px;">
								<view>
									<view style="float: left;">
										<image src="@/static/images/logo/alarm3.png" style="width: 45px;height: 43px;float: left;"></image>
									</view>
									<view style="padding-top: 2px;">
										<text style="font-size: 16px;font-weight: 520;padding-left: 10px;">三级告警</text>
										<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">2023-03-30 15:23:22</text>
									</view>
									<view style="padding-left: 52px;">
										<text style="font-size: 13px;color: #939394;">人员异常告警</text>
									</view>
								</view>
								<view style="padding-top: 12px;padding-bottom: 0px;">
									<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">8号寝室楼-2楼-西发现有人抽烟，请立即前往处理！</text>
								</view>
								<view style="padding-top: 12px;">
									<uni-list style="padding-top: 0px;" >
									</uni-list>
								</view>
								<view style="padding-top: 17px;">
									<uni-tag :inverted="true" text="已完成" type="primary"/>
									<uni-icons type="right" size="18" style="float: right;"></uni-icons>
									<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看详情</text>
								</uni-list></view>
							</view>
						</uni-card>
						<uni-card>
							<view slot="title"style="padding-top: 10px;">
								<view>
									<view style="float: left;">
										<image src="@/static/images/logo/alarm1.png" style="width: 45px;height: 43px;float: left;"></image>
									</view>
									<view style="padding-top: 2px;">
										<text style="font-size: 16px;font-weight: 520;padding-left: 10px;">一级告警</text>
										<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">2023-03-30 16:00:12</text>
									</view>
									<view style="padding-left: 52px;">
										<text style="font-size: 13px;color: #939394;">消防告警</text>
									</view>
								</view>
								<view style="padding-top: 12px;padding-bottom: 0px;">
									<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">停车场-西出现明火，请立即前往处理！</text>
								</view>
								<view style="padding-top: 12px;">
									<uni-list style="padding-top: 0px;" >
									</uni-list>
								</view>
								<view style="padding-top: 17px;">
									<uni-tag :inverted="true" text="已完成" type="primary"/>
									<uni-icons type="right" size="18" style="float: right;"></uni-icons>
									<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看详情</text>
								</uni-list></view>
							</view>
						</uni-card>
					</template>
					
					<template v-if="tabIndex==4" style="background-color: #f5faff;">
						<uni-card>
							<view slot="title"style="padding-top: 10px;">
								<view>
									<view style="float: left;">
										<image src="@/static/images/logo/alarm2.png" style="width: 43px;height: 43px;float: left;"></image>
									</view>
									<view style="padding-top: 2px;">
										<text style="font-size: 16px;font-weight: 520;padding-left: 10px;">二级告警</text>
										<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">2023-03-30 12:45:12</text>
									</view>
									<view style="padding-left: 52px;">
										<text style="font-size: 13px;color: #939394;">交通告警</text>
									</view>
								</view>
								<view style="padding-top: 12px;padding-bottom: 0px;">
									<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">停车场-西发现车辆违停，请立即前往处理！</text>
								</view>
								<view style="padding-top: 12px;">
									<uni-list style="padding-top: 0px;" >
									</uni-list>
								</view>
								<view style="padding-top: 17px;">
									<uni-tag :inverted="true" text="认领" type="success"/>
									<uni-tag :inverted="true" text="忽略" style="padding-left: 10px;" />
									<uni-icons type="right" size="18" style="float: right;"></uni-icons>
									<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看详情</text>
								</uni-list></view>
							</view>
						</uni-card>
						<uni-card>
							<view slot="title"style="padding-top: 10px;">
								<view>
									<view style="float: left;">
										<image src="@/static/images/logo/alarm4.png" style="width: 45px;height: 43px;float: left;"></image>
									</view>
									<view style="padding-top: 2px;">
										<text style="font-size: 16px;font-weight: 520;padding-left: 10px;">解除告警</text>
										<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">2023-03-30 13:50:32</text>
									</view>
								</view>
								<view style="padding-left: 55px;">
									<text style="font-size: 13px;color: #939394;">交通告警</text>
								</view>
								<view style="padding-top: 12px;">
									<uni-list style="padding-top: 0px;" >
									</uni-list>
								</view>
								<view style="padding-top: 17px;">
									<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">“停车场-西发现车辆违停”告警事件已解除！</text>
								</uni-list></view>
							</view>
						</uni-card>
						<uni-card>
							<view slot="title"style="padding-top: 10px;">
								<view>
									<view style="float: left;">
										<image src="@/static/images/logo/alarm3.png" style="width: 45px;height: 43px;float: left;"></image>
									</view>
									<view style="padding-top: 2px;">
										<text style="font-size: 16px;font-weight: 520;padding-left: 10px;">三级告警</text>
										<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">2023-03-30 15:23:22</text>
									</view>
									<view style="padding-left: 52px;">
										<text style="font-size: 13px;color: #939394;">人员异常告警</text>
									</view>
								</view>
								<view style="padding-top: 12px;padding-bottom: 0px;">
									<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">8号寝室楼-2楼-西发现有人抽烟，请立即前往处理！</text>
								</view>
								<view style="padding-top: 12px;">
									<uni-list style="padding-top: 0px;" >
									</uni-list>
								</view>
								<view style="padding-top: 17px;">
									<uni-tag :inverted="true" text="认领" type="success"/>
									<uni-tag :inverted="true" text="忽略" style="padding-left: 10px;" />
									<uni-icons type="right" size="18" style="float: right;"></uni-icons>
									<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看详情</text>
								</uni-list></view>
							</view>
						</uni-card>
						<uni-card>
							<view slot="title"style="padding-top: 10px;">
								<view>
									<view style="float: left;">
										<image src="@/static/images/logo/alarm1.png" style="width: 45px;height: 43px;float: left;"></image>
									</view>
									<view style="padding-top: 2px;">
										<text style="font-size: 16px;font-weight: 520;padding-left: 10px;">一级告警</text>
										<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">2023-03-30 16:00:12</text>
									</view>
									<view style="padding-left: 52px;">
										<text style="font-size: 13px;color: #939394;">消防告警</text>
									</view>
								</view>
								<view style="padding-top: 12px;padding-bottom: 0px;">
									<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">停车场-西出现明火，请立即前往处理！</text>
								</view>
								<view style="padding-top: 12px;">
									<uni-list style="padding-top: 0px;" >
									</uni-list>
								</view>
								<view style="padding-top: 17px;">
									<uni-tag :inverted="true" text="认领" type="success"/>
									<uni-tag :inverted="true" text="忽略" style="padding-left: 10px;" />
									<uni-icons type="right" size="18" style="float: right;"></uni-icons>
									<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看详情</text>
								</uni-list></view>
							</view>
						</uni-card>
					</template>
					
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				itemsArr: ['待认领', '待处理', '已完成', '全部'],
				tabIndex: 0,
				scrollInto: '',
				scrollH: 1060,
			}
		},
		methods: {
			AlarmDetail(){
				this.$tab.navigateTo('/pages/work/alarm/detail')
			},
			// 监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			// 切换选项
			changeTab(index) {
				if (this.tabIndex === index) {
					return;
				}
				this.tabIndex = index
				// 滚动到指定元素
				this.scrollInto = 'tab' + index
				// 获取当前分类下的列表数据

			},
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					console.log("wuwuFQ:", res)
					this.scrollH = res.windowHeight - 40
					// #ifdef MP
					this.scrollH -= 44
					// #endif
					console.log("wuwuFQ:", this.scrollH)
				}
			})
		}
	}
</script>

<style>
	.pagecontrol-top-scroll {
		height: 50px;
		width: 100%;
		white-space: nowrap;
		box-sizing: border-box;
		border-bottom-width: 2rpx;
		border-bottom-style: solid;
		border-bottom-color: #d8dce0;
	}

	.pagecontrol-top-title {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}


	.pagecontrol-top-text {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.pagecontrol-top-normal {
		color: black;
		font-size: 16px;
	}

	.pagecontrol-top-selected {
		color: #33c3b3;
		font-size: 17px;
	}

	.pagecontrol-bottom-line {
		width: 100%;
		height: 1px;
		margin-top: 2px;
		background-color: #33c3b3;
	}

	.pagecontrol-bottom-line-show {
		visibility: visible;
	}

	.pagecontrol-bottom-line-visibility {
		visibility: hidden;
	}

	.order-item {
		background-color: #FFFFFF;
		padding: 20rpx;
		border-radius: 15rpx;
		margin: 15rpx;
	}

	.order-top-view {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10rpx;
	}

	.order-store-name {
		font-size: 16px;
		font-weight: 500;
	}

	.order-status {
		font-size: 12px;
		color: #A5A5A5;
	}

	.order-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.order-date {
		margin: 6rpx 0;
	}

	/* .bottom-buttons {
		margin-top: 10rpx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.button-tag {
		margin-left: 40rpx;
		height: 30px;
		line-height: 30px;
		padding: 0 20px;
		border-radius: 15px;
		color: #A5A5A5;
		border: 1px solid #EDEDED;
	} */
</style>

