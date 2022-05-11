import { AuthResponse, LoginRequest, RegisterRequest } from "../models/DTOs";
import { makeRequest } from "../utils";

export const loginAsync = async (request: LoginRequest) => {
    const response = await makeRequest<AuthResponse>({
        path: '/user/login',
        body: request,
        isApplicationJson: true,
        method: 'POST'
    });

    response.token;
}

export const registerAsync = async (request: RegisterRequest) => {
    const response = await makeRequest<AuthResponse>({
        path: '/user/login',
        body: request,
        isApplicationJson: true,
        method: 'POST'
    })

    response.token;
}
