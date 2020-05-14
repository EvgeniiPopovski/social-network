import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profie/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderLogin/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { setInitializeThunkCreator } from "./redux/AppReducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Preloader from "./components/common/Preloader";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import Settings from "./components/Settings/Settings";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.setInitializeThunkCreator();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar friends={this.props.store.getState().navbarPage.friends} />
        <div className="app-content">
          <Route
            path="/dialogs"
            render={() => {
              return <Suspense fallback={<Preloader />}>
                <DialogsContainer store={this.props.store} />
              </Suspense>
            }}
          />
          <Route
            path="/profile/:userId?"
            render={() => <ProfileContainer store={this.props.store} />}
          />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { initialized: state.App.initialized };
};

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { setInitializeThunkCreator })
)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer dispatch={store.dispatch.bind(store)} store={store} />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
