<template>
    <view class="map_wrap">
        <map id="mapSelected" style="width: 690rpx; height: 500px; margin-left: 30rpx;" :latitude="latitude" :longitude="longitude" :markers="covers" :controls="controls" :scale="18" @controltap="controltap" @tap="clickMap" 
        @regionchange="regionchange">
        </map>
        
		<view class="mform">
			<view class="item">
				<view class="t">当前地址：</view>
				<view class="m">{{address}}</view>
			</view>
			<view class="item">
				<view class="t">推荐地址：</view>
				<view class="m">{{address_info}}</view>
			</view>
		</view>
        
        <!-- 保存按钮 -->
		<view class="btnbox" style="padding-top: 40px;">
			<button style="font-size: 16px;width: 150px;box-shadow: 2px 2px 2px 2px #9cc4cf;
			background-color:white;color:#33c3b3"@click="saveAddress()">一键打卡</button>
		</view>
    </view>
</template>
 
<script>
export default {
	data() {
		return {
			title: 'map',
			latitude: 39.909,// 默认纬度
			longitude: 116.39742,// 默认经度(北京天安门)
			covers: [{
				id: 110, 
				latitude: 39.909,
				longitude: 116.39742,
				iconPath: '	https://hellouniapp.dcloud.net.cn/static/location.png',
				width: "20",
				height: "20"
			}],
			controls: [{ // 控件
				id: 99,
				position: { // 控件位置
					left: 160,
					top: 120
				},
				iconPath: 'https://hellouniapp.dcloud.net.cn/static/location.png' // 控件图标
			}],
			address_info :"",
			address_info_recomd:"",
			address :""
		}
	},
	onLoad(){
		this.isGetLocation();
	},
	methods: {
		isGetLocation(a = "scope.userLocation") { //检查当前是否已经授权访问scope属性
		    var _this = this;
		        uni.getSetting({
		            success(res) {
		                console.log(res)
		                if (!res.authSetting[a]) { //每次进入程序判断当前是否获得授权，如果没有就去获得授权，如果获得授权，就直接获取当前地理位置
		                    _this.getAuthorizeInfo()
		                } else {
		                    //方式一
		                    _this.getLocationInfo();
		                    // 方式二
		                    // _this.getLocation();
		                }
		            }
		        });
		},
		getAuthorizeInfo(a = "scope.userLocation") { // uniapp弹窗弹出获取授权（地理，个人微信信息等授权信息）弹窗
		    var _this = this;
		    uni.authorize({
		        scope: a,
		        success() { //允许授权
					//方式一
		            // _this.getLocationInfo();
					// 方式二
					_this.getLocation();
		        }
		    })
		},
		//点击地图时
		clickMap(e){
			console.log("点击地图时:"+e);
			this.latitude=e.detail.latitude;
			this.longitude = e.detail.longitude;
		},
		getLocationInfo () {
			//直接调用即可
		    uni.chooseLocation({
		        success: (res) => {
		            console.log(res)
					if(res.errMsg == "chooseLocation:ok"){
						this.address_info = res.name + res.address;
						this.latitude= res.latitude;
						this.longitude = res.longitude;
					}
		        }
		    })
		},
		//获取当前所在位置的经纬度
		getLocation(){
			uni.getLocation({
			    type: 'gcj02',
			    success: (res) => {
			        console.log(res)
			        this.latitude = res.latitude.toString()
			        this.longitude = res.longitude.toString()
			                        
			        // 获取地理位置详情信息
			        this.getLocationDetail()
			    }
			});
		},
		//根据经纬度获取详细的地址
		getLocationDetail () {
		    uni.request({
		        header: {
		            "Content-Type": "application/text"
		        },
		        url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + this.latitude + ',' + this.longitude +
		                        '&key=XOXBZ-MZWWD-CDX4H-PONXN-UA5PJ-D7FJN',
		        success:(re)=> {
		            //成功获取到经纬度
		            console.log(re)
		            if (re.statusCode == 200) {
		                this.address_info_recomd = re.data.result.formatted_addresses.recommend
		                this.address_info = re.data.result.address_reference.town.title + re.data.result.address_reference.street.title + re.data.result.address_reference.landmark_l2.title
		                this.address = re.data.result.address
		                            
		            } else {
		                uni.showToast({
		                    title: '获取地理位置失败，请重试',
		                    icon: "none"
		                })
		            }
		        }
		    });
		},
		// 在地图渲染更新完成时触发
		regionchange (e) {
			console.log(e)
			if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
				this.mapCtx = uni.createMapContext("mapSelected"); // 创建map的上下文对象, 从而操控map组件
				this.mapCtx.getCenterLocation({
					success: (res) => {
						console.log(res)
						this.latitude = res.latitude;
						this.longitude = res.longitude;
						this.getLocationDetail();
					}
				})
			}
		},
	}
}
</script>
<style>
 
</style>