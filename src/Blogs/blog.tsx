import React, { useEffect, useContext, useState } from "react";
import APIContext from "../../networking/context/apiContext";
import { List } from '@ant-design/react-native'
import blogStyles from '../../styles/blogStyles';
import { Image, ScrollView } from 'react-native';

const Blogs = (props: any) => {
    const { userBlogList, fetchBlogDetails } = useContext(APIContext);
      useEffect(() => {
        fetchBlogDetails();
      }, []);

    return (
        <ScrollView
            style={blogStyles.container}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <List>
                {userBlogList.map((item: any, index: number) => (
                    <>
                        <List.Item
                            extra={
                                <Image
                                    source={{
                                        uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                                    }}
                                    style={blogStyles.thumbnail}
                                />
                            }>
                            <List.Item.Brief style={blogStyles.title}>{item.title}</List.Item.Brief>
                            <List.Item.Brief style={blogStyles.bodyContent}>{item.body}</List.Item.Brief>
                        </List.Item>
                            
                    </>
                ))}           
             </List>
        </ScrollView>
    );
}
export default Blogs;
