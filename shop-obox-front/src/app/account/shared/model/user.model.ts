export interface Roles {
    admin: boolean;
}

export class User {
    public email: string;
    public photoURL?: string;
    public roles?: Roles;
    public firstName?: string;
    public lastName?: string;
    public password?: string;
    public orders?: object;
    public confirmPassword?: string;
    public uid?: string;
}
