import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Boarding, Signup, Search, Details, CheckOut, Payment, Wallets, Cart, Settings } from '../screens';
import MyDrawer from './DrawerNavigation';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Boarding" component={Boarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={MyDrawer} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Wallets" component={Wallets} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;