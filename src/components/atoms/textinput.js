import React from "react";
import { TextInput, StyleSheet } from "react-native";

const TextInputElement = (props) => (
    <TextInput
        style={styles.input}
        onChangeText= {props.onChangeText}
        value= {props.value}
        placeholder= {props.placeholder}
    />
);

const styles = StyleSheet.create({
    input: {
        height: 30,
        margin: 12,
        width: '72%',
        borderWidth: 1,
        padding: 5,
        borderColor: '#ececec',
        borderRadius: 5
    }
});
export default TextInputElement;