// User model for login

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    authData?: string;
}
