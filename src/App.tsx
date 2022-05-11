import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import NoMatchPage from './pages/NoMatchPage';
import { authSelector } from './trash/authReducer';
import { useAppSelector } from './trash/hooks';

const App = () => {
    const auth = useAppSelector(authSelector);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to={auth ? 'main' : 'auth'} />} />
                <Route path='auth/*' element={!auth ? <AuthPage /> : <Navigate to='/main' />} />
                <Route path='main/*' element={auth ? <MainPage /> : <Navigate to='/auth' />} />
                <Route path='*' element={<NoMatchPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;