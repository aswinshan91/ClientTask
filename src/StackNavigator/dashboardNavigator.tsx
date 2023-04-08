import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../Dashboard/dashboard';
import DashBoardDetails from '../Dashboard/dashboardDetails';
import DashBoardUnitTesting from '../Dashboard/dashboardunitTest';

export default function Root() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="DashBoard">
            <Stack.Screen name="DashBoardNavigate" options={{ headerShown: false }}>
                {props => <Dashboard {...props} />}
            </Stack.Screen>
            <Stack.Screen name="DashBoardDetails" component={DashBoardDetails}></Stack.Screen>
            <Stack.Screen name="DashBoardunitTest" component={DashBoardUnitTesting}></Stack.Screen>
        </Stack.Navigator>
    );
}