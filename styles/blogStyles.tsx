import { StyleSheet } from 'react-native'
const blogStyles = StyleSheet.create({
  title: {
      fontSize: 14,
      fontWeight: '500',
      marginLeft: 2,
      width: '90%',
      color: 'black',
  },
  readMore: {
      color: '#3678D0',
      fontSize: 12,
      paddingTop: 5,
      paddingLeft: 3,
      width: 100,
      height: 20,
  },
  tabstyle : {
    height: '93%',
    width: '100%',
    backgroundColor: 'red',
  },
  bodyContent: {
      marginTop: 10,
      fontSize: 12,
      marginLeft: 3,
      width: '90%',
      height: '50%',
      flexGrow: 1,
      flex: 1,
      color: 'darkgray'
  },
  innerContainer: {
      flexDirection: 'row',
      width: '100%',
      height: 120,
  },
  content: {
      flexDirection: 'column',
      marginLeft: 5,
      marginRight: 2,
      marginTop: 5,
      marginBottom: 5,
      width: '70%',
      flex:3
  },
  // innerView: {
  //     marginLeft: 2,
  //     marginRight: 2,
  //     marginTop: 2,
  //     marginBottom: 2,
  //     width: '30%',
  //     height: 120,
  // },
  innerView: {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  },

  buttonBorder: {
      alignContent: 'flex-start',
      textAlign: 'left',
      marginLeft: 2,
      fontSize: 8,
      width: 100,
      height: 30,
  },
  container: {
      flex: 1,
      backgroundColor: '#f5f5f9',
  },
  thumbnail: {
      alignItems:'center',
      justifyContent: 'center',
      width: '60%',
      height: '60%'
  },
});

export default blogStyles;