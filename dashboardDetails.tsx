import React, { useState, useContext} from "react";
import { View, ScrollView } from 'react-native'
import { List, TextareaItem, Button } from '@ant-design/react-native'
import dashboardDetailStyles from '../../styles/dashboardDetailStyles';
import APIContext from "../../networking/context/apiContext";
import constant from '../../constants/constants';
import dashBoardDetailStyles from "../../styles/dashboardDetailStyles";

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
        })
            const { navigation } = props;
            props.route.params.mycallback();
            navigation.goBack();
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
                    style={dashboardDetailStyles.textAreaActionStyle}
                    value={details}
                    onChange = {(value : any) => setDetails(value)}
                     />
            </List>
            <View style={dashBoardDetailStyles.actionStyles}>
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