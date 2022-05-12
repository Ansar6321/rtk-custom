import React from 'react'
import { logOutAsync } from '../api/auth.api';
import { authSelector, logout, tokenSelector } from '../trash/authReducer';
import { useAppDispatch, useAppSelector } from '../trash/hooks'

const MainPage = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector(tokenSelector);

    const handleLogOut = async () => {
        try {
            const response = await logOutAsync(token);
            dispatch(logout());
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button
                onClick={handleLogOut}>
                log out!
            </button>
        </div>
    )
}

export default MainPage