import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import get from 'lodash/get';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RepoListComponent from './RepoListComponent';
import RepoDetailsComponent from './RepoDetailsComponent';
import LoginComponent from './LoginComponent';

const Stack = createStackNavigator();

const AppNavigation = () => {

  const data = useSelector(state => state.loginReducer)
  const [initialRoute, setInitialRoute] = useState('LoginComponent');

  useEffect(() => {
    const dataItem = get(data, 'isLoggedin', false);
    if (dataItem) {
        setInitialRoute('RepoListComponent');
    }
  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen name="LoginComponent" component={LoginComponent} />
      <Stack.Screen name="RepoListComponent" component={RepoListComponent} />
      <Stack.Screen name="RepoDetailsComponent" component={RepoDetailsComponent} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};



export default AppNavigation;