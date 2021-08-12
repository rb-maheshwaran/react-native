import React from "react";
import { StyleSheet, View } from "react-native";

const Separator = () => (
    <View style={styles.separator} />
);

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 12
    }
});

export default Separator;