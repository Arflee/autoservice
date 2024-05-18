/**
 * @description Used on frontend side to determine wheter the user has access to admin panel or not
 */
export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    isManager: boolean;
};

/**
 * @description Used on frontend side in admin panel to display reservations combined with its vehicle and user
 * 
 */
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