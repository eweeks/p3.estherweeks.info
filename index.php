<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>jQuery UI Slider - Slider bound to select</title>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="../css/slider.css" type="text/css">

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
	<p>Lighting is set at <input type="text" id="ev"></p>
	
	<p>iso is set at <input type="text" id="iso"></p>
	
	<br><br>
	<p>Aperture</p>
	<ul id="aperture">
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
<script src="js/slider.js"></script>
</body>
</html>