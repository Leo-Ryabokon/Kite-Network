import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import Friends from "./components/friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Route path={'/profile/:userId?'} render={ () => <ProfileContainer  />} />
                    <Route path={'/dialogs'} render={ () => <DialogsContainer />} />
                    <Route path={'/users'} render={ () => <UsersContainer />} />
                    <Route path={'/login'} render={ () => <Login />} />
                    <Route path={'/news'} render={News} />
                    <Route path={'/music'} render={Music} />
                    <Route path={'/settings'} render={Settings} />
                    <Route path={'/friends'} render={() => <Friends />} />
                </div>
            </div>
    );
}

export default App;
