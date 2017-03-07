



$(document).ready(function() {
	
	//sweet closure
	var updateInput = (function(input) {
		var inputString = '';
		return function(input) {
			if(input === "del") {
				inputString = inputString.substring(0,inputString.length - 1);
			}
			else if(input === 'clear') {
				inputString = '';
			}
			else {
				inputString += input;
			}
			return inputString;}
	})();

	//buttons and actions
	$("#zero").click(function() {
		var text = updateInput('0');
		$("#screen-text").text(text);
	});
	$("#one").click(function() {
		var text = updateInput('1');
		$("#screen-text").text(text);
	});
	$("#two").click(function() {
		var text = updateInput('2');
		$("#screen-text").text(text);
	});
	$("#three").click(function() {
		var text = updateInput('3');
		$("#screen-text").text(text);
	});
	$("#four").click(function() {
		var text = updateInput('4');
		$("#screen-text").text(text);
	});
	$("#five").click(function() {
		var text = updateInput('5');
		$("#screen-text").text(text);
	});
	$("#six").click(function() {
		var text = updateInput('6');
		$("#screen-text").text(text);
	});
	$("#seven").click(function() {
		var text = updateInput('7');
		$("#screen-text").text(text);
	});
	$("#eight").click(function() {
		var text = updateInput('8');
		$("#screen-text").text(text);
	});
	$("#nine").click(function() {
		var text = updateInput('9');
		$("#screen-text").text(text);
	});
	$("#plus").click(function() {
		var text = updateInput('+');
		$("#screen-text").text(text);
	});
	$("#minus").click(function() {
		var text = updateInput('-');
		$("#screen-text").text(text);
	});
	$("#mult").click(function() {
		var text = updateInput('*');
		$("#screen-text").text(text);
	});
	$("#divide").click(function() {
		var text = updateInput('/');
		$("#screen-text").text(text);
	});
	$("#open").click(function() {
		var text = updateInput('(');
		$("#screen-text").text(text);
	});
	$("#close").click(function() {
		var text = updateInput(')');
		$("#screen-text").text(text);
	});
	$("#del").click(function() {
		var text = updateInput('del');
		$("#screen-text").text(text);
	});
	$("#clear").click(function() {
		var text = updateInput('clear');
		$("#screen-text").text(text);
	});
	$("#enter").click(function() {
		$("#screen-text").text(eval($("#screen-text").text()));
	});


});