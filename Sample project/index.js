
function initMap() {
   
    const phil = { lat: 7.09396, lng: 125.50002 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: phil,
    });
    
    const marker = new google.maps.Marker({
      position: phil,
      map: map,
    });
    
  }
  
  window.initMap = initMap;