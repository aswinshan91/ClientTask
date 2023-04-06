import React from "react";
import CustomDrawerContent from '../CustomView/customDrawerContent';
import {
    createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeDetail from '../StackNavigator/root';
import Blogs from '../StackNavigator/blogRoot';

const Drawer = createDrawerNavigator();
export default function MyDrawer() {

    return (
        <Drawer.Navigator useLegacyImplementation={true} initialRouteName="DashBoard"
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="DashBoard" component={HomeDetail} />
            <Drawer.Screen name="Blogs" component={Blogs} />
        </Drawer.Navigator>
    );
}
