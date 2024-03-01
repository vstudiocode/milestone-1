export interface Person {
    id: number;
    name: string;
    description: string;
    age: number;
    active: boolean;
    dateOfBirth: string; // datumobjecten gebruiken volgende keer?
    profilePhotoUrl: string;
    status: string;
    hobbies: string[];
    address: Address;
}
  
export interface Address {
    id: number;
    street: string;
    city: string;
    country: string;
}

export interface CoordinatesMap {
    [key: string]: {
      latitude: number;
      longitude: number;
    };
}