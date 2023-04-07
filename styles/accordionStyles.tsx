import { StyleSheet } from 'react-native'

const accordionStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleText: {
      fontSize: 12,
    },
  buttonStyle: {
    backgroundColor: 'white',
    borderRadius: 0,
    borderColor: 'transparent',
    paddingleft: 30,
  },
  buttonImageIconStyle: {
    padding: 5,
    margin: 3,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonImageStyle: {
    padding: 5,
    margin: 3,
    height: 17,
    width: 17,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    marginLeft: 5,
    fontSize: 13,
  },
  arrowHidden: {
    width: '90%',
  },
  textHeaderTitle: { 
    paddingLeft: '5%',
    fontSize: 14,
    fontWeight: '700',
    paddingTop: 13,
    alignItems: 'center'
  },
  headerBlogs:{
    height: 40,
    flexDirection: 'row',
  },
  arrowDashBoardHidden: {
    width: '90%',
  },
  textHeaderDashBoardTitle: { 
    paddingLeft: '5%',
    fontSize: 14,
    fontWeight: '700',
    paddingTop: 13,
    alignItems: 'center'
  },
  headerDashboard:{
    height: 40,
    flexDirection: 'row',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  icon: {
    height: 25,
    width: 25,
  },
  buttonListIconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    margin: 5,
  },
    firstView: {
      marginTop: 0, 
      marginBottom: 10,
    },
  })

  export default accordionStyles;