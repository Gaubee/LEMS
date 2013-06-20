
//---------------------------------------------
avalon.ready(function() {
	avalon.Router.extend({
	    routes:{
		    '': 'index', // 当URL Hash在根目录时执行index方法：url# 
		    'shebeichaxun': 'shebeichaxun', // 当URL Hash在list节点时执行getList方法：url#list 
		    'baofei': 'baofei', // 当URL Hash在detail节点时执行query方法，并将detail后的数据作为参数传递给query方法：url#list/1001 
		    'baoxiu': 'baoxiu', // 当URL Hash在detail节点时执行query方法，并将detail后的数据作为参数传递给query方法：url#list/1001 
		    'changjia': 'changjia', // 当URL Hash在detail节点时执行query方法，并将detail后的数据作为参数传递给query方法：url#list/1001 
		    '*error': 'shebeichaxun', // 当URL Hash不匹配以上规则时, 执行error方法 
		},
	    shebeichaxun:function(){
	    	console.log("shebeichaxun");

	    	$(".datatable").addClass("hid");
	    	var shebeichaxun = $('#shebeichaxun');
	    	shebeichaxun.removeClass("hid");

		    if (!shebeichaxun.data("dataTable")) {
				shebeichaxun.html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="shebeichaxunDataTable"></table>');
				$('#shebeichaxunDataTable').dataTable(DATA.shebeichaxun);
				shebeichaxun.data("dataTable",true);
			}
	    },
	    baofei:function(){
	    	console.log("baofei");

	    	$(".datatable").addClass("hid");
	    	var baofei = $('#baofei');
	    	baofei.removeClass("hid");

		    if (!baofei.data("dataTable")) {
				baofei.html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="baofeiDataTable"></table>');
				$('#baofeiDataTable').dataTable(DATA.baofei);
				baofei.data("dataTable",true);
			}
	    },
	    baoxiu:function(){
	    	console.log("baoxiu");

	    	$(".datatable").addClass("hid");
	    	var baoxiu = $('#baoxiu');
	    	baoxiu.removeClass("hid");

		    if (!baoxiu.data("dataTable")) {
				baoxiu.html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="baoxiuDataTable"></table>');
				$('#baoxiuDataTable').dataTable(DATA.baoxiu);
				baoxiu.data("dataTable",true);
			}
	    },
	    changjia:function(){
	    	console.log("changjia");

	    	$(".datatable").addClass("hid");
	    	var changjia = $('#changjia');
	    	changjia.removeClass("hid");

		    if (!changjia.data("dataTable")) {
				changjia.html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="changjiaDataTable"></table>');
				$('#changjiaDataTable').dataTable(DATA.changjia);
				changjia.data("dataTable",true);
			}
	    },
	    index:function(){
	    	$(".datatable").addClass("hid").first().removeClass("hid").html("<center><h2>请选择所要搜索的选项</h2></center>");
	    	console.log("error");
	    }
	});
	avalon.history.start(true);
    avalon.scan();


    //jQuery
    $("#searchCondition").on("change",function(){
    	location.hash = $(this).val();
    })
});

// $(document).ready(function() {
// 	$('#shebeichaxun').html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="dataTable"></table>');
// 	$('#dataTable').dataTable(DATA.shebeichaxun);
// });