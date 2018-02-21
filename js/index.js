$(document).ready(function() {
	$.ajax({
		url: 'json/primos.php',
		type: 'POST'
	})
	.done(function(data) {
			//console.log("success");
			//$('#imprimir').html(data);
		Arrayprimos = jQuery.parseJSON(data);
		C_ROMERO(Arrayprimos);
	})
	
});

C_ROMERO = function(Arrayprimos){


		for (var i = 0; i <= 9589; i++) {
			$(".loader").fadeIn("slow"); 
			numerooriginal = Arrayprimos[i];
			numero = Math.pow(numerooriginal, 10)
				if (numero % 2 == 0) {
							log = $('#imprimir').html();
							$('#imprimir').html(log+numerooriginal+'-^- '+numero+' ES PAR '+'<br>');

				}else{
							log = $('#imprimir').html();
							$('#imprimir').html(log+numerooriginal+'-^-'+numero+' ES IMPAR '+'<br>');
				}

		};

		$(".loader").fadeOut("slow"); 
		   
}