// var dataSet = localStorage.setItem;
// var dataGet = localStorage.getItem;
var DATA = localStorage.getItem("LEMS");
if (!DATA) {
	console.log("Init data");
	var DATA = {
		shebeichaxun: {
			"aaData": [],
			"aoColumns": [{
					"sTitle": "设备名称"
				}, {
					"sTitle": "编号"
				}, {
					"sTitle": "类型"
				}, {
					"sTitle": "型号",
					"sClass": "center"
				}, {
					"sTitle": "规格",
					"sClass": "center"
				}, {
					"sTitle": "市场单价",
					"sClass": "center",
					"fnRender": function(obj) {
						var sReturn = obj.aData[obj.iDataColumn];
						if (sReturn == "A") {
							sReturn = "<b>A</b>";
						}
						return sReturn;
					}
				}, {
					"sTitle": "设备状态",
					"sClass": "center"
				}, {
					"sTitle": "数量",
					"sClass": "center"
				}//,
				// {
				// 	"sTitle": "录入状态",
				// 	"sClass": "center"
				// }

			]
		},
		baofei: {
			"aaData": [],
			"aoColumns": [ {
					"sTitle": "编号"
				}, {
					"sTitle": "单件设备编号"
				}, {
					"sTitle": "责任人"
				}, {
					"sTitle": "报废原因"
				}, {
					"sTitle": "报废时间"
				}
			]
		},
		baoxiu: {
			"aaData": [],
			"aoColumns": [ {
					"sTitle": "编号"
				}, {
					"sTitle": "单件设备编号"
				}, {
					"sTitle": "维修厂家"
				}, {
					"sTitle": "维修费用"
				}, {
					"sTitle": "责任人"
				}, {
					"sTitle": "报废时间"
				}
			]
		},
		changjia: {
			"aaData": [],
			"aoColumns": [ {
					"sTitle": "编号"
				}, {
					"sTitle": "厂家名称"
				}, {
					"sTitle": "厂家信息"
				}, {
					"sTitle": "联系方式"
				}, {
					"sTitle": "厂家介绍"
				}
			]
		}
	};
	(function(){
		var dataLen = 200;
		(function() {//shebeichaxun
			var names = ["主机", "交换机", "路由器", "鼠标", "显示器"];
			var brand = ["联想 ", "华硕 ", "戴尔 ", "苹果 ", "IBM ", "宏基 "];
			var types = ["A-12", "B-23", "C-14", "D-52", "E-32", "F-13", "G-17", "H-12", "A-18", "L-19", "Q-92", "Z-152", "X-192", "C-05", "M-82"];
			var standard = ["大", "中", "小", "中大"];
			var markePrices = [60, 100, 500, 1000, 2000];
			var status = ["报修", "正常", "报废", "申请中"];
			var numbers = [0, 1, 5, 10, 12, 16, 20];

			var data = DATA.shebeichaxun.aaData;
			for (var i = 0; i < dataLen; i += 1) {
				data[i] = [];
				data[i][0] = brand[i % brand.length] + names[i % names.length];
				data[i][1] = i;
				data[i][2] = names[i % names.length];
				data[i][3] = types[i % types.length];
				data[i][4] = standard[i % standard.length];
				data[i][5] = markePrices[i % markePrices.length];
				data[i][6] = status[i % status.length];
				data[i][7] = numbers[i % numbers.length];
			}
		}());

		(function() {//baofei
			var personLiable = ["Mr. XuGeer","Mrs. JinMei","Mr. Zhou","Mrs. Jane"];
			var reason = ["蓄意破坏","设备老化","设备过时","自然原因"];
			var time = ["2011-11-23","2012-5-27","2009-6-2","2008-9-16","2011-3-18","2013-1-2",];

			var shebeiData = DATA.shebeichaxun.aaData;
			var data = DATA.baofei.aaData;
			for (var i = 0,j=0; i < dataLen; i += 1) {
				var temp = shebeiData[i]
				if(temp[6]=="报废"){
					data[j] = [];
					data[j][0] = j;
					data[j][1] = temp[1]+"("+temp[0]+temp[3]+")";
					data[j][2] = personLiable[i%personLiable.length];
					data[j][3] = reason[i%reason.length];
					data[j][4] = time[i%time.length];
					j+=1;
				}
			}
		}());

		(function() {//baoxiu
			var personLiable = ["Mr. XuGeer","Mrs. JinMei","Mr. Zhou","Mrs. Jane"];
			var time = ["2011-11-23","2012-5-27","2009-6-2","2008-9-16","2011-3-18","2013-1-2",];

			var shebeiData = DATA.shebeichaxun.aaData;
			var data = DATA.baoxiu.aaData;
			for (var i = 0,j=0; i < dataLen; i += 1) {
				var temp = shebeiData[i]
				if(temp[6]=="报修"){
					data[j] = [];
					data[j][0] = j;
					data[j][1] = temp[1]+"("+temp[0]+temp[3]+")";
					data[j][2] = temp[0].split(" ")[0];
					data[j][3] = temp[5]*0.05;
					data[j][4] = personLiable[i%personLiable.length];
					data[j][5] = time[i%time.length];
					j+=1;
				}
			}
		}());

		(function() {//changjia
			var brand = ["联想 ", "华硕 ", "戴尔 ", "苹果 ", "IBM ", "宏基 "];

			var data = DATA.changjia.aaData;
			for (var i = 0; i < brand.length; i += 1) {
				data[i] = [];
				data[i][0] = i;
				data[i][1] = brand[i % brand.length]
				data[i][2] = "（略）";
				data[i][3] = "（暂无）";
				data[i][4] = "（略）";
			}
		}());
		
	}());
	localStorage.setItem("LEMS",JSON.stringify(DATA));
}else{
	console.log("parse data");
	DATA = JSON.parse(DATA);
}