import React, { useState, useRef } from "react";
import { StyleSheet, View, TextInput, Button, SafeAreaView, Text, TouchableOpacity } from "react-native";

import TouchableButton from '../../atoms/button';
import TextInputElement from '../../atoms/textinput';
import Separator from  '../../atoms/separator'
import Header from  '../../molecules/header'
import Loader from  '../../molecules/loader'
import ListItem from  './listitem'
import { getGitRepoByUserName } from "../../../helper";

const SearchContainer = props => {

    const [loader, setLoader] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);

    const handleSearchGitRepo = _ => {
        setData([]);
        if(searchText.length > 0){
            setLoader(true);
            getGitRepoByUserName(searchText, (error, response) => {
                if(error || response.length === 0){
                    setErrorMsg(`We couldn’t find any repositories matching '${searchText}'`);
                }else{
                    setData(response);
                }
                setLoader(false);
            });
        }else{
            setErrorMsg('Please enter the search text');
        }
    }

    const handleSearchTextChange = text => {
        setSearchText(text);
    }

    return (
        <SafeAreaView>
            <Header />
            <Text style={styles.title}>Github Repo search</Text>
            <View style={styles.searchContainer}>
                <TextInputElement 
                    onChangeText= {handleSearchTextChange}
                    value= {searchText}
                    placeholder= 'Find user repository list...'
                />
                
                <TouchableButton
                    title = 'Submit'
                    style = {styles}
                    onPress = {handleSearchGitRepo} />
            </View>
            <Separator />
            { loader ? <Loader /> :
                <>
                    {data.length > 0 && data.map(item => {
                        return <ListItem data={item} key={item.node_id}/>
                    })}
                    {data.length == 0 && 
                        <Text style={styles.errorMsg}>{errorMsg}</Text>
                    }
                </>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        margin: 10,
        marginBottom: 0,
        fontWeight: '600',
        fontSize: 14
    },
    searchContainer: {
        flexDirection:'row'
    },
     errorMsg: {
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10
     }
});

export default SearchContainer;