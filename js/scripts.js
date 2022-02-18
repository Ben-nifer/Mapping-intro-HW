
//Data has to come in first, before you do map things
$.getJSON('./data/intersections.json', function(interSections){


  mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubmlmZXIiLCJhIjoiY2t6bmZpaTB4MmNyMjJucXIyM2s2a3M5OCJ9.yfIClB9zes7RF2saxS5JlA'

  var mapCenter = [-73.87761851755616,40.74558652971994]
  //longlat for center
  var map = new mapboxgl.Map({
    container: 'mapContainer', // HTML container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: mapCenter, // starting position as [lng, lat]
    zoom: 9.75

  });


  //Cmnd D will let you highlight the same text multiple times
  //Cmnd shift right lets you go to the end of the line, can write in multiple places at once

// was doing something weird here with "Intersections", so I put the capital in the middle
// to still differentiate from the json file name
  interSections.forEach(function(interSection) {
    var popup = new mapboxgl.Popup({offset: 40})
      .setHTML(`
      <p>${interSection.Intersection} had ${interSection.Injured_ped} injured pedestrians, and
      ${interSection.Injured_Cyc} injured cyclists between 2013 and 2018 resulting from collisions with cars. </p>
      `);
      // how to change 'cyclists/ pedestrians' to 'cyclist/ pedestrian' when num = 1?

    new mapboxgl.Marker({
      color: 'steelblue'
    })
      .setLngLat([interSection.long, interSection.lat])
      .setPopup(popup)
      .addTo(map);
  });

})
