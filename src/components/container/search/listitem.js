import React, { Fragment } from "react";
import { StyleSheet, View, ScrollView, Text, Linking } from "react-native";

import Separator from  '../../atoms/separator'

const ListItem = props => {

    const data = props.data;

    return (
        <ScrollView>
            <View style={styles.list}>
                <Text style={styles.link} onPress={() => Linking.openURL(data.html_url)}>{data.name}</Text>
                <Text style={styles.description}>{data.description}</Text>
            </View>
            <Separator />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    list: {
        margin: 10
    },
    link: {
        fontSize: 16,
        fontWeight: '600',
        color: '#399fe6',
        marginBottom: 5
    },
    description: {
        fontSize: 12,
        color: '#5d5d5d'
    }
});

export default ListItem;