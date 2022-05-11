import React from 'react'
import { logout } from '../trash/authReducer';
import { useAppDispatch } from '../trash/hooks'

const MainPage = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <button
                onClick={e => {
                    dispatch(logout());
                }}>
                log out!
            </button>
        </div>
    )
}

export default MainPage