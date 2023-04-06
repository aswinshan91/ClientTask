import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Accordion, List, Button } from '@ant-design/react-native'
import accordionStyles from '../../styles/accordionStyles';
import constant from '../../constants/constants';

const AccordionExample = (props: any) => {
  const [activeSections, setActiveSections] = useState([2, 0]);

  const onChange = (activeSections: number[]) => {
    setActiveSections(activeSections);
  }

  return (
    <View style={accordionStyles.firstView}>
      <Accordion
        onChange={onChange}
        activeSections={activeSections}>
        <Accordion.Panel header="DashBoard">
          <List>
            <List.Item>
              <Button onPress={() => props.navigation.navigate('DashBoard')}>
                <Text style={accordionStyles.titleText}>{constant.overview}</Text>
              </Button>
            </List.Item>
          </List>
        </Accordion.Panel>
        <Accordion.Panel header="Blogs">
          <List>
            <List.Item>
            <Button onPress={() => props.navigation.navigate('Blogs')}>
              <Text style={accordionStyles.titleText}>{constant.all}</Text>
              </Button>
            </List.Item>
          </List>
        </Accordion.Panel>
        <Accordion.Panel header="Need Help">
          <List>
            <List.Item>
              <Text style={accordionStyles.titleText}>Support</Text>
            </List.Item>
          </List>
        </Accordion.Panel>
      </Accordion>
    </View>
  )
  }

export default AccordionExample;
