import { faker } from '@faker-js/faker';
import { Mappable } from '../interfaces/interfaces';

export class Company implements Mappable {
     companyName: string;
     catchPhrase: string;
     location: {
          lat: number;
          lng: number;
     };
     color: string = 'red';

     constructor() {
          this.companyName = faker.company.name();
          this.catchPhrase = faker.company.catchPhrase();
          this.location = {
               lat: faker.location.latitude(),
               lng: faker.location.longitude(),
          };
     }

     markContent(): string {
          return `
            <div>
             <h1>Hello from ${this.companyName}</h1>
            </div>
          `;
     }
}
