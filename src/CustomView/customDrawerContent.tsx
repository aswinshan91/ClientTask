import React, { useContext } from 'react';
import {
  Text,
  Image,
  ScrollView,
  View,
} from 'react-native';
import AccordionList from './accordionList';
import APIContext from "../../networking/context/apiContext";
import customDrawerStyles from '../../styles/customdrawerStyles';
import constant from '../../constants/constants';

function CustomDrawerContent(props : any) {
  const { userDetails } = useContext(APIContext);
  return (
    <ScrollView {...props}>
      <View style={customDrawerStyles.menuContainer}>
        <View
          style={[
            customDrawerStyles.menuItemsCard,
            { backgroundColor: '#fff2df' },
          ]}>
          <Image
            style={customDrawerStyles.logo}
            source={require('../../images/logo.jpg')}
          />
           <Text style={customDrawerStyles.header}>{constant.bankName}</Text>
        </View>
        <View
          style={[customDrawerStyles.circleContainer]}>
          <Image
            style={customDrawerStyles.tinyLogo}
            source={require('../../images/profile.png')}
          />
          <Text style={customDrawerStyles.nametitle}>{userDetails ? userDetails.name : constant.guest}</Text>
        </View>
        <View style={customDrawerStyles.accordionHeader}>
          <AccordionList {...props}/>
        </View>
      </View>
    </ScrollView>
  );
}

export default CustomDrawerContent;