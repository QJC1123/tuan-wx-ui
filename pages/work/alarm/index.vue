<template>
	<view class="container">
		<uni-card>
			<view slot="title"style="padding-top: 10px;">
				<view>
					<view style="float: left;">
						<image src="@/static/images/logo/alarm.png" style="width: 23px;height: 28px;border-radius: 100%;float: left;"></image>
					</view>
					<view style="padding-top: 2px;">
						<text style="font-size: 18px;font-weight: 520;padding-left: 10px;">消防告警</text>
						<text style="font-size: 12.5px;color: #939394;padding-left: 10px;">一级告警</text>
						<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">12:45</text>
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
					<uni-tag :inverted="true" text="忽略" style="padding-left: 10px;" type="warning" />
					<uni-icons type="right" size="18" style="float: right;"></uni-icons>
					<text style="float: right;font-size: 13px;" @click="AlarmDetail">查看详情</text>
				</uni-list></view>
			</view>
		</uni-card>
		<uni-card>
			<view slot="title"style="padding-top: 10px;">
				<view>
					<view style="float: left;">
						<image src="@/static/images/logo/device.png" style="width: 28px;height: 28px;border-radius: 100%;float: left;"></image>
					</view>
					<view style="padding-top: 2px;">
						<text style="font-size: 18px;font-weight: 520;padding-left: 10px;">设备告警</text>
						<text style="font-size: 12.5px;color: #939394;padding-left: 10px;">三级告警</text>
						<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">9:05</text>
					</view>
				</view>
				<view style="padding-top: 12px;padding-bottom: 0px;">
					<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">“行政楼-二喽-西”摄像头设备掉线，请立即前往处理！</text>
				</view>
				<view style="padding-top: 12px;">
					<uni-list style="padding-top: 0px;" >
					</uni-list>
				</view>
				<view style="padding-top: 17px;">
					<uni-tag :inverted="true" text="认领" type="success"/>
					<uni-tag :inverted="true" text="忽略" style="padding-left: 10px;" />
					<uni-icons type="right" size="18" style="float: right;"></uni-icons>
					<text style="float: right;font-size: 13px;">查看详情</text>
				</uni-list></view>
			</view>
		</uni-card>
		
		<uni-card>
			<view slot="title"style="padding-top: 10px;">
				<view>
					<view style="float: left;">
						<image src="@/static/images/logo/car.png" style="width: 23px;height: 28px;border-radius: 100%;float: left;"></image>
					</view>
					<view style="padding-top: 2px;">
						<text style="font-size: 18px;font-weight: 520;padding-left: 10px;">交通告警</text>
						<text style="font-size: 12.5px;color: #939394;padding-left: 10px;">二级告警</text>
						<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">11:23</text>
					</view>
				</view>
				<view style="padding-top: 12px;padding-bottom: 0px;">
					<text style="font-size: 14px;color: #939394;padding-bottom: 0px;">停车场-东发现车辆违停，请立即前往处理！</text>
				</view>
				<view style="padding-top: 12px;">
					<uni-list style="padding-top: 0px;" >
					</uni-list>
				</view>
				<view style="padding-top: 17px;">
					<uni-tag :inverted="true" text="认领" type="success"/>
					<uni-tag :inverted="true" text="忽略" style="padding-left: 10px;" />
					<uni-icons type="right" size="18" style="float: right;"></uni-icons>
					<text style="float: right;font-size: 13px;">查看详情</text>
				</uni-list></view>
			</view>
		</uni-card>
		
		<uni-card>
			<view slot="title"style="padding-top: 10px;">
				<view>
					<view style="float: left;">
						<image src="@/static/images/logo/alarm.png" style="width: 23px;height: 28px;border-radius: 100%;float: left;"></image>
					</view>
					<view style="padding-top: 2px;">
						<text style="font-size: 18px;font-weight: 520;padding-left: 10px;">消防告警</text>
						<text style="font-size: 12.5px;color: #939394;padding-left: 10px;">一级告警</text>
						<text style="float: right;color: #b3b3b3;font-size: 12px;padding-top: 5px;">12:45</text>
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
		
		
		


	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {

			}
		},
		methods: {
			AlarmDetail(){
				this.$tab.navigateTo('/pages/work/alarm/detail')
			}
			
			
		}
	}
</script>


