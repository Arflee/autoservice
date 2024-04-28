export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    isManager: boolean;
};

export type Reservation = {
    givenName: string;
    familyName: string;
    email: string;
    telNumber: string;
    vehicleModel: string;
    spz: string;
    date: string;
    time: string;
    service: string;
}