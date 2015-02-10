$(document).on("ready", function(){


	$("#header1").click(function(evt){

		$("#full2").removeClass("full");
		$("#full3").removeClass("full");
		$("#full1").addClass("full");
		console.log("header1 was clicked");

	});

	$("#header2").click(function(evt){
	
		$("#full1").removeClass("full");
		$("#full3").removeClass("full");
		$("#full2").addClass("full");
		
		console.log("header2 was clicked");

	});

	$("#header3").click(function(evt){
	
		$("#full1").removeClass("full");
		$("#full2").removeClass("full");
		$("#full3").removeClass("full");
		
		console.log("header3 was clicked");

	});

});


