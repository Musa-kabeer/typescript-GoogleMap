// Instructions to every other class
// on how they can argument to addMarker method

export class CustomMap {
     private googleMap: google.maps.Map;

     constructor(
          public element: HTMLElement,
          public option: {
               backgroundColor: string;
               center: { lat: number; lng: number };
               draggable: boolean;
               zoom: number;
          }
     ) {
          this.googleMap = new google.maps.Map(this.element, option);
     }

     addMarker(data: Mappable) {
          const marker = new google.maps.Marker({
               zIndex: 99,
               visible: true,
               map: this.googleMap,
               position: {
                    lat: data.location.lat,
                    lng: data.location.lng,
               },
          });

          marker.addListener('click', function () {
               const infoWindow = new google.maps.InfoWindow({
                    content: data.markContent(),
               });

               infoWindow.open(this.googleMap, marker);
          });

          return this;
     }
}
