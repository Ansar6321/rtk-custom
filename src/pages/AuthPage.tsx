import React from 'react'
import { login } from '../trash/authReducer';
import { useAppDispatch } from '../trash/hooks'

const AuthPage = () => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <button onClick={
                e => dispatch(
                    login({
                        email: 'Rohan@Mamba.com',
                        password: 'P@ssw0rd123'
                    })
                )
            }>login</button>
        </div>
    )
}

export default AuthPage