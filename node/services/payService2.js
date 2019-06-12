const resultMessage = require("../util/resultMessage");
const request = require("request");
// var xml2js = require("xml2js");	//引入xml解析模块
const wxpay = require("../util/PayUtil2");
const config = require("../util/AppConfig");
// var xmlreader = require("xmlreader");

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
				nonce_str: wxpay.createNonceStr(),	//随机字符串
				body: "贝沃思美食",// 商品描述
				out_trade_no: "jksfd323", // 用户订单号
				total_fee: 1, //商品价格 单位分
				spbill_create_ip: "192.168.5.255", // 发起访问ip
				//异步接收微信支付结果通知的回调地址，通知url必须为外网可访问的url，不能携带参数。
				notify_url: "https://www.kdsou.com/kdchange/service_bak/notify.php",
				trade_type: "JSAPI",// 默认 交易类型
				timestamp: wxpay.createTimeStamp(),	// 时间戳
				mchkey: "NR43QVS1DRGYNZWTSQ6WMFY2MXY6MHA5", // 商家key
			};

			let sign = wxpay.paysignjsapifinal(
				params.appid,
				params.body,
				params.mch_id,
				params.nonce_str,
				params.notify_url,
				params.out_trade_no,
				params.spbill_create_ip,
				params.total_fee,
				params.trade_type,
				params.mchkey
			);
			console.log("sign==",sign);

			let formData  = "<xml>";
			formData  += "<appid>"+params.appid+"</appid>";  //appid
			formData  += "<body>"+params.body+"</body>";
			formData  += "<mch_id>"+params.mch_id+"</mch_id>";  //商户号
			formData  += "<nonce_str>"+params.nonce_str+"</nonce_str>"; //随机字符串，不长于32位。
			formData  += "<notify_url>"+params.notify_url+"</notify_url>";
			formData  += "<out_trade_no>"+params.out_trade_no+"</out_trade_no>";
			formData  += "<spbill_create_ip>"+params.spbill_create_ip+"</spbill_create_ip>";
			formData  += "<total_fee>"+params.total_fee+"</total_fee>";
			formData  += "<trade_type>"+params.trade_type+"</trade_type>";
			formData  += "<sign>"+sign+"</sign>";
			formData  += "</xml>";
			console.log(formData);
			let reqUrl = "https://api.mch.weixin.qq.com/pay/unifiedorder";

			//console.log(formData,'xml格式')
			//发起请求，获取微信支付的一些必要信息
			request({
				url: reqUrl,
				method: "POST",
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
