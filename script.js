function initMap() {
    // Initalizing the map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            // Bangalore
            lat: 13.08777,
            lng: 77.6391

            // Hyderabad
            // lat: 17.52551884513851,
            // lng: 78.29294985667735
        },
        zoom: 10
    });

    // Creating an object to draw on the map
    var drawingManager = new google.maps.drawing.DrawingManager({
        // Setting the inital drawing mode
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.POLYGON,
            ]
        },
        polygonOptions: {
            editable: true,
            fillColor: "#fff",
            fillOpacity: 0.3,
            strokeColor: "#000",
            strokeWeight: 3,
        }
    });

    // Set the drawing object on the Map
    drawingManager.setMap(map);

    // Listener for the drawing event
    google.maps.event.addListener(drawingManager, 'overlaycomplete', function (polygon) {
        polygon.overlay.set('editable', false);
        var coordinatesArray = polygon.overlay.getPath().getArray();
        console.log(coordinatesArray)
        console.log(`--- Co-ordinates of the Polygon ---`)
        coordinatesArray.map((coordinates, index) => {
            console.log(`Co-ordinates ${index + 1}: ${coordinates}`)
        })
    });

    // Sample co-ordinates to drawing on map
    let bangalore = [
        { lat: 13.093120417329533, lng: 77.59286584120095 },
        { lat: 13.030245686617945, lng: 77.4637764857322 },
        { lat: 12.92854214633785, lng: 77.4857491419822 },
        { lat: 12.850898377935202, lng: 77.58050622206032 },
        { lat: 12.857592753899098, lng: 77.64230431776345 },
        { lat: 12.947280133154868, lng: 77.72470177870095 },
        { lat: 12.979399117762833, lng: 77.77963341932595 },
        { lat: 13.024893907211649, lng: 77.7549141810447 },
        { lat: 13.050313828720157, lng: 77.67114342909157 },
        { lat: 13.093120417329533, lng: 77.65878380995095 },
        { lat: 13.107833465681772, lng: 77.61483849745095 },
    ]
    // Draw on Map
    new google.maps.Polygon({
        map: map,
        paths: bangalore,
        fillColor: "#fff",
        fillOpacity: 0.3,
        strokeColor: "#000",
        strokeWeight: 3,
    });

    let hyderabad = [
        { lat: 17.52551884513851, lng: 78.29294985667735 },
        { lat: 17.476404197330936, lng: 78.28127688304454 },
        { lat: 17.48098879263623, lng: 78.35337466136485 },
        { lat: 17.461339713957273, lng: 78.38084048167735 },
        { lat: 17.4390681955523, lng: 78.33002871409923 },
        { lat: 17.380756350702157, lng: 78.40143984691173 },
        { lat: 17.333569123999236, lng: 78.36298769847423 },
        { lat: 17.346022488364717, lng: 78.4165460480836 },
        { lat: 17.308659861215972, lng: 78.4220392121461 },
        { lat: 17.28374722323835, lng: 78.40899294749767 },
        { lat: 17.294892767707136, lng: 78.46392458812267 },
        { lat: 17.30538207527793, lng: 78.53258913890392 },
        { lat: 17.29882632813618, lng: 78.57172793284923 },
        { lat: 17.3119375887192, lng: 78.62391299144298 },
        { lat: 17.361751845440317, lng: 78.57928103343517 },
        { lat: 17.392551258321394, lng: 78.57722109691173 },
        { lat: 17.391896005623746, lng: 78.6252862824586 },
        { lat: 17.439723279047016, lng: 78.5868341340211 },
        { lat: 17.445618924611633, lng: 78.60743349925548 },
        { lat: 17.486228188663357, lng: 78.63215273753673 },
        { lat: 17.533375956168427, lng: 78.58271426097423 },
        { lat: 17.518316194443795, lng: 78.54975527659923 },
        { lat: 17.549743844031727, lng: 78.53464907542735 },
        { lat: 17.54712508130614, lng: 78.50306338206798 },
        { lat: 17.532066461298662, lng: 78.46941775218517 },
        { lat: 17.52289973250736, lng: 78.40418642894298 },
        { lat: 17.530756956973985, lng: 78.37878054515392 },
        { lat: 17.515696977867947, lng: 78.33483523265392 },
    ]
    new google.maps.Polygon({
        map: map,
        paths: hyderabad,
        fillColor: "#fff",
        fillOpacity: 0.3,
        strokeColor: "#000",
        strokeWeight: 3,
    });

    let managlore = [
        { lat: 12.909812970807238, lng: 74.81162134322048 },
        { lat: 12.95130544925035, lng: 74.82466760786892 },
        { lat: 12.94327518554241, lng: 74.90500513228298 },
        { lat: 12.896426829901701, lng: 74.92972437056423 },
        { lat: 12.85894182786607, lng: 74.92491785200954 },
        { lat: 12.821451226726671, lng: 74.8734194389236 },
        { lat: 12.799355935303476, lng: 74.87479272993923 },
        { lat: 12.79600799491592, lng: 74.85831323775173 },
        { lat: 12.793329610614288, lng: 74.84870020064236 },
        { lat: 12.854925245289744, lng: 74.81917444380642 },
    ]
    new google.maps.Polygon({
        map: map,
        paths: managlore,
        fillColor: "#fff",
        fillOpacity: 0.3,
        strokeColor: "#000",
        strokeWeight: 3,
    });
}

initMap();