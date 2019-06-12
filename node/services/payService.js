const resultMessage = require("../util/resultMessage");
const request = require("request");
var xml2js = require("xml2js");	//引入xml解析模块
const PayUtil = require("../util/PayUtil");
const config = require("../util/AppConfig");
const md5 = require("md5");
module.exports = {
	// 获取同一家商店的所有食物
	payOrder: async (req, res) => {
		try {
			let params = {
				appid: config.appid,	//自己的小程序appid
				mch_id: config.mch_id,	//自己的商户号
				nonce_str: PayUtil.getNonceStr(),	//随机字符串
				body: "贝沃思美食",// 商品描述
				out_trade_no: "jksfd323", // 用户订单号
				total_fee: 1, //商品价格 单位分
				spbill_create_ip: "192.168.5.255", // 发起访问ip
				//异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。
				notify_url: "https://www.kdsou.com/kdchange/service_bak/notify.php",
				trade_type: "JSAPI",// 默认 交易类型
				time: new Date().getTime(),	// 时间戳
				key: config.key, // 商户key
				openid: req.query.openid
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
							<mch_id>${params.mch_id}</mch_id>
							<nonce_str>${params.nonce_str}</nonce_str>
							<notify_url>${params.notify_url}</notify_url>
							<openid>${params.openid}</openid>
							<out_trade_no>${params.out_trade_no}</out_trade_no>
							<spbill_create_ip>${params.spbill_create_ip}</spbill_create_ip>
							<total_fee>${params.total_fee}</total_fee>
							<trade_type>${params.trade_type}</trade_type>
							<sign>${sign}</sign>
						</xml>`;
			console.log(formData, 57);
			//发起请求，获取微信支付的一些必要信息
			request({
				url: reqUrl,
				method: "POST",
				body: formData
			}, function(error, response, body) {
				if(error) {
					return res.send(resultMessage.success("支付失败"));
				} else if(!error && response.statusCode == 200) {
					xml2js.parseString(body,function(err,result){
						if(err) return res.send(resultMessage.success("支付失败"));
						let reData = result.xml;
						let responseData = {
							timeStamp: String(new Date().getTime()),
							nonceStr: reData.nonce_str[0],
							package: "prepay_id=" + reData.prepay_id[0],
						};
						let str = `appId=${config.appid}&nonceStr=${responseData.nonceStr}&package=${responseData.package}&signType=MD5&timeStamp=${responseData.timeStamp}&key=${config.key}`;
						responseData.paySign = md5(str).toUpperCase();
						return res.send(resultMessage.success(responseData));
					});
				}else{
					return res.send(resultMessage.success("支付失败"));
				}
			});
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.success("支付失败"));
		}
	}
};
