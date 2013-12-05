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
	<section class="col-md-12 col-sm-8 col-xs-4">
		<h1>Light Meter</h1>
		<p>Use this light meter app to calculate exposures for your camera.</p>
		
		<h2>ISO</h2>
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
		<br>
		<h2>EV</h2>
		<form id="light">
		 	<label>Select the lighting</label>
		 	<input type="text" id="amount" >
		 	<p id="description"></p>
		 
			<div id="slider"></div>
		</form>
		<br><br>
	
			
		<p>Lighting is set at <input type="text" id="ev"></p>
	
		<p>iso is set at <input type="text" id="iso"></p>
	
		<br><br>
		<!--<p>Aperture</p>
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
		</ul> -->
	<table class="table">
        <thead>
          <tr>
            <th>Aperture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1.4</td>
            <td>2</td>
            <td>2.8</td>
            <td>4</td>
            <td>5.6</td>
            <td>8</td>
            <td>11</td>
            <td>16</td>
            <td>22</td>
            <td>32</td>
            <td>45</td>
          </tr>
        </tbody>
      </table>
      
      <table class="table table-condensed" id="ss">
        <thead>
          <tr>
            <th>Shutter Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
		
		
	</section>
	</div>
	<script src="js/slider.js"></script>
</body>
</html>