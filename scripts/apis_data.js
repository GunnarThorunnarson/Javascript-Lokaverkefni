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

	for (let x = 0; x < data['results'].length; x++){

		let breakTag = document.createElement('br');
		let oneConcert = document.createElement('div');
		oneConcert.setAttribute('class', 'concert');

		let oneImage = document.createElement('img');
		oneImage.setAttribute('src', imageSrc[x]);
		oneConcert.appendChild(oneImage);
		oneConcert.appendChild(breakTag);

		let infoElem = document.createElement('div');
		infoElem.setAttribute('class', 'infoDiv');
		oneConcert.appendChild(infoElem);

		let infoName = document.createElement('div');
		let strongName = document.createElement('strong');
		let infoNameText = document.createTextNode('Nafn:');
		strongName.appendChild(infoNameText);
		let event = document.createTextNode(' ' + eventName[x]);
		infoName.appendChild(strongName);
		infoName.appendChild(event);
		infoElem.appendChild(infoName);

		let infoLoca = document.createElement('div');
		let strongLoca = document.createElement('strong');
		let infoLocaText = document.createTextNode('Staðsetning:');
		strongLoca.appendChild(infoLocaText);
		let loaction = document.createTextNode(' ' + locationName[x]);
		infoLoca.appendChild(strongLoca);
		infoLoca.appendChild(loaction);
		infoElem.appendChild(infoLoca);

		let infoDate = document.createElement('div');
		let strongDate = document.createElement('strong');
		let infoDateText = document.createTextNode('Dagsetning:');
		strongDate.appendChild(infoDateText);
		let date = document.createTextNode(' ' + dateShow[x]);
		infoDate.appendChild(strongDate);
		infoDate.appendChild(date);
		infoElem.appendChild(infoDate);


		document.body.appendChild(oneConcert);

	}
});


