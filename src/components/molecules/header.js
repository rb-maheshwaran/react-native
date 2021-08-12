import React from "react";
import { StyleSheet, View } from "react-native";
import Logo from '../atoms/logo';

const Header = () => (
    <View style={styles.header}>
        <Logo />
    </View>
);

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#24292E'
    }
});

export default Header;