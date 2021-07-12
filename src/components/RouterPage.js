/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { BackButton, NativeRouter, Route, Switch } from 'react-router-native';
import LoginPage from './AuthPage/LoginScreen';
import RegisterPage from './AuthPage/RegisterScreen';
import ShowDisease from './Diseases/ShowDisease';
import HomePage from './HomePage';
import CartPage from './Shopping/CartPage';


export default function RouterPage() {
        const [loggedUser, setLoggedUser] = useState('');
        const [users, setUsers] = useState([
          {id:'_a1234a', email: 'naimur@gmail.com', password:'123456'},
          {id:'_a1234b', email: 'mustafiz@gmail.com', password:'abcdefgh'},
          {id:'_a1234c', email: 'sajib@gmail.com', password:'123456'},
          {id:'_a1234d' ,email: 'shovon@gmail.com', password:'123456'},
          {id:'_a1234e', email: 'pallab@gmail.com', password:'123456'},
        ]);

        const handleLogin = userInfo => {
          console.log(userInfo);
          setLoggedUser(userInfo);
        };
        const handleRegister = async (values)=>{
          let uid = await uuid.v1();
          const user = await {id:uid ,...values};
          await setUsers((prevState)=> [...prevState,user] );
          await console.log(users);
        };

  return (
    <>

      <NativeRouter>
        <BackButton>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <LoginPage users={users} userId={loggedUser} loginHandler={handleLogin} {...props} />
              )}
            />
            <Route path="/home" render={(props)=>( <HomePage userId={loggedUser} {...props} /> )} />
            <Route path="/register" render={(props)=> <RegisterPage users={users} registerHandler={handleRegister} {...props} />} />
            <Route path="/disease" component={ShowDisease} />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </BackButton>
      </NativeRouter>
    </>
  );
}
