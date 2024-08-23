export type TUser ={
    _id : string;
    password: string;
    needsPasswordChange: boolean;
    role: 'admin' | 'student' | 'faculty';
    isDelated: boolean;
    status: 'in-progress' | 'blocked'
}