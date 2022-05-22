import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamsList } from './screens/RootStackParams';

import App from './App';
import { HomeScreen } from './screens/home';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const Stack = createStackNavigator<RootStackParamsList>();

root.render(
  <StrictMode>
        <NavigationContainer >
          <Stack.Navigator >
            <Stack.Screen name="Home" component={HomeScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
  </StrictMode>
);
