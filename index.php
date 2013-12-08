<!DOCTYPE html>
	<html>
		<head>
			<meta name="author" content="Esther Weeks"/>
			<meta name="description" content="Page for CSCI E-15" />
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width,initial-scale=1.0" /><!--sets width of webpage to width of device-->
			<title>Esther Weeks Project 3</title>
			<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
			<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
			<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
			<link href="css/bootstrap.min.css" rel="stylesheet">
			<link rel="stylesheet" href="css/slider.css" type="text/css">
		</head>
	<body>
		<div id="wrapper">
			<header>
				<!--modal content for about -->
				<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								<h4 class="modal-title" id="myModalLabel">About Light Meter</h4>
							</div>
							<div class="modal-body">
								<p>Light Meter was created by Esther Weeks for CSCI E-15, Dynamic Web Applications, Harvard Extension School</p>
								<p>2013</p>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				</div><!-- /.modal -->
				<!-- Nav Bar -->
				<nav class="navbar navbar-default navbar-fixed-top navbar-inverse" role="navigation">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">	<span class="sr-only">Toggle Navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<!--Nav links here-->
					<div class="collapse navbar-collapse navbar-ex1-collapse">
						<ul class="nav navbar-nav">
							<li><a href="#myModal" data-toggle="modal">About</a></li>
							<li><a href="">Reset</a></li>
						</ul>
					</div><!-- end navbar collapse-->
				</nav>
			</header>
			<section class="col-md-12 col-sm-8 col-xs-5 " id="wrapper2">
				<h1>Light Meter</h1>
				<p>Use this light meter app to calculate exposures for your camera.</p>
				
				<!-- ISO controls -->
				<h2>ISO</h2>
				<form id="speed">
					<label for="isonumber">Select the iso</label>
					<select id="isonumber" class="form-control" name="isonum">
						<option value="25">25</option>
						<option value="50">50</option>
						<option selected="selected" value="100">100</option>
						<option value="200">200</option>
						<option value="400">400</option>
						<option value="800">800</option>
						<option value="1600">1600</option>
						<option value="3200">3200</option>
					</select>
				</form>
				<br>
				
				<!-- EV controls -->
				<h2>EV</h2>
				<form id="light">
					<label>Select the lighting</label>
					<input type="text" id="amount">
					<p id="description"></p>
					<div id="slider"></div>
				</form>
				<br>
				
				<!-- Selecting Filter -->
				<form id="filters">
					<div class="checkbox">
						<label><input type="checkbox" id="checkFilter">Using Filter?</label>
					</div>
					<div id="selectFilter">
						<label for="filter">Select Filter</label>
						<select id="filter" class="form-control">
							<option>-</option>
							<option>1</option>
							<option>2</option>
							<option>4</option>
							<option>8</option>
							<option>16</option>
						</select>
					</div>
					<p id="info"></p>
				</form>
				
				<!-- Selecting Scale -->
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

				<!-- Exposures Chart -->
				<table class="table" id="ap">
					<thead>
						<tr>
							<th>Aperture</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>.7</td>
						</tr>
						<tr>
							<td>1</td>
						</tr>
						<tr>
							<td>1.4</td>
						</tr>
						<tr>
							<td>2</td>
						</tr>
						<tr>
							<td>2.8</td>
						</tr>
						<tr>
							<td>4</td>
						</tr>
						<tr>
							<td>5.6</td>
						</tr>
						<tr>
							<td>8</td>
						</tr>
						<tr>
							<td>11</td>
						</tr>
						<tr>
							<td>16</td>
						</tr>
						<tr>
							<td>22</td>
						</tr>
						<tr>
							<td>32</td>
						</tr>
						<tr>
							<td>45</td>
						</tr>
						<tr>
							<td>64</td>
						</tr>
					</tbody>
				</table>
				<table class="table " id="ss">
					<thead>
						<tr>
							<th>Shutter Speed</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
						<tr>
							<td>0</td>
						</tr>
					</tbody>
				</table>
				<br><br>
				<p>Lighting is set at
					<input type="text" id="ev">ISO is set at
					<input type="text" id="iso">
				</p>
			</section>
		</div>
		<script src="js/slider.js"></script>
		<script src="js/bootstrap.min.js"></script><!--Must be second, this refers to jquery -->
	</body>

</html>