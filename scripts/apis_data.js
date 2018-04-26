"use strict";


let allConcerts = [];

$.getJSON('http://apis.is/concerts', function(data) {
	for (let i = 0; i < data['results'].length; i++){
    	allConcerts.push({eventName: data['results'][i]['eventDateName'], locationName: data['results'][i]['eventHallName'], dateShow: data['results'][i]['dateOfShow'], img: data['results'][i]['imageSource']});
	}

	for (let x = 0; x < data['results'].length; x++){

		let breakTag = document.createElement('br');
		let oneConcert = document.createElement('div');
		oneConcert.setAttribute('class', 'concert');

		let oneImage = document.createElement('img');
		oneImage.setAttribute('src', allConcerts[x]['img']);
		oneConcert.appendChild(oneImage);
		oneConcert.appendChild(breakTag);

		let infoElem = document.createElement('div');
		infoElem.setAttribute('class', 'infoDiv');
		oneConcert.appendChild(infoElem);

		let infoName = document.createElement('div');
		let strongName = document.createElement('strong');
		let infoNameText = document.createTextNode('Nafn:');
		strongName.appendChild(infoNameText);
		if (allConcerts[x]['eventName'].length > 25){
			allConcerts[x]['eventName'] = allConcerts[x]['eventName'].substring(0, 25) + '...';
		}
		let event = document.createTextNode(' ' + allConcerts[x]['eventName']);
		infoName.appendChild(strongName);
		infoName.appendChild(event);
		infoElem.appendChild(infoName);

		let infoLoca = document.createElement('div');
		let strongLoca = document.createElement('strong');
		let infoLocaText = document.createTextNode('Staðsetning:');
		strongLoca.appendChild(infoLocaText);
		if (allConcerts[x]['locationName'].length > 25){
			allConcerts[x]['locationName'] = allConcerts[x]['locationName'].substring(0, 25) + '...';
		}
		let loaction = document.createTextNode(' ' + allConcerts[x]['locationName']);
		infoLoca.appendChild(strongLoca);
		infoLoca.appendChild(loaction);
		infoElem.appendChild(infoLoca);

		let infoDate = document.createElement('div');
		let strongDate = document.createElement('strong');
		let infoDateText = document.createTextNode('Dagur:');
		strongDate.appendChild(infoDateText);
		let date = document.createTextNode(' ' + allConcerts[x]['dateShow']);
		infoDate.appendChild(strongDate);
		infoDate.appendChild(date);
		infoElem.appendChild(infoDate);

		document.body.appendChild(oneConcert);

	}
});


