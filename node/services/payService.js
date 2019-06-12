const resultMessage = require("../util/resultMessage");
const request = require("request");
// var xml2js = require("xml2js");	//引入xml解析模块
const PayUtil = require("../util/PayUtil");
const config = require("../util/AppConfig");
module.exports = {
	// 获取同一家商店的所有食物
	payOrder: async (req, res) => {
		try {
			let query = req.query;
			console.log(query,"获取请求参数");

			let params = {
				appid: config.appid,	//自己的小程序appid
				mch_id: config.mch_id,	//自己的商户号
				device_info: "HDKSK6783294",//设备号
				nonce_str: PayUtil.getNonceStr(),	//随机字符串
				body: "贝沃思美食",// 商品描述
				out_trade_no: "jksfd323", // 用户订单号
				total_fee: 1, //商品价格 单位分
				spbill_create_ip: "192.168.5.255", // 发起访问ip
				//异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。
				notify_url: "https://www.kdsou.com/kdchange/service_bak/notify.php",
				trade_type: "JSAPI",// 默认 交易类型
				time: new Date().getTime(),	// 时间戳
			};

			// 签名算法
			let sign = PayUtil.createSign(Object.assign(
				{body: "微信支付，商品详细描述"},
				params
			));

			let reqUrl = "https://api.mch.weixin.qq.com/pay/unifiedorder";

			let formData = `<xml>
							<appid>${params.appid}</appid>
							<body>${params.body}</body>
							<device_info>${params.device_info}</device_info>
							<mch_id>${params.mch_id}</mch_id>
							<nonce_str>${params.nonce_str}</nonce_str>
							<notify_url>${params.notify_url}</notify_url>
							<out_trade_no>${params.time}</out_trade_no>
							<spbill_create_ip>${params.spbill_create_ip}</spbill_create_ip>
							<total_fee>${params.total_fee}</total_fee>
							<trade_type>${params.trade_type}</trade_type>
							<sign>${sign}</sign>
						</xml>`;
			console.log(formData);
			// stringA =  appid=wx2769b76cc1aa3502&body=贝沃思美食&mch_id=1537649941&nonce_str=QH8OO4HVJ0J179D8GAD1MZWT0MGC06SO&notify_url=https://www.kdsou.com/kdchange/service_bak/notify.php&out_trade_no=jksfd323&spbill_create_ip=192.168.5.255&total_fee=1&trade_type=JSAPI
			// stringAll =  appid=wx2769b76cc1aa3502&body=贝沃思美食&mch_id=1537649941&nonce_str=QH8OO4HVJ0J179D8GAD1MZWT0MGC06SO&notify_url=https://www.kdsou.com/kdchange/service_bak/notify.php&out_trade_no=jksfd323&spbill_create_ip=192.168.5.255&total_fee=1&trade_type=JSAPI&key=2890178+w
			// <xml>
			// 	<appid>wx2769b76cc1aa3502</appid>
			// 	<body>微信支付，商品详细描述</body>
			// 	<mch_id>1537649941</mch_id>
			// 	<nonce_str>U8WGF35ZWQ4GX57JYYLBDAWO9B272WYC</nonce_str>
			// 	<notify_url>https://www.kdsou.com/kdchange/service_bak/notify.php</notify_url>
			// 	<out_trade_no>1560347495576</out_trade_no>
			// 	<sign>F1669EEBA1B1E0C2A791C5627401FF96</sign>
			// 	<spbill_create_ip>192.168.5.255</spbill_create_ip>
			// 	<total_fee>1</total_fee>
			// 	<trade_type>JSAPI</trade_type>
			// </xml>;

			//console.log(formData,'xml格式')
			//发起请求，获取微信支付的一些必要信息
			request({
				url: reqUrl,
				method: "POST",
				// json: true,
				// headers: {
				// 	"content-type": "application/json",
				// },
				body: formData
			}, function(error, response, body) {
				console.log(error, "error");
				// console.log(response, "response");
				console.log(body, "body"); // 请求成功的处理逻辑
				res.send(resultMessage.success(response));
				// if(error) {
				// 	console.log(error);
				// }
				// if (!error && response.statusCode == 200) {
				// console.log(response, 111);
				// console.log(body, "统一下单接口返回的数据"); // 请求成功的处理逻辑
				// res.send(resultMessage.success(JSON.stringify(body)));
				// xml2js.parseString(body,function(error,result){
				// console.log(JSON.stringify(result));
				// let reData = result.xml;

				// let responseData = {
				// 	timeStamp: new Date().getTime(),
				// 	nonceStr: reData.nonce_str[0],
				// 	package: reData.prepay_id[0],
				// 	paySign: reData.sign[0]
				// };

				// });
				// }
			});


		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	}
};
