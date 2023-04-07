import { StyleSheet } from 'react-native'

const blogStyles = StyleSheet.create({
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
    thumbnail: {
        width: 75,
        height: 75 
    },
  });
export default blogStyles;