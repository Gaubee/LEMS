console.log("开启数据库……");
/*
数据库名称
数据库版本号
数据库说明
数据库大小
*/
var db = openDatabase('LEMS', '', 'My Database', 2 * 1024 * 1024, function() {
	console.log("LEMS数据库不存在，创建成功！");
});
console.log("LEMS数据库开启成功！");

db.transaction(function (tx) {  
   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
});