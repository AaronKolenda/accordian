$(document).on("ready", function(){


	$("#header1").click(function(evt){

		$("#full2").removeClass("full");
		$("#full3").removeClass("full");
		$("#full1").addClass("full");
		console.log("header1 was clicked");
		borderReset();

	});

	$("#header2").click(function(evt){
	
		$("#full1").removeClass("full");
		$("#full3").removeClass("full");
		$("#full2").addClass("full");
		
		console.log("header2 was clicked");
		borderReset();

	});

	$("#header3").click(function(evt){
	
		$("#full1").removeClass("full");
		$("#full2").removeClass("full");
		$("#full3").addClass("full");
		
		console.log("header3 was clicked");
		borderReset();

	});

	var $section1 = $("#full1");
	var $section2 = $("#full2");
	var $section3 = $("#full3");

	var $header1 = $("#header1");
	var $header2 = $("#header2");
	var $header3 = $("#header3");

	var borderReset = function() {

		$header1.css("border-top", "none");
		$header2.css("border-bottom", "none");
		$header3.css("border-bottom", "none");
		$header1.css("border-bottom", "1px solid black");
		$header2.css("border-top", "1px solid black");
		$header3.css("border-top", "1px solid black");

		

		if ($section1.hasClass("full") === true) {
			$header1.css("border-top", "none");
			$header2.css("border-top", "1px solid black");
			$header3.css("border-bottom", "none");
			$header3.css("border-top", "1px solid black");
		}

		if ($section2.hasClass("full") === true) {
			$header1.css("border-top", "none");
			$header1.css("border-bottom", "1px solid black");
			$header2.css("border-top", "none");
			$header2.css("border-bottom", "1px solid black");
			$header3.css("border-top", "1px solid black");
			$header3.css("border-bottom", "none");
		}

		if ($section3.hasClass("full") === true) {
			$header3.css("border-top", "1px solid black");
			$header3.css("border-bottom", "1px solid black");
			$header2.css("border-top", "none");
			$header2.css("border-top", "none");
		}

	}



});


