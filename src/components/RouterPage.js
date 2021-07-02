/* eslint-disable prettier/prettier */
import React from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';
import ShowDisease from './Diseases/ShowDisease';
import HomePage from './HomePage';
import LoginPage from './LoginPage/LoginPage';

export default function RouterPage() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/disease" component={ShowDisease} />
      </Switch>
    </NativeRouter>
  );
}
