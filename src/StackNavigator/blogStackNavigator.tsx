import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Blogs from '../Blogs/blogtabs';

export default function Root() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Blogs">
            <Stack.Screen name="BlogsNavigate" options={{ headerShown: false }}>
                {props => <Blogs {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}