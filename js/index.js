$(document).ready(function() {
	$(".loader").fadeOut("slow");

    $("#calcular").click( function()
           {

       	$(".loader").fadeIn("slow"); 
       		setTimeout('C_ROMERO01()',500);
       		
       		
           }
     );
		
});

C_ROMERO01 = function(){

	  		$.ajax({
				url: 'json/primos.php',
				type: 'POST'
			})
			.done(function(data) {
					//console.log("success");
					//$('#imprimir').html(data);
				Arrayprimos = jQuery.parseJSON(data);
				setTimeout('C_ROMERO02(Arrayprimos)',500);
			})
		   
}

C_ROMERO02 = function(Arrayprimos){

		//9589
		for (var i = 0; i <= 9589; i++) {
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