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
				
			}
			
			});
			
			
			$( "#amount" ).val( $( "#slider" ).slider( "value" ) );


			console.log("EV Is " + ev);
	
		
		function calculate(){
			var e = $( "#ev").val();
			var iso2 = $( "#iso").val();
			var c = (15-e-.32195);
			var start = (iso2/(Math.pow(2, c)) );
			start = Math.round(start * 100) / 100;
			$('#shutter li:eq(9)').html(start);

			
			console.log("calculated, e is"+e+"iso is "+iso2 );
			
			var myArray =[];
			myArray[8] =start;
			for(var i=7; i>=0; i=i-1){
				var j= (myArray[i+1])*2;
				j=Math.round(j * 100) / 100;
				myArray[i]=j;
			}
			for(var i=9; i<=11; i=i+1){
				var j=(myArray[i-1])/2;
				j=Math.round(j * 100) / 100
				myArray[i]=j;
			}
			for(var i=0; i<=11; i=i+1){
				$('#shutter li:eq('+i+')').html(myArray[i]);
			}
			
			function printElementAndIndex( elem, index ) {
				console.log( "Index " + index + ": " + elem );
			}
			myArray.forEach( printElementAndIndex );
			
		}
		

		
		function displayVals(){
			var three = $( "#isonumber").val();
			console.log("Iso is " + three);
			$("#iso").val( three );
			calculate();

		}
		$( "select" ).change(displayVals);
		displayVals();
		
		
		});
