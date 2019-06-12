const md5 = require("md5");
module.exports = {
	getNonceStr: function() {
		let str = "";
		let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
		for(let i = 1; i <= 32; i++){
			let random = Math.floor(Math.random()*arr.length);
			str += arr[random];
		}
		return str;
	},
	createSign: function(obj) {
		//签名算法（把所有的非空的参数，按字典顺序组合起来+key,然后md5加密，再把加密结果都转成大写的即可）
		// appid=wx2769b76cc1aa3502
		// &body=微信支付，商品详细描述
		// &mch_id=1537649941
		// &nonce_str=U8WGF35ZWQ4GX57JYYLBDAWO9B272WYC
		// &notify_url=https://www.kdsou.com/kdchange/service_bak/notify.php
		// &openid=oah4447vOWQegN1z544JfDtqbZuY
		// &out_trade_no=1560347495576
		// &sign=F1669EEBA1B1E0C2A791C5627401FF96
		// &spbill_create_ip=192.168.5.255
		// &total_fee=1
		// &trade_type=JSAPI
		let stringA = "appid="+obj.appid
			+"&body="+obj.body
			+"&mch_id="+obj.mch_id
			+"&nonce_str="+obj.nonce_str
			+"&notify_url="+obj.notify_url
			+"&openid="+obj.openid
			+"&out_trade_no="+obj.out_trade_no
			+"&spbill_create_ip="+obj.spbill_create_ip
			+"&total_fee="+obj.total_fee
			+"&trade_type="+obj.trade_type;
		let stringSignTemp = stringA+"&key=" + obj.key;
		console.log("string = ", stringSignTemp);
		stringSignTemp = md5(stringSignTemp).toUpperCase();
		console.log("md5 = ", stringSignTemp);
		return stringSignTemp;
	}
};
