/* Blogs Screen */

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

/* Cretae a Props for item to declare action in onPress */

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
                    // source={require('../../images/business.jpg')}
                    source={{uri: "https://picsum.photos/id/168/1920/1280"}}
                />
            </View>
            <View style={dashBoardStyles.content}>
                <Text style={[dashBoardStyles.title]}>{item.title}</Text>
                <Text style={[dashBoardStyles.bodyContent]}>{item.body}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

/* create blogs screen with props */

const Blogs = (props: any) => {
    const { userList, fetchDashboardList } = useContext(APIContext);

    /* call restful api in useeffect yo show the blog list */

    useEffect(() => {
        fetchDashboardList();
    }, []);

    /* Navigation to blogDetails if need to add blog details screen in future */

    const navigatetoBlogDetail = (item: any) => {

    }

    const renderItem = ({ item }: { item: any }) => {
        return (
            <Item
                item={item}
                onPress={() => navigatetoBlogDetail(item)}
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
export default Blogs;