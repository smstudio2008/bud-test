export interface IUser {
    id: number | undefined;
    firstName: string;
    lastName: string;
    age: number;
    address: {
        street: string;
        city: string;
    };
}
