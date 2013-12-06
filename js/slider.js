		$(document).ready(function(){
			$('input[type=checkbox]').attr('checked',false);
			//$('input[type=radio]').attr('checked',false);
			$('input:radio[name="option1"][value="full"]').prop('checked', true);
			$('#selectFilter').hide();

		})
		
		$('#checkFilter').click(function() {
			if($('#checkFilter').is(':checked')){
   				$('#selectFilter').show();
   				//$('input:radio[name="option1"][value="oneThird"]').prop('checked', true);
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
			console.log( "change");
			stop();
		})
   		//$("#selectFilter").change(function(){
   			//var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;
   		//	var third = [".9","1","1.1", "1.2","1.4","1.6","1.8","2","2.2","2.5","2.8","3.2", "3.5", "4", "4.5"];
		//	for(var i=0; i<=12; i=i+1){
		//		$('#ap td').eq(i).html(third[i+filter]);
		//	}
   		//});
		
		$(function() {
			var light;
			$( "#slider" ).slider({
				value:6,
				min: 3,
				max: 16,
				step: 1,
				change: function (event, ui) {
				light = $('#slider').slider('value');
				$("#ev").val( light );
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
				}
				else if(ui.value==14){
					
					$('#description').html("Hazy sunshine, soft shadows");
				}else if(ui.value==15){
					
					$('#description').html("Bright sunny day, hard shadows");
				}else{
					
					$('#description').html("Bright sun on sand or snow");
				}
				
			}
			
			});
			
			
			$( "#amount" ).val( $( "#slider" ).slider( "value" ) );


			console.log("EV Is " + ev);
	
		
		function calculate(){
			var e = $('#slider').slider('value');
			var iso2 = $( "#isonumber").val();
			var c = (15-e-.32195);
			var start = (iso2/(Math.pow(2, c)) );
			start = Math.round(start * 100) / 100;
			$('#shutter li:eq(9)').html(start);
			//var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;

			
			//console.log("calculated, e is"+e+"iso is "+iso2 );
			
			var myArray =[];
			myArray[8] =start;
			for(var i=7; i>=0; i=i-1){
				var j= (myArray[i+1])*2;
				j=Math.round(j * 100) / 100;
				myArray[i]=j;
			}
			for(var i=9; i<=14; i=i+1){
				var j=(myArray[i-1])/2;
				j=Math.round(j * 100) / 100
				myArray[i]=j;
			}
			for(var i=0; i<=11; i=i+1){
				//$('#shutter li:eq('+i+')').html(myArray[i]);
				$('#ss td').eq(i).html(myArray[i]);
			}
			
			function printElementAndIndex( elem, index ) {
				console.log( "Index " + index + ": " + elem );
			}
			//myArray.forEach( printElementAndIndex );
			
		}

		
		function displayVals(){
			var three = $( "#isonumber").val();
			console.log("Iso is " + three);
			$("#iso").val( three );
			calculate();

		}
		$( "select" ).change(displayVals);
		displayVals();
		changeScale();

		//changeScale();
		//function filter(){
			//var filt = $( "#filter").val();
			//var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;
		//}
		function changeScale(){
			
			$('#stop').click(function(){
				stop();
			});
		}
		
		function stop(){
			if($('#oneHalf').is(':checked')) {
					var half = [".8","1","1.2", "1.4","1.7","2","2.4","2.8","3.3","4","4.8","5.6", "b", "c", "d", "d"];
					for(var i=0; i<=12; i=i+1){
						//$('#ap td').eq(i).html(half[i]);
						if($('#checkFilter').is(':checked')){
							var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;
							$('#ap td').eq(i).html(half[i+filter]);
						}else{
							$('#ap td').eq(i).html(half[i]);
						}
					}
				}else if($('#oneThird').is(':checked')){
					var third = [".9","1","1.1", "1.2","1.4","1.6","1.8","2","2.2","2.5","2.8","3.2"];
					for(var i=0; i<=12; i=i+1){
						if($('#checkFilter').is(':checked')){
							var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;
							$('#ap td').eq(i).html(third[i+filter]);
						}else{						
							$('#ap td').eq(i).html(third[i]);
						}
					}					
				}else{
					var full = ["1","1.4","2", "2.8","4","5.6","8","11","16","22","32","45"];
					for(var i=0; i<=12; i=i+1){
						if($('#checkFilter').is(':checked')){
							var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;
							$('#ap td').eq(i).html(full[i+filter]);
						}else{
							$('#ap td').eq(i).html(full[i]);
						}
					}					
				}
		}
		
				
		$('#checkFilter').click(function() {
			if($('#checkFilter').is(':checked')){
   				$('#selectFilter').show();
   				//$('input:radio[name="option1"][value="oneThird"]').prop('checked', true);
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
			console.log( "change");
			stop();
		})
   		//$("#selectFilter").change(function(){
   			//var filter=Math.round((Math.LOG10E*Math.log($( "#filter").val()) * 3.321928)*100)/100;
   		//	var third = [".9","1","1.1", "1.2","1.4","1.6","1.8","2","2.2","2.5","2.8","3.2", "3.5", "4", "4.5"];
		//	for(var i=0; i<=12; i=i+1){
		//		$('#ap td').eq(i).html(third[i+filter]);
		//	}
   		//});
		
		});
		