/* Drawer or Accordion to display profile and List in Side Bar */

import React from "react";
import CustomDrawerContent from '../CustomView/customDrawerContent';
import {
    createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeDetail from '../StackNavigator/dashboardNavigator';
import Blogs from '../StackNavigator/blogStackNavigator';

/* Added Dashboard and Blogs in Side Bar */

const Drawer = createDrawerNavigator();
export default function MyDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation={true}
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="DashBoard" component={HomeDetail} />
            <Drawer.Screen name="Blogs" component={Blogs} />
        </Drawer.Navigator>
    );
}
