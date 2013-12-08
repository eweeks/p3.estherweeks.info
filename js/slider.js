/*-------------------------------------------------------------------------------------------------
On load - clears inputs, resets
-------------------------------------------------------------------------------------------------*/
		$(document).ready(function(){
			$('input[type=checkbox]').attr('checked',false);
			$('input:radio[name="option1"][value="full"]').prop('checked', true);
			$('#selectFilter').hide();
			$('#isonumber option:eq(2)').prop('selected', true);
			$("#iso").val($( "#isonumber option:selected").text());
			$("#ev").val( $('#slider').slider('value'));
			lastStop=0;
			calculate();

		});
		//Variables used through out 
		var lastStop;
		var start;
		var fullStops= ["64000", "32000","16000","8000", "4000","2000","1000","500","250","125",
		"60","30","15", "8", "4", "2", '1\"', '2\"', '4\"', '8\"', '15\"', '30\"' ];
		var halfStops=["12000","8000","6000","4000", "3000", "2000", "1500", "1000", "750", "500", "350", "250", "180",
		"125", "90", "60", "45", "30", "20", "15", "10", "8", "6", "4", "3", "2", "1.5", '1\"', '1.5\"',
		'2\"', '3\"', '4\"', '6\"', '8\"', '10\"'];
		var thirdStops=["2000", "1600", "1250", "1000", "800", "640", "500",
		"400", "320", "250", "200", "160", "125", "100", "80", "60", "50", "40", "30", "25", "20", "15", "13",
		"10", "8", "6", "5", "4", "3", "2.5", "2", "1.6", "1.3", '1\"', '1.3\"', '1.6\"', '2\"'];

	
/*-------------------------------------------------------------------------------------------------
Slider - using jQuery UI
-------------------------------------------------------------------------------------------------*/
		$( "#slider" ).slider({
			//variables from jQuery UI for slider
			value:15,
			min: 3,
			max: 16,
			step: 1,
			//This insures that when the slider is changed, runs calculate function to update shutter speed
			change: function (event, ui) {
				$("#ev").val( $('#slider').slider('value'));
				calculate();
			},
			
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.value );
				if(ui.value==3){
					$('#description').html("Streetlights, Fireworks");	
				}else if(ui.value==4){
					$('#description').html("Floodlit buildings, Bright Streetlights");
				}else if(ui.value==5){
					$('#description').html("Average home night interior");
				}else if(ui.value==6){
					$('#description').html("Bright night interior, shady day interior");
				}else if(ui.value==7){
					$('#description').html("Indoor sports, stage shows");
				}else if(ui.value==8){
					$('#description').html("Floodlit stadium, bright day interior");
				}else if(ui.value==9){
					$('#description').html("Neon lights, spot-lit subjects");
				}else if(ui.value==10){
					$('#description').html("Immediately after sunset");
				}else if(ui.value==11){
					$('#description').html("Open shade, sunsets");
				}else if(ui.value==12){
					$('#description').html("Heavily overcast day");
				}else if(ui.value==13){
					$('#description').html("Bright cloudy day, no shadows");
				}else if(ui.value==14){
					$('#description').html("Hazy sunshine, soft shadows");
				}else if(ui.value==15){
					$('#description').html("Bright sunny day, hard shadows");
				}else{
					$('#description').html("Bright sun on sand or snow");
				}
				calculate();
			}
			
		}); //end slider
		$( "#amount" ).val( $( "#slider" ).slider( "value" ) ); //Displays slider value next to heading

/*-------------------------------------------------------------------------------------------------
Filter
-------------------------------------------------------------------------------------------------*/
		$('#checkFilter').click(function() {
			if($('#checkFilter').is(':checked')){
				$('#selectFilter').show();
				var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;
				stop();
				$("#filter").change(function(){
					stop();
				});
			}else{
				$('#selectFilter').hide();
				stop();
			}
		});


