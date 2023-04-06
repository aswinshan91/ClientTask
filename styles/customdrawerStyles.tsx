import { StyleSheet } from 'react-native'

const customDrawerStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tinyLogo: {
      alignSelf: 'center',
      width: 65,
      height: 65,
    },
    header: {
      marginLeft: 15,
      marginTop: 15,
      textAlign: 'center',
      fontSize: 15
    },
    accordionHeader: {
      marginTop: 10,
      marginBottom: 10,
    },
    nametitle: {
      marginTop: 5,
      textAlign: 'center',
      fontSize: 10,
    },
    logo: {
      alignSelf: 'flex-start',
      marginLeft: 10,
      width: 50,
      height: 50 ,
      resizeMode:'contain'
    },
    menuContainer: {
      marginTop: 50,
      flex: 1,
    },
    menuItemsCard: {
      flexDirection: 'row',
      width: '100%',
      height: 50,
    },
    circleContainer: {
      flexDirection: 'column',
      marginTop: 10,
      left: '30%',
      width: 90,
      height: 90,
    },
  });
  export default customDrawerStyles;