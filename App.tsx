import * as React from 'react';
import './style.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamsList } from './screens/RootStackParams';

import { HomeScreen } from './screens/home';



  const firebaseConfig = {
    apiKey: "AIzaSyBwW8H1NiKnG8k4x3VZo-PJIp-GSMlI1Ck",
    authDomain: "tswsecuritysolutions.firebaseapp.com",
    databaseURL: "https://tswsecuritysolutions-default-rtdb.firebaseio.com",
    projectId: "tswsecuritysolutions",
    storageBucket: "tswsecuritysolutions.appspot.com",
    messagingSenderId: "617742575499",
    appId: "1:617742575499:web:3fc155638b4d8b81b5b18e",
    measurementId: "G-H43811WCZ5"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const Stack = createStackNavigator<RootStackParamsList>();

export default function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
