
$(document).ready(function() {


var regVr22 = "<div><img style='margin-bottom:-4px;' src='../load.gif' alt='Отправка...' width='16' height='16'><span style='font: 11px Verdana; color:#333; margin-left:6px;'>Сообщение обрабатывается...</span></div><br />";

$("#send").click(function(){
		$("#loadBar").html(regVr22).show();
		var posName = $("#posName").val();
		var posEmail = $("#posEmail").val();
		var posText = $("#posText").val();
		var laba_stp_age = $("#laba_stp_age").val();
		$.ajax({
			type: "POST",
			url: "../send.php",
			data: {"posName": posName, "posEmail": posEmail, "posText": posText, "laba_stp_age": laba_stp_age},
			cache: false,
			success: function(response){
		var messageResp = "<p style='font-family:Verdana; font-size:11px; background-color:#fff;'>Спасибо, <strong>";
		var resultStat = "!</strong> Ваше заказ принят!</p>";
		var oll = (messageResp + posName + resultStat);
				if(response == 1){
				$("#loadBar").html(oll).fadeIn(3000);
				$("#posName").val("");
				$("#posEmail").val("");
				$("#posText").val("");
				$("laba_stp_age").val("");
				} else {
		$("#loadBar").html(response).fadeIn(3000); }
										}
		});
		return false;
});


});