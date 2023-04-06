import React, { useState, useContext} from "react";
import { View, ScrollView, StyleSheet, Alert } from 'react-native'
import { List, TextareaItem, Button } from '@ant-design/react-native'
import dashboardDetailStyles from '../../styles/dashboardDetailStyles';
import APIContext from "../../networking/context/apiContext";
import constant from '../../constants/constants';

const DashBoardDetails = (props : any) => {
    const detail = props.route.params;
    const [details, setDetails] = useState(detail.body);
    const [editingEnable, setEditingEnable] = useState(false);
    const { updateContentDetail } = useContext(APIContext);

    const enableEdit = () =>  {
        setEditingEnable(true);
    }

    const submitAction = () => {
        updateContentDetail({
            body: details,
            userId: detail.userId,
            id: detail.userId,
            title: detail.title,
        });
    }

    return (
        <ScrollView
            style={{ flex: 1 }}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <List>
                <TextareaItem
                    rows={5}
                    editable={editingEnable}
                    style={{ paddingVertical: 5, height: 300 }}
                    value={details}
                    onChange = {(value : any) => setDetails(value)}
                     />
            </List>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '20%' }}>
                <Button style={dashboardDetailStyles.editButton} onPress={() => enableEdit()}>
                    {constant.edit}
                </Button>
                <Button style={dashboardDetailStyles.submitButton} onPress={() => submitAction()}>
                    {constant.submit}
                </Button>
            </View>
        </ScrollView>
    );
}
export default DashBoardDetails;