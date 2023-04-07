import { StyleSheet } from 'react-native'

const dashBoardDetailStyles = StyleSheet.create({
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
    editButton: {
        top: 10,
        left: 10,
        width: 100,
        fontSize: 12,
        height: 50,
        paddingTop: 3,
    },
    submitButton: {
        top: 10,
        right: 10,
        fontSize: 12,
        width: 100,
        height: 50,
        paddingTop: 5,
    },
    textAreaActionStyle: {
        marginTop: 10,
        paddingVertical: 5,
        height: 300,
        fontSize: 14,
    },
    actionStyles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '20%',
    }
  });

export default dashBoardDetailStyles;