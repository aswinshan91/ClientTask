/* DashBoard Screen */

import React, { useContext, useEffect } from "react";
import APIContext from "../../networking/context/apiContext";
import dashBoardStyles from '../../styles/dashboardStyles';
import { Image, View, SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native'
import constant from '../../constants/constants';

/* Cretae a interface for ItemData with data type */

type ItemData = {
    id: string;
    userId: string;
    title: string;
    body: string;
};

/* Create a Props for item to declare action in onPress */

type ItemProps = {
    item: ItemData;
    onPress: () => void;
};

/* Created Render Item for list item */

const Item = ({ item, onPress }: ItemProps) => (
    <TouchableOpacity onPress={onPress}>
        <View style={dashBoardStyles.innerContainer}>
            <View style={dashBoardStyles.innerView}>
            <Image
            style={dashBoardStyles.thumbnail}
            source={require('../../images/meeting.jpg')}
        />
            </View>
            <View style={dashBoardStyles.content}>
              <Text style={[dashBoardStyles.title]}>{item.title}</Text>
              <Text style={[dashBoardStyles.bodyContent]}>{item.body}</Text>
              <Text style={[dashBoardStyles.readMore]}>{constant.readMore}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

/* create DashBoard screen with props */

const Dashboard = (props : any) => {
    const { userList, fetchDashboardList } = useContext(APIContext);

  /* call restful api in useeffect yo show the DashBoard list */

    useEffect(() => {
        fetchDashboardList();
      }, []);

/* Navigation to DashBoard Details with Params */

    const navigatetoDashBoardDetail = (item : any) => {
        props.navigation.navigate('DashBoardDetails', {
            body: item.body,
            userId: item.userId,
            id: item.userId,
            title: item.title,
        });
    }

 /*create a render method for flatlist */
    const renderItem = ({item}: { item: any}) => {
        return (
          <Item
            item={item}
            onPress={() => navigatetoDashBoardDetail(item)}
          />
        );
      };

/* create a flat list to show the list of item with safearea */

    return (
    <SafeAreaView style={dashBoardStyles.container}>
      <FlatList
        data={userList}
        renderItem={(item) => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    );
}
export default Dashboard;