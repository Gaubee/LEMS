(function (argument) {
	var baseData = DATA.shebeichaxun.aaData;
	var baseLen = baseData.length;

	(function(){//info
		var info = $("#info");
		var band = [];
		var type = [];
		var xinghao = [];
		var guige = [];
		for(var i =0,item; item = baseData[i];i+=1){
			/*var val = item[0].split(" ")[0];
			if(!band[val]){
				band.push(val);
				band[val] = true;
			}*/
			var val = item[2];
			if(!type[val]){
				type.push(val);
				type[val] = true;
			}
			var val = item[3];
			if(!xinghao[val]){
				xinghao.push(val);
				xinghao[val] = true;
			}
			var val = item[4];
			if(!guige[val]){
				guige.push(val);
				guige[val] = true;
			}
		}
		//console.log(html);
		//info.html("<option>"+html.split("|").join("<\/option><option>")+"<\/option>");
		//info.val(html.split("|").join(","));
		var options = [];
		(function(){/*
			for(var i=0,item;item = band[i];i+=1){
				options.push({
					type:"商家",
					value:item,
				});
			}*/
			for(var i=0,item;item = type[i];i+=1){
				options.push({
					type:"类型",
					value:item,
				});
			}
			for(var i=0,item;item = xinghao[i];i+=1){
				options.push({
					type:"型号",
					value:item,
				});
			}
			for(var i=0,item;item = guige[i];i+=1){
				options.push({
					type:"规格",
					value:item,
				});
			}
		}());

		$('#info').selectize({
		    theme: 'contacts',
		    persist: false,
		    maxItems: null,
		    valueField: 'value',
		    labelField: 'type',
		    searchField: ['value', 'type'],
		    options: options,
		    render: {
		        item: function(item) {
		            return '<div>' +
		                (item.type ? '<span class="select_type">' + item.type + '：</span>' : '') +
		                (item.value ? '<span class="select_value">' + item.value + '</span>' : '') +
		            '</div>';
		        },
		        option: function(item) {
		            var label = item.type || item.value;
		            var caption = item.type ? item.value : null;
		            return '<div>' +
		                '<span class="label" style="float:left;">' + label + '</span>' +
		                (caption ? '<span class="caption" style="float:right;">' + caption + '</span>' : '') +
		            '</div>';
		        }
		    }/**/,
		    create: function(input) {
		    	var type = input.split(" ")[0];
		    	if ("类型|型号|规格".indexOf(type)!=-1) {
		            return {
		                type : "新增",
		                value: input.split(" ")[1]
		            };
		        }else{
		        	alert("类型不匹配，格式为：“类型”“空格”“名称”");
		        	return false;
		        }
		    }
		});
	}());

	(function(){//fac
		var fac = $("#fac");
		var band = [];
		for(var i =0,item; item = baseData[i];i+=1){
			var val = item[0].split(" ")[0];
			if(!band[val]){
				band.push(val);
				band[val] = true;
			}
		}
		//fac.html("<option>"+band.join("</option><option>")+"</option>");
		fac.selectize({
			options:band,
			create: true
		});
	}());

	(function(){//price
		var price = $("#price");
		
	}());

	(function(){//peo

	}());

	(function(){//time

	}());

	(function(){//num

	}());


}());

$(function(){
	//$(".selectize").selectize();
})