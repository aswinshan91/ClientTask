import React, { useContext } from "react";
import APIContext from "../../networking/context/apiContext";
import { List, Button } from '@ant-design/react-native'
import dashBoardStyles from '../../styles/dashboardStyles';
import { Image, ScrollView } from 'react-native'
import constant from '../../constants/constants';

const Dashboard = (props : any) => {
    const { userList } = useContext(APIContext);
    const navigatetoDashBoardDetail = (index : any) => {
        props.navigation.navigate('DashBoardDetails', {
            body: userList[index].body,
            userId: userList[index].userId,
            id: userList[index].userId,
            title: userList[index].title,
        });
    }
    return (
        <ScrollView
            style={dashBoardStyles.container}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <List>
                {userList.map((item: any, index: number) => (
                    <>
                        <List.Item
                            extra={
                                <Image
                                    source={{
                                        uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                                    }}
                                    style={dashBoardStyles.thumbnail}
                                />
                            }>
                            <List.Item.Brief style={dashBoardStyles.title}>{item.title}</List.Item.Brief>
                            <List.Item.Brief style={dashBoardStyles.bodyContent}>{item.body}</List.Item.Brief>
                            <Button style={dashBoardStyles.buttonBorder} onPress={() => navigatetoDashBoardDetail(index)}>
                                <List.Item.Brief style={dashBoardStyles.readMore}>{constant.readMore}</List.Item.Brief>
                            </Button>
                        </List.Item>
                            
                    </>
                ))}           
             </List>
        </ScrollView>
    );
}
export default Dashboard;