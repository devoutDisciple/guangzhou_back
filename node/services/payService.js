const resultMessage = require("../util/resultMessage");
const request = require("request");
var xml2js = require("xml2js");	//引入xml解析模块
const PayUtil = require("../util/PayUtil");
const config = require("../util/AppConfig");
module.exports = {
	// 获取同一家商店的所有食物
	payOrder: async (req, res) => {
		try {
			let query = req.query;
			console.log(query,"获取请求参数");

			let params = {
				time: new Date().getTime(),	// 时间戳
				nonce_str: PayUtil.getNonceStr(),	//随机字符串
				openid: "",
				total_fee: 1, //商品价格 单位分
				appid: config.appid,	//自己的小程序appid
				mch_id: config.mch_id,	//自己的商户号id
				spbill_create_ip: "127.0.0.1", // 发起访问ip
				trade_type: "JSAPI",// 默认
				out_trade_no: "jksfd323", // 用户订单号
				//// 异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。
				notify_url: "https://www.kdsou.com/kdchange/service_bak/notify.php",
			};

			let sign = PayUtil.createSign(Object.assign(
				{body: "微信支付，商品详细描述"},
				params
			));

			let reqUrl = "https://api.mch.weixin.qq.com/pay/unifiedorder";

			let formData = `<xml>
							<appid>${params.appid}</appid>
							<mch_id>${params.mch_id}</mch_id>
							<nonce_str>${params.nonce_str}</nonce_str>
							<sign>${sign}</sign>
							<body>微信支付，商品详细描述</body>
							<out_trade_no>${params.time}</out_trade_no>
							<total_fee>${params.total_fee}</total_fee>
							<spbill_create_ip>${params.spbill_create_ip}</spbill_create_ip>
							<notify_url>${params.notify_url}</notify_url>
							<trade_type>${params.trade_type}</trade_type>
							<openid>${params.openid}</openid>
						</xml>`;

			//console.log(formData,'xml格式')
			//发起请求，获取微信支付的一些必要信息
			request({
				url: reqUrl,
				method: "POST",
				json: true,
				headers: {
					"content-type": "application/json",
				},
				body: formData
			}, function(error, response, body) {
				if(error) {
					console.log(error);
				}
				if (!error && response.statusCode == 200) {
					console.log(body, "统一下单接口返回的数据"); // 请求成功的处理逻辑
					xml2js.parseString(body,function(error,result){
						console.log(JSON.stringify(result), "111");
						let reData = result.xml;

						let responseData = {
							timeStamp: new Date().getTime(),
							nonceStr: reData.nonce_str[0],
							package: reData.prepay_id[0],
							paySign: reData.sign[0]
						};
						res.send(resultMessage.success(JSON.stringify(responseData)));
					});
				}
			});


		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	}
};
