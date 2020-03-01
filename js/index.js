
// copy init from leaflet
//modify starting point and zoom

var mymap = L.map('mapid').setView([1.286920, 103.854570], 15);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  minZoom: 12,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);

// let markers = []

fetch('data.json')
  .then(data => data.json())
  .then(data => {
    data.forEach(i => {
      console.log(i)
      var marker = addMarker(i);
      addLocation(marker, i)
    });
  })
  .catch(e => {
    console.log(e)
    console.log('must use live server or host with xampp or serve');
    alert('must use live server or host with xampp or serve')
  })

function addMarker(data) {
  // https://jsfiddle.net/spgtn1yk/1/
  // modify custom icon and css on scss to match mockup 
  var icon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div class='red marker-pin'></div><span>${data.place_name}</span>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42]
  });

  return L.marker([data.latitude, data.longitude], { icon }).addTo(mymap).on('click', e => onMarkerClick(e, data))
    .bindPopup(`<span>${data.place_desc}</span>`).openPopup().closePopup();
}

function addLocation(marker, data) {
  console.log(marker)
  var li = document.createElement('li')
  li.innerHTML = `
  <div class="location-name">
  <span>${data.place_name}</span>
  ${ data.landmark.length > 0 ? '<i class="material-icons white-text">arrow_drop_down</i>' :
      '<i class="material-icons white-text"></i>'}
</div>
<div class="landmark">
</div>`;
  if (data.landmark.length > 0) {
    var landmark = ""
    data.landmark.forEach(i => landmark += `<span>${i}</span>`)
    li.getElementsByClassName('landmark')[0].innerHTML = landmark;
  }
  document.getElementById('location-list').appendChild(li);
  li.addEventListener('click', e => {
    document.querySelector('#location-list .active').classList.remove('active')
    li.classList.add('active')
    // https://stackoverflow.com/questions/47697215/trigger-click-on-leaflet-marker
    marker.fire('click')
  })
}

mymap.on('click', e => {
  mymap.flyTo(e.latlng, 15)
  document.getElementById('detail').classList.add('hide');
});

function onMarkerClick(e, data) {
  // https://stackoverflow.com/questions/53529707/leaflet-add-class-to-marker-icon-on-click
  // add listener onclick to add  a class 
  document.getElementById('detail').classList.remove('hide');
  document.getElementById('detail-place-name').innerText = data.place_name;
  document.getElementById('detail-place-desc').innerHTML = `
    <p>${data.place_desc} \n  ${data.place_detail}</p>
    <p><i class="material-icons light-blue-text">location_on</i> ${data.place_address}</p>
    <p><i class="material-icons green-text">link</i> <span>${data.place_web}</span> </p>
  `;
  mymap.flyTo(e.latlng || e.target._latlng, 17)
  e.target._icon.classList.add('active');

}


