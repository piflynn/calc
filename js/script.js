



$(document).ready(function() {
	var updateInput = (function(input) {
	var inputString = '';
		return function(input) {return inputString += input;}
	})();
	$("#zero").click(function() {
		var text = updateInput('0');
		$("#screen-text").html(text);
	});
	$("#one").click(function() {
		var text = updateInput('1');
		$("#screen-text").html(text);
	});
	$("#two").click(function() {
		var text = updateInput('2');
		$("#screen-text").html(text);
	});
	$("#three").click(function() {
		var text = updateInput('3');
		$("#screen-text").html(text);
	});
	$("#four").click(function() {
		var text = updateInput('4');
		$("#screen-text").html(text);
	});
	$("#five").click(function() {
		var text = updateInput('5');
		$("#screen-text").html(text);
	});
	$("#six").click(function() {
		var text = updateInput('6');
		$("#screen-text").html(text);
	});
	$("#seven").click(function() {
		var text = updateInput('7');
		$("#screen-text").html(text);
	});
	$("#eight").click(function() {
		var text = updateInput('8');
		$("#screen-text").html(text);
	});
	$("#nine").click(function() {
		var text = updateInput('9');
		$("#screen-text").html(text);
	});
	$("#plus").click(function() {
		var text = updateInput('+');
		$("#screen-text").html(text);
	});
	$("#minus").click(function() {
		var text = updateInput('-');
		$("#screen-text").html(text);
	});
	$("#mult").click(function() {
		var text = updateInput('x');
		$("#screen-text").html(text);
	});
	$("#divide").click(function() {
		var text = updateInput('/');
		$("#screen-text").html(text);
	});


});