import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const TouchableButton = (props) => (
    <TouchableOpacity
        style = {styles.btn}
        onPress = {props.onPress}>
        <Text style = {styles.btnTxt}> {props.title} </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    btn: {
        padding: 5,
        margin: 12,
        marginLeft: 0,
        height: 30,
        width: '18%',
        borderRadius: 5,
        backgroundColor: '#ececec'
     },
     btnTxt:{
        color: '#24292e',
        textAlign: 'center'
     }
});
export default TouchableButton;