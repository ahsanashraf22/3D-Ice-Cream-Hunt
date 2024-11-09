function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.0060 }, // New York City
    zoom: 14,
    mapId: "4ebad8b73d803495", // Replace with your Map ID
    tilt: 45, // Set the tilt for 3D view
  });

  const service = new google.maps.places.PlacesService(map);

  const request = {
    location: { lat: 40.7128, lng: -74.0060 }, // New York City
    radius: 5000, // Search within a 5km radius
    query: "ice cream shop", // Search for ice cream shops
  };

  service.textSearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.forEach(place => {

        const model = new google.maps.maps.Model({
          url: "https://ahsanashraf22.github.io/3D-Ice-Cream-Hunt/blob/main/icecream.glb",
          position: place.geometry.location,
          map: map,
          scale: 0.1,
        });

      });
    }
  });
}
