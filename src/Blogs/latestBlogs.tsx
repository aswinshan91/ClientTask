/* Blogs Screen */

import React, {useEffect, useContext} from "react";
import blogStyles from '../../styles/blogStyles';
import { Image, View, SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native'
import APIContext from "../../networking/context/apiContext";

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
        <View style={blogStyles.innerContainer}>
            <View style={blogStyles.innerView}>
                <Image
                    style={blogStyles.thumbnail}
                    // source={require('../../images/business.jpg')}
                    source={{uri: "https://picsum.photos/seed/picsum/600/600"}}
                />
            </View>
            <View style={blogStyles.content}>
                <Text style={[blogStyles.title]}>{item.title}</Text>
                <Text style={[blogStyles.bodyContent]}>{item.body}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

/* create blogs screen with props */

const LatestBlogs = () => {
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

    /* added seperate border line in Flat list Item */

    const itemSeparatorList = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    /* create a flat list to show the list of item with safearea */
    return (
        <SafeAreaView style={blogStyles.container}>
            <FlatList
                data={userList}
                // ListHeaderComponent={()=>renderHeaderItem()}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => itemSeparatorList()}
            />
        </SafeAreaView>
    );
}
export default LatestBlogs;