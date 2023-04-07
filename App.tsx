/* Root Component for added Context and Navigation Set up */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/Drawer/drawer';
import { APIProvider } from "./networking/context/apiContext";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <APIProvider>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </APIProvider>
  );
}
export default App;
