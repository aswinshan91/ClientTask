/* Blogs Screen */

import React from "react";
import blogStyles from '../../styles/blogStyles';
import AllBlogs from './allBlogs';
import LatestBlogs from "./latestBlogs";
import ArchievedBlogs from "./archievedBlogs";
import { View, SafeAreaView } from 'react-native'
import { Tabs } from '@ant-design/react-native'
import constant from '../../constants/constants';

const Blogs = (props) => {
    const blogTabs = [{title: constant.all },{title: constant.latest },{title: constant.archived}];

    /* create a flat list to show the list of item with safearea */
    return (
        <SafeAreaView style={blogStyles.container}>
            <Tabs tabBarTextStyle = {{ fontSize: 13 }} tabs={blogTabs}>
                <View style={blogStyles.tabstyle}>
                    <AllBlogs/>
                </View>
                <View style={blogStyles.tabstyle}>
                <LatestBlogs/>
                </View>
                <View style={blogStyles.tabstyle}>
                  <ArchievedBlogs/>
                </View>
            </Tabs>
        </SafeAreaView>
    );
}
export default Blogs;