import { StyleSheet } from 'react-native'

const dashBoardStyles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: '800',
      },
      readMore: {
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 12,
      },
      bodyContent: {
          fontSize: 12,
      },
      buttonBorder: {
          alignContent: 'flex-start',
          paddingLeft: 0,
          width: 100,
          height: 30,
          backgroundColor: 'white',
          borderRadius: 0,
          borderColor: 'transparent',
      },
      container: {
         flex: 1, 
         backgroundColor: '#f5f5f9',
      }
  });

export default dashBoardStyles;