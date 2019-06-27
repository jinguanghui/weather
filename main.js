$(function(){
	getDate();
	$("#btn").click(function(){
		var param = $("#city").val();
		getDate(param);
	})
	function getDate(param){
		var param = param ? param : "广州";
		$.ajax({
			type:"get",
			url:"https://api.jisuapi.com/weather/query",
			data:{appkey:'5eb7069870a4561f',city:param},
			dataType:'jsonp', //通过jsonp跨域访问
			jsonp:'callback',//请求的回调函数名称自定义的
				success:function(data){
					console.log(data);
					var html = template("tem",data);
					$("#ullist").html(html);
				}
			});
		};
})