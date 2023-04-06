import React from 'react';
import {Text, View} from 'react-native';
import dashBoardUnitStyles from '../../styles/dashBoardUnitStyles';
import constant from '../../constants/constants';

const DashBoardunitTest = () => {
  return (
    <View style={dashBoardUnitStyles.container}>
      <Text style={dashBoardUnitStyles.title}>{constant.title}</Text>
      <Text style={dashBoardUnitStyles.instructions}>
         {constant.body}
      </Text>
    </View>
  );
}

export default DashBoardunitTest;