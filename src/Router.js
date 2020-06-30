import React from "react";
import { useSelector } from 'react-redux'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Private from './pages/Private';
import Profile from './pages/Profile';

import Login from  './pages/auth/Login';
import Register from  './pages/auth/Register';
import ForgotAccount from  './pages/auth/ForgotAccount';
import Notes from "./pages/Notes";
import Users from "./pages/Users";
import RestoreAccont from "./pages/auth/RestoreAccont";

const MainRouter = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/notes">
            <Notes />
          </PrivateRoute>
          <AdminRoute path="/admin/users">
            <Users/>
          </AdminRoute>
          <PrivateRoute path="/private">
            <Private />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <NoAuthOnlyRoute path="/login">
            <Login />
          </NoAuthOnlyRoute>
          <NoAuthOnlyRoute path="/forgot-account">
            <ForgotAccount />
          </NoAuthOnlyRoute>
          <NoAuthOnlyRoute path="/reset-password">
            <RestoreAccont />
          </NoAuthOnlyRoute>
          <NoAuthOnlyRoute path="/register">
            <Register />
          </NoAuthOnlyRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  
  const { isAuthenticated } = useSelector(state => state.auth);
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function AdminRoute({ children, ...rest }) {
  
  const { isAuthenticated, user } = useSelector(state => state.auth);
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated && user.role === "admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function NoAuthOnlyRoute({ children, ...rest }) {
  
  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default MainRouter;