(function() {
	ymaps.ready(init);
    var myMap,
    	myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map__block", {
            center: [59.96649775774539, 30.311430499999993],
            zoom: 17,
            controls: ["default","routeEditor"]
        });
        myPlacemark = new ymaps.Placemark([59.96649775774539, 30.311430499999993], { hintContent: 'Спецтех', balloonContent: '' });

        myMap.geoObjects.add(myPlacemark);

        myMap.behaviors.disable('scrollZoom');
    }

    
})();	