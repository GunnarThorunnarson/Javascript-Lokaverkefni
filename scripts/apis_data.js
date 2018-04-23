"use strict";

let eventName = [];
let locationName = [];
let dateShow = [];
let imageSrc = [];



$.getJSON('http://apis.is/concerts', function(data) {
	for (let i = 0; i < data['results'].length; i++){
    	eventName.push(data['results'][i]['eventDateName']);
    	locationName.push(data['results'][i]['eventHallName']);
    	dateShow.push(data['results'][i]['dateOfShow']);
    	imageSrc.push(data['results'][i]['imageSource']);
	}


	document.getElementById('test').innerHTML = eventName;
});


