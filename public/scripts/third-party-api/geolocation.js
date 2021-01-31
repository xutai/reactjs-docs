if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      // show the location on a map, perhaps using the Google Maps API
    });
  } else {
    // Give the user a choice of static maps instead perhaps
  }