import React, { useContext } from 'react';
import {
  Text,
  Image,
  ScrollView,
  View,
  SafeAreaView
} from 'react-native';
import AccordionMenu from './AccordionList';
import APIContext from "../../networking/context/apiContext";
import customDrawerStyles from '../../styles/customdrawerStyles';
import constant from '../../constants/constants';

function CustomDrawerContent(props : any) {
  const { userDetails } = useContext(APIContext);
  return (
    <ScrollView {...props} scrollEnabled={false}>
      <SafeAreaView style={customDrawerStyles.menuContainer}>
        <View
          style={[
            customDrawerStyles.menuItemsCard,
            { backgroundColor:'#4B7CEE' },
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
          <AccordionMenu {...props}/>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default CustomDrawerContent;