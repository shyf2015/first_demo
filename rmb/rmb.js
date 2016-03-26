var _0="0000000000000000";
var _d="零壹贰叁肆伍陆柒捌玖".split("");
var _c="仟,佰,拾,".split(",");
var _e="萬***亿***萬***圆".split("");

var rmb=function(n){
	var s=(""+n).split(".");
	var a=s[0];
	var b=s[1] || "";
	var a=_0.substring(a.length)+a;
	var inpart=a.replace(/\d{4}/g,function(macth4,index4){
		var unit4=macth4.replace(/\d/g,function(macth,index){
			_macth=Number(macth);
			return _d[_macth]+(_macth ? _c[index] : "");
		});
		unit4=unit4.replace(/(.*?)[零]+$/,"$1").replace(/[零]+/,"零");
		return unit4+_e[index4];
	});
	inpart=inpart.replace(/亿萬/,"亿").replace( /^[^壹贰叁肆伍陆柒捌玖]+(.*?)$/, "$1");
	return inpart+xiaoshu(b);
}
function xiaoshu(n){
	switch(n.length){
		case 0:return "整";
		case 1:return n.charAt(0)+"角";
		case 2:return n.charAt(0)+"角"+n.charAt(1)+"分";
	}
}