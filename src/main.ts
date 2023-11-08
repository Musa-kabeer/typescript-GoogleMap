/// <reference types="@types/google.maps" />
import { Company } from './classes/Company';
import { CustomMap } from './classes/Map';
import { User } from './classes/User';

const user = new User();
const company = new Company();

const map = new CustomMap(document.querySelector('#map') as HTMLElement, {
     backgroundColor: '#e1e1e1cd',
     center: {
          lat: 0,
          lng: 0,
     },
     draggable: true,
     zoom: 1,
});

map.addMarker(company).addMarker(user);
