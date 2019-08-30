import React from "react";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard"
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { persistor, store } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';



export const AppRouter = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Landing} />
        </Router>
      </PersistGate>
    </Provider>
  );
};
