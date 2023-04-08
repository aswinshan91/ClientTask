import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Accordion, List } from '@ant-design/react-native'
import accordionStyles from '../../styles/accordionStyles';
import constant from '../../constants/constants';

const AccordionList = (props: any) => {
  const [activeSections, setActiveSections] = useState([0, 0]);

  const onChange = (activeSections: number[]) => {
    setActiveSections(activeSections);
  }
  const headerBlogs = () => (
    <View style={accordionStyles.headerDashboard}>
     <Text style={accordionStyles.textHeaderTitle}>{constant.blogsHeaderTitle}</Text>
     <View style={accordionStyles.arrowDashBoardHidden}></View>
    </View>
  );

  const headerDashBoard = () => (
    <View style={accordionStyles.headerBlogs}>
     <Text style={accordionStyles.textHeaderTitle}>{constant.dashBoardHeaderTitle}</Text>
     <View style={accordionStyles.arrowHidden}></View>
    </View>
  );

  return (
    <View style={accordionStyles.firstView}>
      <Accordion
        onChange={onChange}
        activeSections={activeSections}
        > 
        <Accordion.Panel header={headerDashBoard()} key="1">
          <List>
            <List.Item>
              <TouchableOpacity
                style={accordionStyles.buttonListIconStyle}
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate('DashBoard')}
              >
                <Image
                  source={require('../../images/overview.jpg')}
                  style={accordionStyles.buttonImageIconStyle}
                />
                <View style={accordionStyles.buttonIconSeparatorStyle} />
                <Text style={accordionStyles.buttonTextStyle}>{constant.overview}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={accordionStyles.buttonListIconStyle}
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate('DashBoard')}
              >
                <Image
                  source={require('../../images/calender.jpg')}
                  style={accordionStyles.buttonImageIconStyle}
                />
                <View style={accordionStyles.buttonIconSeparatorStyle} />
                <Text style={accordionStyles.buttonTextStyle}>{constant.calender}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={accordionStyles.buttonListIconStyle}
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate('DashBoard')}
              >
                <Image
                  source={require('../../images/schedule.jpg')}
                  style={accordionStyles.buttonImageStyle}
                />
                <View style={accordionStyles.buttonIconSeparatorStyle} />
                <Text style={accordionStyles.buttonTextStyle}>{constant.scheduleActions}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={accordionStyles.buttonListIconStyle}
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate('DashBoard')}
              >
                <Image
                  source={require('../../images/alert.jpg')}
                  style={accordionStyles.buttonImageIconStyle}
                />
                <View style={accordionStyles.buttonIconSeparatorStyle} />
                <Text style={accordionStyles.buttonTextStyle}>{constant.liveAlerts}</Text>
              </TouchableOpacity>
            </List.Item>
          </List>
        </Accordion.Panel>
        <Accordion.Panel header={headerBlogs()} key="2">
          <List>
            <List.Item>
            <TouchableOpacity
                style={accordionStyles.buttonListIconStyle}
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate('Blogs')}
              >
                <Image
                  source={require('../../images/search.jpg')}
                  style={accordionStyles.buttonImageStyle}
                />
                <View style={accordionStyles.buttonIconSeparatorStyle} />
                <Text style={accordionStyles.buttonTextStyle}>{constant.all}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={accordionStyles.buttonListIconStyle}
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate('Blogs')}
              >
                <Image
                  source={require('../../images/latest.jpg')}
                  style={accordionStyles.buttonImageStyle}
                />
                <View style={accordionStyles.buttonIconSeparatorStyle} />
                <Text style={accordionStyles.buttonTextStyle}>{constant.latest}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={accordionStyles.buttonListIconStyle}
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate('Blogs')}
              >
                <Image
                  source={require('../../images/calender.jpg')}
                  style={accordionStyles.buttonImageIconStyle}
                />
                <View style={accordionStyles.buttonIconSeparatorStyle} />
                <Text style={accordionStyles.buttonTextStyle}>{constant.archived}</Text>
              </TouchableOpacity>
            </List.Item>
          </List>
        </Accordion.Panel>
      </Accordion>
    </View>
  )
  }

export default AccordionList;
