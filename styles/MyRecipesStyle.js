import { StyleSheet, Dimensions} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(255,255,255,1)"
    },
    image: {
      width: SCREEN_WIDTH,
      height: 46,
      flexDirection: "row",
    },
    image_imageStyle: {},
    filter: {
      color: "#121212",
      height: 30,
      fontSize: 20,
      marginTop: 0
    },
    iconRow: {
      height: 46,
      flexDirection: "row",
      marginTop: 0,
      marginLeft: 280
    },
    icon: {
      color: "white",
      fontSize: 40,
      height: 40,
      width: 40,
      // marginLeft: 1,
      // marginTop: 2
    },
    iconButton: {
      width: 30,
      height: 30,
      marginLeft: 10,
      bottom: 125
    },
    // shareIcon: {
    //   color: "white",
    //   fontSize: 40,
    //   height: 40,
    //   width: 40,
    //   // marginLeft: 1,
    //   // marginTop: 2
    // },
    // addButton: {
    //   width: 30,
    //   height: 30,
    //   // marginLeft: '80%',
    //   bottom: 45
    // },
    // addIcon: {
    //   color: "rgba(0,0,0,1)",
    //   fontSize: 38,
    //   height: 40,
    //   width: 41,
    //   // marginLeft: 1,
    //   marginTop: 2
    // },
    filterRow: {
      height: 22,
      flex: 1,
      marginRight: 17,
      marginLeft: 272,
      marginTop: 14
    },
    filterPicker: {
      bottom: 10,
      marginLeft: 0
    },
    item: {
      backgroundColor: '#8c8c8c',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    image2: {
      width: SCREEN_WIDTH,
      height: 140,
      marginTop: 1
    },
    image2_imageStyle: {},
    recText: {
      color: "rgba(255,255,255,1)",
      fontSize: 26,
      marginTop: 95,
      marginLeft: 8,
      width: '60%',
      //flex: 1

    },
    addButton: {
        width: 30,
        height: 30,
        marginLeft: '80.5%',
        bottom: 73
    },

    addIcon: {
        color: "white",
        fontSize: 38,
        height: 40,
        width: 41,
        marginLeft: 1,
        marginTop: 2
    },
    rateButton: {
        width: 30,
        height: 30,
        marginLeft: '70%',
        bottom: 106
    },
    trashButton: {
        width: 30,
        height: 30,
        marginLeft: '90%',
        bottom: 43
    },
    rateIcon: {
        color: "white",
        fontSize: 38,
        height: 40,
        width: 41,
        marginLeft: 1,
        marginTop: 2
    },

    shareButton: {
        width: 30,
        height: 30,
        marginLeft: '60%',
        bottom: 133
    },
    shareIcon: {
        color: "white",
        fontSize: 38,
        height: 40,
        width: 41,
        marginLeft: 1,
        marginTop: 2
    },
    title: {
        //textAlign: 'center',
        fontSize: 25,
        fontWeight: '700',
        //marginBottom: 20,
        //paddingBottom: 10,
        alignSelf: 'center',
        marginRight: '10%',
        color: "#fff"
    },
    exitModalIcon: {
        //color: "#f94723",
        color: "#fff",
    },
  });
