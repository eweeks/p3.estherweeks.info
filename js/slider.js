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
			for(var i=0; i<=13; i=i+1){
				$('#ss td').eq(i).html(fullStops[i]);
			}
			lastStop=0;
			//calculate();

		});
		var iso1=3;
		var previous=15;
		var lastStop;
		var fullStops= ["64000", "32000","16000","8000", "4000","2000","1000","500","250","125",
		"60","30","15", "8", "4", "2", '1\"', '2\"', '4\"', '8\"', '15\"', '30\" '];
/*-------------------------------------------------------------------------------------------------
Listeners
-------------------------------------------------------------------------------------------------*/
		//$('select,input[type=checkbox]').change(calculate);
		//$('select,input[type=radio]').change(calculate);
		//$("#isonumber").change(calculate);
	
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
				
				if(previous!=$('#slider').slider('value')){
					calculate();
				}
			},
			
			slide: function( event, ui ) {
				//previous =$('#slider').slider('value');
				console.log("S is " + previous);
				
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
				//previous =$('#slider').slider('value');
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
   		
   		//$("#filter").change(function(){
		//	stop();
		//});

/*-------------------------------------------------------------------------------------------------
Calculate (shutter speed)
-------------------------------------------------------------------------------------------------*/
		function calculate(){
			var e = $('#slider').slider('value');
			//var iso2 = $( "#isonumber").val();
			var c = (15-e-0.32195);
			var newStart=lastStop;
			//var start = (iso2/(Math.pow(2, c)) );
			//start = Math.round(start * 100) / 100;
			//$('#shutter li:eq(9)').html(start);
			
			//iso1=$('#isonumber').val();
			
			
			//var nextStart;
			
			if(e > previous){
				var decrease;
				decrease=e-previous;
				//console.log("decrease is " + decrease);
				lastStop= (newStart-decrease);
				for(var i=0; i<=13; i=i+1){
					if((newStart-decrease)<0){
						$('#ss td').eq(i).html("-");
					}
					
					$('#ss td').eq(i).html(fullStops[newStart-decrease]);
					newStart=newStart+1;
				}
				
			}else if(e<previous){
				var increase;
				increase=previous-e;
				//console.log("increase is " + increase);
				lastStop=(newStart+increase);
				for(var i=0; i<=13; i=i+1){
					if((newStart+increase)>21){
						$('#ss td').eq(i).html("-");
					}
					$('#ss td').eq(i).html(fullStops[newStart+increase]);
					newStart=newStart+1;
				}
			}else{
			console.log("no change");
			}
			
			
			
			
			
			/*var myArray =[];
			myArray[9] =start;
			for(var i=8; i>=0; i=i-1){
				var j;
				if($('#oneHalf').is(':checked')){
					j=(myArray[i+1])*Math.sqrt(2);
				}else if($('#oneThird').is(':checked')){
					j=(myArray[i+1])*1.2599;
				}else{
					j=(myArray[i+1])*2;
				}
				j=Math.round(j);
				myArray[i]=j;
			}
			for(var i=10; i<=13; i=i+1){
				var j;
				if($('#oneHalf').is(':checked')){
					j=(myArray[i-1])/Math.sqrt(2);
				}else if($('#oneThird').is(':checked')){
					j=(myArray[i-1])/1.2599;
				}else{
					j=(myArray[i-1])/2;
				}
				j=Math.round(j);
				myArray[i]=j;
				
			}
			for(var i=0; i<=13; i=i+1){
				$('#ss td').eq(i).html(myArray[i]);
			}*/
			previous =$('#slider').slider('value');
		}
		
		function isoCalc(){
			var iso2 = $( "#isonumber").val();
			console.log("iso2 value is  " + iso2);
			console.log("iso1 value is  " + iso1);
			var newStart=lastStop;
			if(iso2>iso1){
				var change=iso2-iso1;
				console.log("iso change is  " + change);
				lastStop=(newStart-change);
				iso1=iso2;

				for(var i=0; i<=13; i=i+1){
					if((newStart-change)<0){
						$('#ss td').eq(i).html("-");
					}					
					
					$('#ss td').eq(i).html(fullStops[newStart-change]);
					newStart=newStart+1;
				}				
				
			}else if(iso2<iso1){
				var change=iso1-iso2;
				console.log("iso change is  " + change);
				lastStop=(newStart+change);
				iso1=iso2;

				for(var i=0; i<=13; i=i+1){
					if((newStart+change)>21){
						$('#ss td').eq(i).html("-");
					}					
					
					$('#ss td').eq(i).html(fullStops[newStart+change]);
					newStart=newStart+1;
				}
			}
			
			console.log("last stop is  " + lastStop);		
		}

		
		function displayVals(){
			//var three = $( "#isonumber").val();
			$("#iso").val($( "#isonumber option:selected").text());
			//$("#isonumber option:selected").text();
			//calculate();
			isoCalc();

		}
		$( "select" ).change(displayVals);
		//displayVals();
		//changeScale();


		//function changeScale(){
			
			$('#stop').click(function(){
				stop();
			});
		//}

/*-------------------------------------------------------------------------------------------------
Scale
-------------------------------------------------------------------------------------------------*/	
		function stop(){
			if($('#oneHalf').is(':checked')) {
					var half = ["3.3", "4","4.8","5.6", "6.7","8","9.5","11","13","16","19","22","27", "32"];
					for(var i=0; i<=13; i=i+1){
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
					var third = ["5.6","6.3","7.1","8","9","10","11","13","14","16","18","20","22","25"];
					for(var i=0; i<=13; i=i+1){
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
					var full = [".7", "1","1.4","2", "2.8","4","5.6","8","11","16","22","32","45", "64"];
					for(var i=0; i<=13; i=i+1){
						if($('#checkFilter').is(':checked')){
							var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;
							if((i-filter)<0){
								$('#ap td').eq(i).html("-");
							}else{
								$('#ap td').eq(i).html(full[i-filter]);
							}
						}else{
							$('#ap td').eq(i).html(full[i]);
							//$('#ap tr').eq(2).html(full[i]);
						}
					}					
				}
				
				calculate();
		}
		


		

		