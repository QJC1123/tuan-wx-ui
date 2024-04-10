<template>
	<view class="container" style="background-color: #f5faf6;">
		<view style="padding-top: 10px;">
			<uni-card margin="0rpx" >
				<view style="height: 35px;padding: 0px;zoom: 1.1;">
					<uni-steps :options="list1" active-color="#33c3b3" :active="current" style="padding-top: 5px;" activeIcon="checkbox">
					</uni-steps>
				</view>
			</uni-card>
		</view>
		<view v-if="current==0" style="padding-top: 25px;background-color: #f5faff;">
			<uni-row style="background-color: #f5faff;">
					<uni-card margin="0">
						<view class="example" style="padding-left: 0px;padding-right: 0px;padding-top: 3px;padding-bottom: 10px;">
							<!-- 基础用法，不包含校验规则 -->
							<uni-forms ref="baseForm" :modelValue="baseFormData" class="form-x" >
								<view style="padding-bottom: 13px;">
									<view style="padding-bottom:3px;padding-left: 5px;"><span style="">申报人</span></view>
									<uni-row ><uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名"/></uni-row>
								</view>
								<view style="padding-bottom: 13px;">
									<view style="padding-bottom:3px;padding-left: 5px;"><span style="">联系方式</span></view>
									<uni-row ><uni-easyinput v-model="baseFormData.name" placeholder="请输入联系方式"/></uni-row>
								</view>
								<view style="padding-bottom: 13px;">
									<view style="padding-bottom:3px;padding-left: 5px;"><span style="">隐患类型</span></view>
									<uni-row ><uni-easyinput v-model="baseFormData.name" placeholder="请选择隐患类型"/></uni-row>
								</view>
								<view style="padding-bottom: 13px;">
									<view style="padding-bottom:3px;padding-left: 5px;"><span style="">所处位置</span></view>
									<uni-row ><uni-easyinput v-model="baseFormData.name" placeholder="请选择所处位置"/></uni-row>
								</view>		
							</uni-forms>
						</view>
					</uni-card>
					
				
			</uni-row>
			
			<view style="width:100%;position:fixed;background-color: #f5faff;padding-top:30px;">
				<uni-row style="background-color: #f5faff;">
					<uni-col :span="12" style="background-color: #f5faff;" >
						<button style="border-radius:0px;
						background-color:white;color:#33c3b3">上一步</button>
					</uni-col>
					<uni-col :span="12" style="background-color: #f5faff;" >
						<button @click="next" style="border-radius:0px;
						color: white;background: #33c3b3">下一步</button>
					</uni-col>
				</uni-row>
			</view>		
		</view>
		
		
		<view v-if="current==1" style="padding-top: 25px;background-color: #f5faff;">
			<uni-row style="background-color: #f5faff;">
					<uni-card margin="0">
						<view class="example" style="padding-left: 0px;padding-right: 0px;padding-top: 3px;padding-bottom: 10px;">
							<!-- 基础用法，不包含校验规则 -->
							<uni-forms ref="baseForm" :modelValue="baseFormData" class="form-x" >
								<view style="padding-bottom: 13px;">
									<view style="padding-bottom:3px;padding-left: 5px;"><span style="">隐患描述</span></view>
									<uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="请描述隐患详情" />
								</view>
								
								<view style="padding-bottom: 13px;">
									<view @click="ChooseImage">
										上传图片
									</view>
								</view>		
							</uni-forms>
						</view>
					</uni-card>
					
				
			</uni-row>
			
			<view style="width:100%;position:fixed;background-color: #f5faff;padding-top:30px;">
				<uni-row style="background-color: #f5faff;">
					<uni-col :span="12" style="background-color: #f5faff;" >
						<button @click="prev" style="border-radius:0px;
						background-color:white;color:#33c3b3">上一步</button>
					</uni-col>
					<uni-col :span="12" style="background-color: #f5faff;" >
						<button @click="next" style="border-radius:0px;
						color: white;background: #33c3b3">下一步</button>
					</uni-col>
				</uni-row>
			</view>		
		</view>
		
		
		
		<view v-if="current==2" style="padding-top: 30px;background-color: #f5faff;">
			<uni-row style="background-color: #f5faff;">
					<uni-card margin="0">
						<view class="example" style="padding-left: 0px;padding-right: 0px;padding-top: 10px;padding-bottom: 10px;">
							<!-- 基础用法，不包含校验规则 -->
							<uni-forms ref="baseForm" :modelValue="baseFormData">
								<uni-forms-item >
									<span>隐患描述</span>
								</uni-forms-item>
								<uni-forms-item >
									<uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="请描述隐患详情" />
								</uni-forms-item>
							</uni-forms>
						</view>
					</uni-card>
					
			</uni-row>
			
			<view style="width:100%;position:fixed;background-color: #f5faff;padding-top:30px;">
				<uni-row style="background-color: #f5faff;">
					<uni-col :span="12" style="background-color: #f5faff;" >
						<button @click="prev" style="border-radius:0px;
						background-color:white;color:#33c3b3">上一步</button>
					</uni-col>
					<uni-col :span="12" style="background-color: #f5faff;" >
						<button  style="border-radius:0px;
						color: white;background: #33c3b3">提交</button>
					</uni-col>
				</uni-row>
			</view>		
		</view>
		
		

		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				list1: [
						{title: '基本信息'},
						{title: '隐患描述'},
						{title: '上报提交'},
					],
				// 基础表单数据
				baseFormData: {
					name: '',
					age: '',
					introduction: '',
					level: 2,
					hobby: [5],
					// datetimesingle: 1627529992399
				},
				// 表单数据
				alignmentFormData: {
					name: '',
					age: '',
				},
				// 单选数据源
				
				levels: [{
					text: '严重',
					value: 1
				}, {
					text: '警告',
					value: 2
				}, {
					text: '提醒',
					value: 3
				}],
				// 多选数据源
				hobbys: [{
					text: '跑步',
					value: 0
				}, {
					text: '游泳',
					value: 1
				}, {
					text: '绘画',
					value: 2
				}, {
					text: '足球',
					value: 3
				}, {
					text: '篮球',
					value: 4
				}, {
					text: '其他',
					value: 5
				}],
				// // 分段器数据
				// current: 0,
				// items: ['左对齐', '顶部对齐'],
				// // 校验表单数据
				// valiFormData: {
				// 	name: '',
				// 	age: '',
				// 	introduction: '',
				// },
				// 校验规则
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}, {
							format: 'number',
							errorMessage: '年龄只能输入数字'
						}]
					}
				},
				// // 自定义表单数据
				// customFormData: {
				// 	name: '',
				// 	age: '',
				// 	hobby: []
				// },
				// // 自定义表单校验规则
				// customRules: {
				// 	name: {
				// 		rules: [{
				// 			required: true,
				// 			errorMessage: '姓名不能为空'
				// 		}]
				// 	},
				// 	age: {
				// 		rules: [{
				// 			required: true,
				// 			errorMessage: '年龄不能为空'
				// 		}]
				// 	},
				// 	hobby: {
				// 		rules: [{
				// 				format: 'array'
				// 			},
				// 			{
				// 				validateFunction: function(rule, value, data, callback) {
				// 					if (value.length < 2) {
				// 						callback('请至少勾选两个兴趣爱好')
				// 					}
				// 					return true
				// 				}
				// 			}
				// 		]
				// 	}

				// },
				dynamicFormData: {
					email: '',
					domains: {}
				},
				dynamicLists: [],
				dynamicRules: {
					email: {
						rules: [{
							required: true,
							errorMessage: '域名不能为空'
						}, {
							format: 'email',
							errorMessage: '域名格式错误'
						}]
					}
				}
			}
		},
		computed: {
			// 处理表单排列切换
			alignment() {
				if (this.current === 0) return 'left'
				if (this.current === 1) return 'top'
				return 'left'
			}
		},
		onLoad() {},
		onReady() {
			// 设置自定义表单校验规则，必须在节点渲染完毕后执行
			this.$refs.customForm.setRules(this.customRules)
		},
		methods: {
			onClickItem(e) {
				console.log(e);
				this.current = e.currentIndex
			},
			add() {
				this.dynamicLists.push({
					label: '域名',
					rules: [{
						'required': true,
						errorMessage: '域名项必填'
					}],
					id: Date.now()
				})
			},
			del(id) {
				let index = this.dynamicLists.findIndex(v => v.id === id)
				this.dynamicLists.splice(index, 1)
			},
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
			next() {
			        this.current++;
			      },
			prev() {
				this.current--;
			  },
			ChooseImage() {
					uni.chooseImage({
						count: 1, //可选择数量，默认9
						sizeType: ['compressed'], //只能上传压缩图
						sourceType: ['album','camera'], //从相册选择或从使用相机
						success: async (res) => {
							if(res.tempFiles[0].size > 10 * 1024 * 1000){  //上传图片大小限制
								uni.showToast({
									title: "照片大小不能10MB", 
									icon: "none"
								})
								return
							}
							let url = res.tempFilePaths[0];
							try{
								uni.showLoading({
									title:"上传中...",
									mask:true
								})
								let data = await this.$upLoadImg({
								   apiName:"uploadHouse",
								   filePath:res.tempFilePaths[0],
								   name:"file",
								})
								this.imgUrl = data.data.url;
							}catch(e){
								console.log(e);
							}finally{
								uni.hideLoading();
							}
						}
					}); 
				},
		}
	}
</script>

<style lang="scss" >

	.example {
		padding: 0px;
		background-color: #fff;
	}
	
	.form-x{
	
	  & .uni-form-item__label{
	    float: none;
	    word-break: break-word;
	  }
	}

	// .segmented-control {
	// 	margin-bottom: 15px;
	// }

	// .button-group {
	// 	margin-top: 15px;
	// 	display: flex;
	// 	justify-content: space-around;
	// }

	// .form-item {
	// 	display: flex;
	// 	align-items: center;
	// }

	// .button {
	// 	display: flex;
	// 	align-items: center;
	// 	height: 35px;
	// 	margin-left: 10px;
	// }
</style>

<style>
	/* /deep/ .uni-form-item__label {
	float: none; // 取消label左浮动
	word-break: break-word; // 支持单词截断换行
	} */
</style>

