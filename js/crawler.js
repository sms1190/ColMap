$(function() {
	$("#data_button")
			.click(
					function() {
						$("#main")
								.html("");
						var d = "";
						d = d + "seeds=" + $("#seeds").val();
						d = d + "&filters=" + $("#filters").val();
						d = d + "&service=" + $("#service").val();
						console.log(d);
						$
								.ajax({
									type : "POST",
									url : "http://localhost:8080/webcrawler/restful-services/crawler/startcrawling",
									data : d,
									contentType : 'application/x-www-form-urlencoded',
									success : function(result) {
										console.log(result);
//										displayProducts(result);
									},
									async : false
								});
					});


});