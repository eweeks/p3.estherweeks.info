/*-------------------------------------------------------------------------------------------------
On load - clears inputs, resets
-------------------------------------------------------------------------------------------------*/
		$(document).ready(function(){
			$('input[type=checkbox]').attr('checked',false);
			$('input:radio[name="option1"][value="full"]').prop('checked', true);
			$('#selectFilter').hide();

		});
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
   			}
   		});
   		
   		$("#filter").change(function(){
			stop();
		});

/*-------------------------------------------------------------------------------------------------
Calculate (shutter speed)
-------------------------------------------------------------------------------------------------*/
		function calculate(){
			var e = $('#slider').slider('value');
			var iso2 = $( "#isonumber").val();
			var c = (15-e-0.32195);
			var start = (iso2/(Math.pow(2, c)) );
			start = Math.round(start * 100) / 100;
			//$('#shutter li:eq(9)').html(start);

			
			var myArray =[];
			myArray[9] =start;
			for(var i=8; i>=0; i=i-1){
				var j= (myArray[i+1])*2;
				j=Math.round(j * 100) / 100;
				myArray[i]=j;
			}
			for(var i=10; i<=14; i=i+1){
				var j=(myArray[i-1])/2;
				j=Math.round(j * 100) / 100;
				myArray[i]=j;
			}
			for(var i=0; i<=11; i=i+1){
				$('#ss td').eq(i).html(myArray[i]);
			}
			
		}

		
		function displayVals(){
			//var three = $( "#isonumber").val();
			$("#iso").val($( "#isonumber").val());
			calculate();

		}
		$( "select" ).change(displayVals);
		displayVals();
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
					var half = [".7", ".8","1","1.2", "1.4","1.7","2","2.4","2.8","3.3","4","4.8","5.6", "6.7", "8", "9.5", "11"];//fix
					for(var i=0; i<=12; i=i+1){
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
					var third = [".7",".8",".9","1","1.1", "1.2","1.4","1.6","1.8","2","2.2","2.5","2.8","3.2", "3.5", "4", "4.5", "5.0"];//fix
					for(var i=0; i<=12; i=i+1){
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
					var full = [".7", "1","1.4","2", "2.8","4","5.6","8","11","16","22","32","45", "64", "90", "128", "180"];//fix
					for(var i=0; i<=12; i=i+1){
						if($('#checkFilter').is(':checked')){
							var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;
							if((i-filter)<0){
								$('#ap td').eq(i).html("-");
							}else{
								$('#ap td').eq(i).html(full[i-filter]);
							}
						}else{
							$('#ap td').eq(i).html(full[i]);
							$('#ap tr').eq(2).html(full[i]);
						}
					}					
				}
		}
		


		

		