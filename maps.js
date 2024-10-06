// Initialize the map
var map = L.map('map').setView([-1.286389, 36.817223], 13); // Default Nairobi location

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Route control
var routeControl = L.Routing.control({
    waypoints: [],
    routeWhileDragging: true
}).addTo(map);

// Function to get route
document.getElementById('route-btn').addEventListener('click', function() {
    var start = document.getElementById('start').value;
    var destination = document.getElementById('destination').value;
    
    if (start && destination) {
        L.Routing.control({
            waypoints: [
                L.latLng(start), // You can convert address to LatLng using geocoding services
                L.latLng(destination)
            ],
            routeWhileDragging: true
        }).addTo(map);
    } else {
        alert('Please enter both starting point and destination');
    }
});

// Add "Locate Me" feature
L.control.locate().addTo(map);

// Add Zoom control to top-right
L.control.zoom({
    position: 'topright'
}).addTo(map);
