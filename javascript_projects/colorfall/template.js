var counter = 0;

$(function(){

	setInterval(col1, 149);
	setInterval(col2, 101);
	setInterval(col3, 158);
	setInterval(col4, 122);
	setInterval(col5, 89);
	setInterval(col6, 126);
	setInterval(col7, 134);
	setInterval(col8, 115);
	setInterval(col9, 143);
	setInterval(col10, 98);
});

function col1()
{
	var d = $('<div>');
	d.addClass('box');
	$('#col1').prepend(d);
	color_picker(d);
}

function col2()
{
	var d = $('<div>');
	d.addClass('box');
	$('#col2').prepend(d);
	color_picker(d);
}

function col3()
{
	var d = $('<div>');
	d.addClass('box');
	$('#col3').prepend(d);
	color_picker(d);
}

function col4()
{
	var d = $('<div>');
	d.addClass('box');
	$('#col4').prepend(d);
	color_picker(d);
}

function col5()
{
	var d = $('<div>');
	d.addClass('box');
	$('#col5').prepend(d);
	counter++;
	color_picker(d);
}

function col6()
{
	var d = $('<div>');
	d.addClass('box');
	$('#col6').prepend(d);
	color_picker(d);
}

function col7()
{
	var d = $('<div>');
	d.addClass('box');
	$('#col7').prepend(d);
	counter++;
	color_picker(d);
}

function col8()
{
	var d = $('<div>');
	d.addClass('box');
	$('#col8').prepend(d);
	color_picker(d);
}

function col9()
{
	var d = $('<div>');
	d.addClass('box');
	$('#col9').prepend(d);
	color_picker(d);
}

function col10()
{
	var d = $('<div>');
	d.addClass('box');
	$('#col10').prepend(d);
	color_picker(d);
}

function color_picker(div)
{
	counter++;
	var color1 = counter % 255;
	var color2 = (counter + counter * 3) % 255;
	var color3 = (counter * counter * 5) % 255;
	var color_string = 'rgb('+ color1 +', '+ color2 +', '+ color3 +')';
	div.css('background-color', color_string);
}