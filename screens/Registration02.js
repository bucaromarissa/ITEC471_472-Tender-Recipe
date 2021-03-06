import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";

import styles from '../styles/RegisterScreenStyles.js';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

function Registration02({navigation, route}) {
  const [skill, setSkill] = useState("");
  const {name, email, phone, password} = route.params;
  const [btn1Act, setbtn1Act] = useState(false);
  const [btn2Act, setbtn2Act] = useState(false);
  const [btn3Act, setbtn3Act] = useState(false);

  const registerFunc2 = () => {
    if (skill !== "") {
      navigation.navigate('Registration03', { name: name, email: email, phone: phone, password: password, skillLevel: skill })
    }
    else {
      Alert.alert("Please choose a skill level")
    }
  }

  const setBtns = (btnNum) => {
    setbtn1Act(btnNum == 1? true: false); 
    setbtn2Act(btnNum == 2? true: false);
    setbtn3Act(btnNum == 3? true: false);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Gradient.png")}
        resizeMode="cover"
        style={styles.backImg}
        imageStyle={styles.backImg_imageStyle}
      >
        <Text style={styles.reg2Header}>What is your cooking skill?</Text>
        {/* Spacer */}
        <View style={{marginTop:100}}></View>
        <TouchableOpacity 
			testID='beginner'
          onPress={() => {
            setBtns(1)
            setSkill("Beginner")
          }}
          style={btn1Act? styles.vertInpBtnActive : styles.vertInpBtnInactive}>
          <Text style={btn1Act? styles.inpBtnTxtActive : styles.inpBtnTxtInactive}>Beginner</Text>
        </TouchableOpacity>
        <TouchableOpacity 
		testID='intermediate'
          onPress={() => {
            setBtns(2)
            setSkill("intermediate")
          }}
          style={btn2Act? styles.vertInpBtnActive : styles.vertInpBtnInactive}>
          <Text style={btn2Act? styles.inpBtnTxtActive : styles.inpBtnTxtInactive}>Intermediate</Text>
        </TouchableOpacity>
        <TouchableOpacity 
			testID='advanced'
          onPress={() => {
            setBtns(3)
            setSkill("Advanced")
          }}
          style={btn3Act? styles.vertInpBtnActive : styles.vertInpBtnInactive}>
          <Text style={btn3Act? styles.inpBtnTxtActive : styles.inpBtnTxtInactive}>Advanced</Text>
        </TouchableOpacity>
        {/* Spacer */}
        <View style={{marginTop:250}}></View>
        <TouchableOpacity
			TestID='nextBn1'
            onPress={() => registerFunc2()}
            style={styles.nextBtn}>
          <Text style={styles.nextBtnTxt}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Registration02;