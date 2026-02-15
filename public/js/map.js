
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: cordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

// const cordinates = cordinates

const marker1 = new mapboxgl.Marker({color:"red"})
    .setLngLat(cordinates)
    .addTo(map);