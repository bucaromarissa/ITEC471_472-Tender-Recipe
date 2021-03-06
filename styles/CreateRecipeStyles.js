import { StyleSheet, Dimensions} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollableView: {
        width: SCREEN_WIDTH,
        alignSelf: 'center',
    },

    svContentContainer: {
        justifyContent: 'space-between',

    },

    titleContainer: {
        backgroundColor: 'white',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 6
    },

    image1: {
        width: '50%', //78
        height: '50%',
        marginTop: 15,
        alignSelf: 'center'
    },
    whatsYourRecipe: {
        color: "#121212",
        fontSize: 20,
        marginTop: '5%', //12
        alignSelf: "center"
    },
    recipeFillIn: {
        width: 292,
        height: '100%',
        marginTop: 35,
        alignSelf: "center"
    },
    fieldsBackground: {
        top: 12,
        left: 0,
        width: 591,
        height: 1430,
        backgroundColor: "#f5a023",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",

    },
    fieldsBackground_imageStyle: {},
    fillInBadge: {
        top: -10,
        width: 110,
        height: 24,
        position: "absolute",
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 100,
        left: 220
    },
    fillInBelow: {
        color: "rgba(222,5,5,1)",
        fontSize: 12,
        marginTop: 2,
        alignSelf: "center"
    },
    recipeFields: {
        flex: 1,
        marginBottom: 527,
        marginTop: 20,
        marginLeft: SCREEN_WIDTH / 4.5,
        marginRight: 170
    },
    recipeNameText: {
        left: 0,
        position: "absolute",
        color: "rgba(255,255,255,1)",
        fontWeight: "bold",
        fontSize: 20,
        top: 0
    },
    recipeName: {
        width: SCREEN_WIDTH / 1.1,
        color: "#121212",
        height: 40,
        marginTop: 30,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,1)",
        paddingLeft: 8,
        fontSize: 16,
        paddingRight: 8,
    },
    recipeNameTextStack: {
        height: 61
    },
    recipeIngredientsText: {
        color: "rgba(255,255,255,1)",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 15,
        marginLeft: 1
    },
    recipeIngredients: {
        width: SCREEN_WIDTH / 1.1,
        color: "#121212",
        height: 204,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,1)",
        textAlignVertical: 'top',
        paddingLeft: 8,
        paddingTop: 2,
        fontSize: 16
    },
    recipeIngredient: {
        width: SCREEN_WIDTH / 2,
        color: "#121212",
        height: 30,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,1)",
        textAlignVertical: 'top',
        paddingLeft: 8,
        paddingTop: 2,
        fontSize: 16
    },
    recipeAmount: {
        width: SCREEN_WIDTH / 8,
        color: "#121212",
        height: 30,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,1)",
        textAlignVertical: 'top',
        paddingLeft: 8,
        paddingTop: 2,
        //marginRight: '36%',
        //marginLeft: '10%',
        fontSize: 16
    },

    recipeUnit: {
        width: SCREEN_WIDTH / 4,
        color: "#121212",
        height: 30,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,1)",
        textAlignVertical: 'top',
        paddingLeft: 8,
        paddingTop: 2,
        fontSize: 16
    },

    recipeIngredientText: {
    },

    recipeAmountText: {
        marginRight: '6%',
        marginLeft: '3.5%',
        fontSize: 17,
        fontWeight: "bold",
        color: 'black',
    },

    recipeUnitText: {
        marginRight: '16%',
        fontSize: 17,
        fontWeight: "bold",
        color: 'black',
    },



    theInstructionsText: {
        //fontFamily: "roboto-700",
        color: "rgba(255,255,255,1)",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 8,
        marginLeft: 1
    },
    recipeInstructions: {
        width: SCREEN_WIDTH / 1.1,
        color: "#121212",
        height: 500,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,1)",
        textAlignVertical: 'top',
        paddingLeft: 8,
        paddingTop: 2,
        fontSize: 16
    },
    fieldsBackgroundStack: {
        width: 591,
        height: 604,
        marginTop: -37,
        marginLeft: -129
    },

    selectContainer: {
        width: 292,
        height: 760,
        marginTop: 850,
    },


    checkEachBadge: {
        width: 220,
        height: 24,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 100,
        marginTop: -12,
        alignSelf: 'center',
        marginRight: 20
    },
    recipeCheckboxes: {
        flex: 1,
        marginBottom: 428,
        marginTop: 13,
        marginLeft: 135,
        marginRight: 164
    },

    checkboxBackground: {
        width: 591,
        height: 535,
        marginTop: 60,
        marginLeft: -135,
        backgroundColor: "#f5a023",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",

    },
    checkboxBackground_imageStyle: {},

    checkBoxColumn: {
        flex: 1,
        width: SCREEN_WIDTH / 1.06,
        height: 43,
        marginTop: 15,
        marginLeft: SCREEN_WIDTH / 4.6
    },

    checkboxContainerStyle: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    checkboxText: {
        fontSize: 20,
        color: "rgba(111,111,111,1)",
        paddingBottom: 4
    },

    checkboxContainer: {
        flexDirection: "row",
    },

    imagePickerContainer: {
        //flex: 1
    },

    imagePickerContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 591,
        height: 792,
        marginLeft: -135
    },

    recipePhotoUpload: {
        width: 292,
        height: 890,
        marginTop: -80,
        alignSelf: "center"
    },

    //error causing
    uploadBackground: {
        width: 870,
        height: 740,
        marginTop: -163,
        marginLeft: -135
    },
    uploadBackground_imageStyle: {},

    uploadBadge: {
        width: 147,
        height: 24,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 100,
        marginTop: 70,
        marginLeft: 208
    },
    uploadAPicture: {
        color: "rgba(222,5,5,1)",
        fontSize: 12,
        marginTop: 2,
        alignSelf: "center"
    },
    uploadContent: {
        width: SCREEN_WIDTH / 1.2,
        height: 514,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 110
    },
    iconContainer: {
        width: 74,
        height: 74,
        backgroundColor: "rgba(239,115,15,1)",
        borderRadius: 100,
        justifyContent: "center",
        marginTop: 35,
        alignSelf: "center"
    },
    uploadicon: {
        color: "rgba(255,255,255,1)",
        fontSize: 52,
        alignSelf: "center"
    },
    tapTheButtonBelow: {
        color: "#121212",
        fontSize: 18,
        marginTop: 10,
        alignSelf: "center"
    },
    aPhoto: {
        color: "#121212",
        marginTop: 1,
        alignSelf: "center"
    },
    uploadPreviewContainer: {
        width: 165,
        height: 245,
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        borderStyle: "dashed",
        borderRadius: 1,
        marginTop: 9,
        alignSelf: "center"
    },
    browseButton: {
        width: 198,
        height: 42,
        backgroundColor: "rgba(249,71,35,1)",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000000",
        borderStyle: "solid",
        justifyContent: "center",
        marginTop: 15,
        alignSelf: "center"
    },
    browsePhotos: {
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        alignSelf: "center"
    },


    submitRecipeContainer: {
        height: 96,
        marginTop: -360,
        alignSelf: "center",
    },

    submitBtn: {
        width: SCREEN_WIDTH / 1.1,
        height: 56,
        backgroundColor: "rgba(249,71,35,1)",
        borderRadius: 10,
        justifyContent: "center"
    },

    submitRecipeText: {
        color: "rgba(255,255,255,1)",
        alignSelf: "center",
        fontWeight: "bold",
    },

    activityIndicator: {
        position: 'absolute',
        alignSelf: "center",
        justifyContent: "center",
        marginTop: '60%'
    },

    addIcon: {
        color: "#e35514",
        fontSize: 40,
        marginLeft: 2.5

    },

    addIngredientText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 5,
        marginRight: 10
    },

    addButton: {
        backgroundColor: "white",
        borderRadius: 100,
        width: 40,
        height: 40,
    },

    removeButton: {
        backgroundColor: "white",
        borderRadius: 100,
        width: 40,
        height: 40,
    },

    allRecipeIngredients: {
        width: SCREEN_WIDTH / 1.1,
        color: "#121212",
        height: 500,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,1)",
        textAlignVertical: 'top',
        paddingLeft: 8,
        paddingTop: 6,
        marginTop: 10,
        fontSize: 16
    },

    selectDietContainer: {
        width: 292,
        height: 500,
        marginTop: -100
    },

    checkboxDietBackground: {
        width: 591,
        height: 270,
        marginLeft: -135,
        backgroundColor: "#f5a023",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
    },


});
