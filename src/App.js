import React from 'react';
import './App.css'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profie/Profile.jsx'
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar friends={props.store.getState().navbarPage.friends}/>
        <div className="app-content">
          <Route path='/dialogs' render={() => (
              <DialogsContainer store={props.store}/>)}/>
          <Route path='/profile'
                 render={() => (<Profile  store={props.store}/>)}/>
          <Route path="/users"
                 render={() => (<Users/>)}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
  );
}

export default App;
