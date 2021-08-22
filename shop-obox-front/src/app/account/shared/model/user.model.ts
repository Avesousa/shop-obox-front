export interface Roles {
    admin: boolean;
}

export class UserPrueba {
    public mail: string;
    public photoURL?: string;
    public roles?: Roles;
    public firstName?: string;
    public lastName?: string;
    public password?: string;
    public ordenes?: object;
    public confirmPassword?: string;
    public uid?: string;
}
