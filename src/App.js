import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsConteiner from "./components/Dialogs/DialogsContainer";
import { Routes, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='dialogs/*'
                        element={<DialogsConteiner />} />

                    <Route path='profile/:userId?*'
                        element={<ProfileContainer />} />

                    <Route path='users/*'
                        element={<UsersContainer />} />



                </Routes>
            </div>
        </div>
    );
}

export default App;