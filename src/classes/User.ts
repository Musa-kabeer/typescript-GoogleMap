import { faker } from '@faker-js/faker';
import { Mappable } from '../interfaces/interfaces';

export class User implements Mappable {
     name: string;
     location: {
          lat: number;
          lng: number;
     };
     color: string = 'orangered';

     constructor() {
          this.name = faker.person.firstName();
          this.location = {
               lat: faker.location.latitude(),
               lng: faker.location.longitude(),
          };
     }

     markContent(): string {
          return `
            <div>
             <h1>Hello from ${this.name}</h1>
            </div>
          `;
     }
}
