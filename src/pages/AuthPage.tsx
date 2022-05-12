import React, { FormEvent } from 'react'
import { login } from '../trash/authReducer';
import { useAppDispatch } from '../trash/hooks'
import { loginAsync } from '../api/auth.api';
import { LoginRequest } from '../models/DTOs';

const AuthPage = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        try {
            const response = await loginAsync(data as LoginRequest);
            dispatch(login(response));
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type='email' name="email" required />
                <input type='password' name="password" required />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AuthPage