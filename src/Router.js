import React from "react";
import { useSelector } from 'react-redux'
import { useAuth } from './helpers/auth';

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


import DashboardHome from './pages/dashboard/Home';

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
          <PrivateRoute rule="notes:read" path="/notes">
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

          <PrivateRoute path="/dashboard">
            <DashboardHome />
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

  const {checkPermissions, isAdmin} = useAuth();
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (isAuthenticated && (rest.rule ? checkPermissions(rest.rule) : true)) || isAdmin ? (
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
  
  const { isAuthenticated } = useSelector(state => state.auth);

  const { isAdmin } = useAuth();
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated && isAdmin ? (
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