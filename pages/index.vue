<template>
	<view class="container">
		
		<uni-list>
			<uni-list-item title="告警通知" note="您有新的告警通知" showArrow link="redirectTo" to="./work/riskreport" @click="onClick" >
				<template v-slot:header>
					<view class="slot-box">
						<image class="slot-image" src="/static/images/logo/alarm.png" mode="widthFix" style="border-radius: 100%;zoom:1.4" badge-text="dot"></image>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item title="打卡提醒" note="您有一条归寝考勤打卡提醒" showArrow link="redirectTo" to="./work/riskreport" @click="onClick" >
				<template v-slot:header>
					<view class="slot-box">
						<image class="slot-image" src="/static/images/logo/dorm.png" mode="widthFix" style="border-radius: 100%;zoom:1.4" badge-text="dot"></image>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item  title="打卡通知" note="您有一条值班到岗打卡提醒" showArrow link="redirectTo" to="./work/riskreport" @click="onClick" >
				<template v-slot:header>
					<view class="slot-box">
						<image class="slot-image" src="/static/images/logo/duty.png" mode="widthFix" style="border-radius: 100%;zoom:1.4" badge-text="dot"></image>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item title="访客通知" note="您有新的访客申请结果通知" showArrow link="redirectTo" to="./work/riskreport" @click="onClick" >
				<template v-slot:header>
					<view class="slot-box">
						<image class="slot-image" src="/static/images/logo/visitor.png" mode="widthFix" style="border-radius: 100%;zoom:1.4" badge-text="dot"></image>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item title="报修通知" note="您有新的设施报修结果通知" showArrow link="redirectTo" to="./work/riskreport" @click="onClick" >
				<template v-slot:header>
					<view class="slot-box">
						<image class="slot-image" src="/static/images/logo/device.png" mode="widthFix" style="border-radius: 100%;zoom:1.4" badge-text="dot"></image>
					</view>
				</template>
			</uni-list-item>
			
			
			
			
			
			
		</uni-list>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				cover: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
				avatar: 'https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				}
			};
		},
		methods: {
			onClick(e) {
				
				console.log('执行click事件', e.data)
				uni.showToast({
					title: '点击反馈'
				});
				this.$tab.navigateTo('./pages/work/riskreport')
				
				
			},
			switchChange(e) {
				uni.showToast({
					title: 'change:' + e.value,
					icon: 'none'
				});
			}
		}
	};
</script>

<style lang="scss">
	.slot-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}

	.slot-image {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		margin-right: 10px;
		width: 30px;
		height: 30px;
	}

	.slot-text {
		flex: 1;
		font-size: 14px;
		color: #4cd964;
		margin-right: 10px;
	}
</style>

