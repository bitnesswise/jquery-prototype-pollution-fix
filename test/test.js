	$( document ).ready(function() {
		var maliciousJson = '{ "myProperty" : "a", "__proto__" : { "isVulnerable" : true } }';
		var testObject = jQuery.extend(true, {}, JSON.parse(maliciousJson ));
		if (typeof {}.isVulnerable !== 'undefined' && {}.isVulnerable === true) {
			alert("Bad news :(\nYou're (still) vulnerable to Prototype Pollution")
		}
		else {
			alert("All Good! :)\nYou're NOT vulnerable (anymore) to Prototype Pollution")
		}
	});
