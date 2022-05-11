export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    name: string;
    password: string;
    age: number;
}

export interface AuthResponse {
    user: UserInfo;
    token: string;
}

export interface UserInfo {
    _id: string;
    name: string;
    email: string;
    age: number;
    createdAt: string;
    updatedAt: string;
}