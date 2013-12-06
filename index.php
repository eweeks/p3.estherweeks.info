<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>jQuery UI Slider - Slider bound to select</title>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="css/slider.css" type="text/css">


</head>
<body>
<div id="wrapper">
	<section class="col-md-12 col-sm-8 col-xs-4" id="wrapper2">
		<h1>Light Meter</h1>
		<p>Use this light meter app to calculate exposures for your camera.</p>
		
		<h2>ISO</h2>
		<form id="speed">
			<label for="isonumber">Select the iso</label>
			<select id="isonumber" class="form-control">
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
		<br>
		<form id="filters">
			<div class="checkbox">
   				<label>
      				<input type="checkbox" id="checkFilter">Using Filter?</label>
  			</div>
  			
  			<div id="selectFilter">
				<label for="filter">Select Filter</label>
					<select id="filter" class="form-control">
						<option></option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>8</option>
						<option>16</option>
					</select>
			</div>
			<p id="info"></p>
		</form>
		<form id="stop" class="form-inline">
			<h2>Scale</h2>
			<div class="radio">
   				<label for="full">
   					<input type="radio" name="option1" id="full" value="full" checked="checked">
   					Full stop scale
   				</label>
  			</div>			
			<div class="radio">
   				<label for="oneHalf">
   					<input type="radio" name="option1" id="oneHalf" value="oneHalf">
   					One-half stop scale
   				</label>
  			</div>
  			<div class="radio">
   				<label for="oneThird">
   					<input type="radio" name="option1" id="oneThird" value="oneThird">
   					One-third stop scale
   				</label>
  			</div>

  		</form>
	<table class="table" id="ap">
        <thead>
          <tr>
            <th>Aperture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>.7</td>
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
          </tr>
         <!-- <tr><td>1</td></tr>
          <tr><td>2</td> </tr>-->
        </tbody>
      </table>
      <div class="table-responsive">
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
      </div>
		<br><br>
	
			
		<p>Lighting is set at <input type="text" id="ev">
		ISO is set at <input type="text" id="iso"></p>
		
	</section>
	</div>
	<script src="js/slider.js"></script>

</body>
</html>