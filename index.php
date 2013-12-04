<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>jQuery UI Slider - Slider bound to select</title>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<link rel="stylesheet" href="slider.css" type="text/css">
<!--<link rel="stylesheet" href="/resources/demos/style.css" />-->

</head>
<body>
<div id="wrapper">
	<form id="light">
		 <label>Select the lighting</label>
		 <input type="text" id="amount">
		 
		<div id="slider"></div>
	</form>
	<br><br>
	
	<form id="speed">
		<label for="isonumber">Select the iso</label>
		<select id="isonumber">
			<option>25</option>
			<option>50</option>
			<option>100</option>
			<option>200</option>
			<option>400</option>
			<option>800</option>
			<option>1600</option>
			<option>3200</option>

		</select>
	</form>	
	<p>Lighting is set at </p>
	<input type="text" id="ev">
	<p>iso is set at </p>
	<input type="text" id="iso">
	<br><br>
	<p>Aperture</p>
	<ul>
		<li>1</li>
		<li>1.4</li>
		<li>2</li>
		<li>2.8</li>
		<li>4</li>
		<li>5.6</li>
		<li>8</li>
		<li>11</li>
		<li>16</li>
		<li>22</li>
		<li>32</li>
		<li>45</li>	
	</ul>
		<p>Shutter Speed</p>
	<ul id="shutter">
		<li>0</li>
		<li>0</li>
		<li>0</li>
		<li>0</li>
		<li>0</li>
		<li>0</li>
		<li>0</li>
		<li>0</li>
		<li>0</li>
		<li>0</li>
		<li>0</li>
		<li>0</li>	
	</ul>
	
</div>
	<script>
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

		

	
	</script>
</body>
</html>