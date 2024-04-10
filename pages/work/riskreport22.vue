<template>
	<view style="padding-top: 10px;;">
		<uni-card margin="0rpx">
			<uni-steps :options="list1" active-color="#3cb9a6" :active="current" style="padding-top: 20px;" activeIcon="checkbox">
			</uni-steps>
		</uni-card><uni-row>
				<uni-card margin="0rpx">
					<uni-forms>
						<uni-forms-item label="姓名" required>
							<uni-easyinput placeholder="请输入姓名" />
						</uni-forms-item>
					</uni-forms>
				</uni-card>
			</uni-row>
		<view v-if="current==0">
			<uni-row>
				<uni-card margin="0rpx">
					<uni-forms>
						<uni-forms-item label="姓名" required>
							<uni-easyinput placeholder="请输入姓名" />
						</uni-forms-item>
					</uni-forms>
				</uni-card>
			</uni-row>
			
			<view style="width:100%;position:fixed;bottom:0;">
				<uni-row>
					<uni-col :span="12" >
						<button style="border-radius:0px;
						background-color:white;color:#33c3b3">上一步</button>
					</uni-col>
					<uni-col :span="12" >
						<button @click="next" style="border-radius:0px;
						color: white;background: #47d484">下一步</button>
					</uni-col>
				</uni-row>
			</view>
		</view>
		
		<view v-if="current==1">
			<uni-row>
				<uni-card margin="0rpx">
					
					
					
					</uni-forms>
				</uni-card>
			</uni-row>
			

			<view style="width:100%;position:fixed;bottom:0;">
				<uni-row>
					<uni-col :span="12" >
						<button @click="prev" style="border-radius:0px;
						background-color:white;color:#33c3b3">上一步</button>
					</uni-col>
					<uni-col :span="12" >
						<button @click="next" style="border-radius:0px;
						color: white;background: #47d484">下一步</button>
					</uni-col>
				</uni-row>
			</view>
		</view>
		
		<view v-if="current==2">
			<uni-row>
				<uni-card margin="0rpx">
					
				</uni-card>
			</uni-row>
			
			<view style="width:100%;position:fixed;bottom:0;">
				<uni-row>
					<uni-col :span="12" >
						<button @click="prev" style="border-radius:0px;
						background-color:white;color:#33c3b3">上一步</button>
					</uni-col>
					<uni-col :span="12" >
						<button style="border-radius:0px;
						color: white;background: #47d484">提交</button>
					</uni-col>
				</uni-row>
			</view>
		</view>
		
	</view>
</template>
<script>
	
export default {
	components: {},
	data() {
		return {
			current: 0,
			list1: [
					{title: '基本信息'},
					{title: '隐患描述'},
					{title: '上报提交'},
				],
		};
	},
	methods: {
		next() {
		        this.current++;
		      },
		prev() {
			this.current--;
		  },
	}
};
</script>

<style>
	// 默认样式
	.button {
		position:relative;
		display:block;
		margin-left:auto;
		margin-right:auto;
		padding-left:14px;
		padding-right:14px;
		box-sizing:border-box;
		font-size:18px;
		text-align:center;
		text-decoration:none;
		line-height:1;
		/* border-radius:5px; */
		-webkit-tap-highlight-color:transparent;
		overflow:hidden;
		color:#000000;
		background: linear-gradient(to bottom right, blue, pink);
		/* background-color:#46b7a5; */
		/* background: linear-gradient(left, #FFB9DA 0%, #FF98C7 50%, #ffffff 100%); */
		/* background: transparent; */
		/* background:linear-gradient(90deg,#fff 0%,#bbb 49%,#bbb 51%,#fff 100%); */
	}
	// 边框样式
	.button::after{
		  border: 0;
	}
	// 禁用时样式
	.button[disabled] {
		  background-color: #fff;
		  color: #666;
	}
	// 点击时样式
	.button-hover {
		color:rgba(0, 0, 0, 0.6);
		background-color:#fff;
	}

</style>