export interface Mappable {
     markContent(): string;
     location: {
          lat: number;
          lng: number;
     };
     color: string;
}
