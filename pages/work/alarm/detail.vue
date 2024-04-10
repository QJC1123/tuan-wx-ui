<template>
	<view class="container">
		<view>
			<uni-card title="监控回放">
				<view >
					<view style="zoom: 1.4;">
						<video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
						    @error="videoErrorCallback" controls style="width: 190px;height: 120px;padding-left: 25px;"></video>
					</view>
				</view>
			</uni-card>
			<uni-card title="告警处理">
				<view>
					<uni-forms ref="baseFormData" :modelValue="baseFormData"  >
						<view style="display: flex;flex-direction: row;">
							<span style="padding-top: 2px;font-size: 14px;">事件:</span>
							<input v-model="baseFormData.content" style="border: none;padding-left: 34px;font-size: 16px;" />
						</view>
						<view style="display: flex;flex-direction: row;">
							<span style="padding-top: 2px;font-size: 14px;">类型:</span>
							<input v-model="baseFormData.type" style="border: none;padding-left: 34px;font-size: 16px;" />
						</view>
						<view style="display: flex;flex-direction: row;">
							<span style="padding-top: 2px;font-size: 14px;">级别:</span>
							<input v-model="baseFormData.level" style="border: none;padding-left: 34px;font-size: 16px;" />
						</view>
						<view style="display: flex;flex-direction: row;">
							<span style="padding-top: 2px;font-size: 14px;">时间:</span>
							<input v-model="baseFormData.time" style="border: none;padding-left: 34px;font-size: 16px;" />
						</view>
						<view style="display: flex;flex-direction: row;">
							<span style="padding-top: 2px;font-size: 14px;">摄像头:</span>
							<input v-model="baseFormData.camera" style="border: none;padding-left: 20px;font-size: 16px;" />
						</view>
						<view style="padding-bottom: 20px;">
							<view><span style="padding-top: 2px;font-size: 14px;">处理结果:</span></view>
							<view style="padding-top: 5px;zoom: 1.2;">
								<uni-easyinput class="input" type="textarea" v-model="baseFormData.handlecontent" placeholder="请输入告警事件处理过程及结果" ></uni-easyinput>
							</view>
						</view>
					</uni-forms>
				</view>
			</uni-card>
		</view>
		<view>
			<button style="font-size: 16px;width: 150px;box-shadow: 2px 2px 2px 2px #9cc4cf;
			background-color:white;color:#33c3b3"@click="commit">处理完成</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 基础表单数据
				baseFormData: {
					type:'消防告警',
					content: '停车场-西出现明火',
					level:'一级告警',
					time:'2023-04-25 12:45:20',
					camera:'停车场-西-01',
					handlecontent:''
				},
				
				
			}
		},
		
		
		methods: {
			
			submit(ref) {
				this.$refs[ref].validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
				}).catch(err => {
					console.log('err', err);
				})
			},
			videoErrorCallback: function(e) {
			    uni.showModal({
			        content: e.target.errMsg,
			        showCancel: false
			    })
			},
			commit(){
					uni.showToast({
						title:处理完毕,
						icon:'none'
					})
			}
		}
	}
</script>