/*-------------------------------------------------------------------------------------------------
Calculate (shutter speed)
-------------------------------------------------------------------------------------------------*/
		function calculate(){
			var e = $('#slider').slider('value');
			var iso3 = $( "#isonumber").val();
			//formula to calculate the shutter speed
			var c = (15-e-0.32195);
			var newStart=lastStop;
			start = (iso3/(Math.pow(2, c)) );
			var point;
			
			console.log("starting point is "+start);
			if(start<1){
				start=Math.round(1/start);
				check();
				start=start+'\"';
				console.log("starting point lower is "+start);
			}else{
				//rounds off calculation
				start = Math.round(start);
				check();
			}
			console.log("starting point is "+start);
			
			
			/*
			//takes starting point calculation, and converts it to the scale used on most cameras
			if(start>=15 && start<30){
				start=15;
				console.log("starting point is "+start);
			}else if(start>=30 && start<60){
				start=30;
				console.log("starting point is "+start);
			}else if(start>=60 && start<125){
				start=60;
				console.log("starting point is "+start);
			}else if(start>=125 && start<250){
				start=125;
				console.log("starting point is "+start);
			}*/
			
			//takes starting point from calculation, and finds where it is in correct array
			if($('#oneHalf').is(':checked')){
				point= jQuery.inArray(""+start+"", halfStops);
				//gets starting value and sets starting point to this value - starting point is always
				//the shutter speed that corresponds with 16
				$('#ss td').eq(9).html(halfStops[point]);
			}else if($('#oneThird').is(':checked')){
				point= jQuery.inArray(""+start+"", thirdStops);
				//gets starting value and sets starting point to this value - starting point is always
				//the shutter speed that corresponds with 16
				$('#ss td').eq(9).html(thirdStops[point]);
			}else{
				point= jQuery.inArray(""+start+"", fullStops); //searches array for starting value
				//gets starting value and sets starting point to this value - starting point is always
				//the shutter speed that corresponds with 16
				$('#ss td').eq(9).html(fullStops[point]);
			}
			console.log("Point is "+ point);

			
			//this sets the values above the starting point, using array with set values
			var up=point+1;	
			for(var i=10; i<=13; i=i+1){
				if($('#oneHalf').is(':checked')){
					if((up)>=halfStops.length){
						$('#ss td').eq(i).html("-");
					}else{
						$('#ss td').eq(i).html(halfStops[up]);
					}
				}else if($('#oneThird').is(':checked')){
					if((up)>=thirdStops.length){
						$('#ss td').eq(i).html("-");
					}else{
						$('#ss td').eq(i).html(thirdStops[up]);
					}
				}else{
					if((up)>=fullStops.length){
						$('#ss td').eq(i).html("-");
						console.log("Full Stop length is reached  "+fullStops.length);
					}else{
						$('#ss td').eq(i).html(fullStops[up]);
					}
				}
				
				up=up+1;
			}
			
			//this sets the values below the starting point, using the array with set values
			var down=point-1;
			//if down is already <0, it's off the chart, fill in with blanks
			if(down<0){
				for(var i=0; i<=13; i=i+1){
					$('#ss td').eq(i).html("-");
				}
			}else{
				for(var i=8; i>=0; i=i-1){
					if((down)<0){
						$('#ss td').eq(i).html("-");
					}else{	
						if($('#oneHalf').is(':checked')){
							$('#ss td').eq(i).html(halfStops[down]);
						}else if($('#oneThird').is(':checked')){
							$('#ss td').eq(i).html(thirdStops[down]);
						}else{
							$('#ss td').eq(i).html(fullStops[down]);
						}
					}
					down=down-1;
				}
			}
		}//end calculate function

	//Because cameras uses scales with rounded values that don't quite fit calculations, this
	//function checks the numbers against values in the usually camera scale
	function check(){
			if(start>=15 && start<30){
				start=15;
				console.log("starting point is "+start);
			}else if(start>=30 && start<60){
				start=30;
				console.log("starting point is "+start);
			}else if(start>=60 && start<125){
				start=60;
				console.log("starting point is "+start);
			}else if(start>=125 && start<250){
				start=125;
				console.log("starting point is "+start);
			}	
	
	}

/*-------------------------------------------------------------------------------------------------
ISO
-------------------------------------------------------------------------------------------------*/
		function displayVals(){
			$("#iso").val($( "#isonumber option:selected").text());
			calculate();
		}
		$( "select" ).change(displayVals);
		
		$('#stop').click(function(){
			stop();
		});

/*-------------------------------------------------------------------------------------------------
Scale
-------------------------------------------------------------------------------------------------*/	
		function stop(){
			if($('#oneHalf').is(':checked')) {
				//resets aperture scale to half
				var half = ["3.3", "4","4.8","5.6", "6.7","8","9.5","11","13","16","19","22","27", "32"];
				var j=4;
				for(var i=0; i<=13; i=i+1){
					//adjusts aperture based on any filters chosen
					if($('#checkFilter').is(':checked')){
						var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;
						if((i-filter)<0){
							$('#ap td').eq(i).html("-");
						}else{
							$('#ap td').eq(i).html(half[i-filter]);
						}
					}else{
						$('#ap td').eq(i).html(half[i]);	
					}
				}
					
			}else if($('#oneThird').is(':checked')){
				//resets aperture value to third
				var third = ["5.6","6.3","7.1","8","9","10","11","13","14","16","18","20","22","25"];
				var j=4;
				for(var i=0; i<=13; i=i+1){
					//adjusts aperture based on any filters chosen
					if($('#checkFilter').is(':checked')){
						var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;
						if((i-filter)<0){
							$('#ap td').eq(i).html("-");
						}else{
							$('#ap td').eq(i).html(third[i-filter]);
						}
					}else{
						$('#ap td').eq(i).html(third[i]);
					}
				}
					
			}else{
				//resets to full stops
				var full = [".7", "1","1.4","2", "2.8","4","5.6","8","11","16","22","32","45", "64"];
				for(var i=0; i<=13; i=i+1){
					//adjust aperture based on any filters chosen
					if($('#checkFilter').is(':checked')){
						var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;
						if((i-filter)<0){
							$('#ap td').eq(i).html("-");
						}else{
							$('#ap td').eq(i).html(full[i-filter]);
						}
					}else{
						$('#ap td').eq(i).html(full[i]);
					}
				}
			}
			calculate(); //recalculates shutter speed if button is clicked.
		}
