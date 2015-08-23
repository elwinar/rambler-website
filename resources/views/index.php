<!DOCTYPE html>
<html>
	<head>
		<title>Rambler</title>
		<link href='http://fonts.googleapis.com/css?family=Poiret+One' rel='stylesheet' type='text/css'>
		<style>
html, body {
	height: 100%;
	margin: 0;
	padding: 0;
	font-family: 'Poiret One', cursive;
	font-size: 1.3em;
	text-align: center;
}

div {
	display: table;
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

section {
	position: relative;
	display: table-cell;
	vertical-align: middle;
}

section > *:first-child {
	margin-top: 0;
}

section > *:last-child {
	margin-bottom: 0;
}

h1 {
	font-size: 2em;
	font-variant: small-caps;
	text-transform: lowercase;
}

a {
	display: inline-block;
	color: black;
	text-decoration: none;
	transition: all 1s;
}

a:after {
	content: "";
	display: block;
	width: 100%;
	height: 1px;
	bottom: 0;
	left: 0;
	background-color: #000;
	transform: scaleX(0);
	transition: all 1s;
}

a:hover:after {
	transform: scaleX(1);
}
		</style>
		<script src="please.js"></script>
	</head>
	<body>
		<div>
			<section>
				<h1>Rambler</h1>
				<a href="rambler-3.tar.gz">download</a>
			</section>
		</div>
		<div>
			<section>
			<h1>Simple database versioning</h1>
			<p>Your database should be a first-class citizen of your project.<br>
			Rambler helps you giving it the same attention than the rest of your code while keeping out of you way</p>
			</section>
		</div>
		<div>
			<section>
			<pre>ttyrec of a typical rambler run</pre>
			</section>
		</div>
		<div>
			<section>
			<h1>Made by <a href="//elwinar.com">Elwinar</a></h1>
			</section>
		</div>
		<script>
(function() {
	var sections = document.getElementsByTagName('section');
	for(var i = 0; i < sections.length; i++) {
		sections[i].style.backgroundColor = Please.make_color();
	}
})();
		</script>
	</body>
</html>
