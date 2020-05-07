import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route } from 'react-router-dom';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profie/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderLogin/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from 'react-redux';
import {setInitializeThunkCreator} from './redux/AppReducer'
import {compose} from "redux";
import { withRouter} from "react-router-dom";
import Preloader from './components/common/Preloader';

class App extends React.Component {
  
  componentDidMount() {
    this.props.setInitializeThunkCreator();
 }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar friends={this.props.store.getState().navbarPage.friends} />
        <div className="app-content">
          <Route path='/dialogs' render={() => (
            <DialogsContainer store={this.props.store} />)} />
          <Route path='/profile/:userId?'
            render={() => (<ProfileContainer store={this.props.store} />)} />
          <Route path="/users"
            render={() => (<UsersContainer />)} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' component={Login} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {initialized: state.App.initialized}
}

export default compose (
  withRouter,
  connect (mapStateToProps, {setInitializeThunkCreator})
)(App);
  

  
