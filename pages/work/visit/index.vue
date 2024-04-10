<template>
	<view class="container" style="background-color: #f5faff;height: 800px;">
			<uni-card>
				<view slot="title"style="padding-top: 10px;">
					<view>
						<view style="float: left;">
							<!-- <image src="@/static/images/logo/alarm2.png" style="width: 43px;height: 43px;float: left;"></image> -->
						</view>
						<view style="padding-top: 10px;">
							<text style="font-size: 20px;font-weight: 520;padding-left: 10px;">小何提交的访客申请</text>
						</view>
					</view>
					<view style="padding-top: 25px;">
						<uni-list style="padding-top: 0px;" >
						</uni-list>
						<image src="@/static/images/logo/visit1.png" style="zoom: 0.5;height: 210px;width: 240px;float: right;" ></image>
					</view>
					<view style="padding-top: 10px;padding-left: 2px;">
						<view style="padding-top: 10px;padding-bottom: 0px;">
							<text style="font-size: 15px;color: #939394;padding-bottom: 0px;">车位预约</text>
							<text style="font-size: 15px;color: #000000;padding-bottom: 0px;padding-left: 20px;">是</text>
						</view>
						<view style="padding-top: 12px;padding-bottom: 0px;">
							<text style="font-size: 15px;color: #939394;padding-bottom: 0px;">预约时间</text>
							<text style="font-size: 15px;color: #000000;padding-bottom: 0px;padding-left: 20px;">2023-03-02</text>
						</view>
						<view style="padding-top: 10px;padding-bottom: 0px;">
							<text style="font-size: 15px;color: #939394;padding-bottom: 0px;">联系电话</text>
							<text style="font-size: 15px;color: #000000;padding-bottom: 0px;padding-left: 20px;">17843710032</text>
						</view>
						<view style="padding-top: 10px;padding-bottom: 0px;">
							<text style="font-size: 15px;color: #939394;padding-bottom: 0px;">来访理由</text>
							<text style="font-size: 15px;color: #000000;padding-bottom: 0px;padding-left: 20px;">送文件</text>
						</view>
						<view style="padding-top: 20px;">
							<uni-list style="padding-top: 10px;" >
							</uni-list>
						</view>
						<view style="padding-top: 17px;">
							<uni-tag :inverted="true" text="修改" type="success" style="zoom: 1.1;"/>
							<uni-tag :inverted="true" text="撤回" style="padding-left: 10px;zoom: 1.1;"/>
							<uni-icons type="right" size="18" style="float: right;"></uni-icons>
							<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看</text>
						</uni-list></view>
						
					</uni-list></view>
				</view>
			</uni-card>
			
			<uni-card>
				<view slot="title"style="padding-top: 10px;">
					<view>
						<view style="float: left;">
							<!-- <image src="@/static/images/logo/alarm2.png" style="width: 43px;height: 43px;float: left;"></image> -->
						</view>
						<view style="padding-top: 10px;">
							<text style="font-size: 20px;font-weight: 520;padding-left: 10px;">小何提交的访客申请</text>
						</view>
					</view>
					<view style="padding-top: 25px;">
						<uni-list style="padding-top: 0px;" >
						</uni-list>
						<image src="@/static/images/logo/visit2.png" style="zoom: 0.5;height: 200px;width: 240px;float: right;" ></image>
					</view>
					<view style="padding-top: 10px;padding-left: 2px;">
						<view style="padding-top: 10px;padding-bottom: 0px;">
							<text style="font-size: 15px;color: #939394;padding-bottom: 0px;">车位预约</text>
							<text style="font-size: 15px;color: #000000;padding-bottom: 0px;padding-left: 20px;">是</text>
						</view>
						<view style="padding-top: 12px;padding-bottom: 0px;">
							<text style="font-size: 15px;color: #939394;padding-bottom: 0px;">预约时间</text>
							<text style="font-size: 15px;color: #000000;padding-bottom: 0px;padding-left: 20px;">2023-02-27</text>
						</view>
						<view style="padding-top: 10px;padding-bottom: 0px;">
							<text style="font-size: 15px;color: #939394;padding-bottom: 0px;">联系电话</text>
							<text style="font-size: 15px;color: #000000;padding-bottom: 0px;padding-left: 20px;">17843710032</text>
						</view>
						<view style="padding-top: 10px;padding-bottom: 0px;">
							<text style="font-size: 15px;color: #939394;padding-bottom: 0px;">来访理由</text>
							<text style="font-size: 15px;color: #000000;padding-bottom: 0px;padding-left: 20px;">送文件</text>
						</view>
						<!-- <view style="padding-top: 20px;">
							<uni-list style="padding-top: 10px;" >
							</uni-list>
						</view>
						<view style="padding-top: 17px;">
							<uni-tag :inverted="true" text="修改" type="success" style="zoom: 1.1;"/>
							<uni-tag :inverted="true" text="撤回" style="padding-left: 10px;zoom: 1.1;"/>
							<uni-icons type="right" size="18" style="float: right;"></uni-icons>
							<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看</text>
						</uni-list></view> -->
						
					</uni-list></view>
				</view>
			</uni-card><uni-card>
				<view slot="title"style="padding-top: 10px;">
					<view>
						<view style="float: left;">
							<!-- <image src="@/static/images/logo/alarm2.png" style="width: 43px;height: 43px;float: left;"></image> -->
						</view>
						<view style="padding-top: 10px;">
							<text style="font-size: 20px;font-weight: 520;padding-left: 10px;">小何提交的访客申请</text>
						</view>
					</view>
					<view style="padding-top: 25px;">
						<uni-list style="padding-top: 0px;" >
						</uni-list>
						<image src="@/static/images/logo/visit3.png" style="zoom: 0.5;height: 200px;width: 240px;float: right;" ></image>
					</view>
					<view style="padding-top: 10px;padding-left: 2px;">
						<view style="padding-top: 10px;padding-bottom: 0px;">
							<text style="font-size: 15px;color: #939394;padding-bottom: 0px;">车位预约</text>
							<text style="font-size: 15px;color: #000000;padding-bottom: 0px;padding-left: 20px;">是</text>
						</view>
						<view style="padding-top: 12px;padding-bottom: 0px;">
							<text style="font-size: 15px;color: #939394;padding-bottom: 0px;">预约时间</text>
							<text style="font-size: 15px;color: #000000;padding-bottom: 0px;padding-left: 20px;">2023-02-25</text>
						</view>
						<view style="padding-top: 10px;padding-bottom: 0px;">
							<text style="font-size: 15px;color: #939394;padding-bottom: 0px;">联系电话</text>
							<text style="font-size: 15px;color: #000000;padding-bottom: 0px;padding-left: 20px;">17843710032</text>
						</view>
						<view style="padding-top: 10px;padding-bottom: 0px;">
							<text style="font-size: 15px;color: #939394;padding-bottom: 0px;">来访理由</text>
							<text style="font-size: 15px;color: #000000;padding-bottom: 0px;padding-left: 20px;">送文件</text>
						</view>
						<view style="padding-top: 20px;">
							<uni-list style="padding-top: 10px;" >
							</uni-list>
						</view>
						<view style="padding-top: 17px;">
							<!-- <uni-tag :inverted="true" text="修改" type="success" style="zoom: 1.1;"/> -->
							<uni-tag :inverted="true" text="删除" style="padding-left: 10px;zoom: 1.1;"/>
							<uni-icons type="right" size="18" style="float: right;"></uni-icons>
							<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看</text>
						</uni-list></view>
						
					</uni-list></view>
				</view>
			</uni-card>
			
			
			<!-- <view style="width:100%;position:fixed;background-color: #f5faff;align-items: center;">
				<button style="border-radius:0px;background-color:white;color:#33c3b3">访客申请</button>
			</view> -->
			
			<view style="position:fixed;bottom: 0;width:100%;background-color:white;align-items: center;">
				<div style="padding-bottom: 10px;">
					<button class="login-btn  round"
					style="
					margin-top: 15px;
					height: 45px;
					width: 300px;
					align-items: center;
					padding-bottom: 10px;
					background-color: #60d088;
					color: white;
					"
					@click="handlereport"
					>访客预约</button>
				</div>
				
				
				
			
			</view>
			
			
			
			
			
	</view>
</template>

<script>
	export default {

		data() {
			return {
				tabIndex: 0,
				scrollInto: '',
				scrollH: 1060,
			}
		},
		methods: {
			handlereport(){
				this.$tab.navigateTo('/pages/work/visit/report')
			},
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
		},
		
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

