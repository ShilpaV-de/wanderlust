console.log("Coordinates:", coordinates);

const map = L.map("map").setView(
    [coordinates[1], coordinates[0]],
    13
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
   maxZoom: 19,
}).addTo(map);

const redIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.marker([coordinates[1], coordinates[0]], {
    icon: redIcon
})
.addTo(map)
.bindPopup(`<h5 class="popup-title">${listingTitle}</h5><p>Exact location will be provided after booking.</p>`)
.openPopup();