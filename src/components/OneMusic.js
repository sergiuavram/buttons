import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const OneMusic = ({ music }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => { navigation.navigate('Details', { music }) }}>
            <View style={{ ...styles.oneMusic, ...styles.shadow }}>
                <Text style={styles.text}>{music.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    oneMusic: {
        backgroundColor: '#f5f5f5',
        marginBottom: 10,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        width: '95%',
        marginRight: 'auto',
        marginLeft: 'auto',

    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 5
    }
});

export default OneMusic;
// "artist": "Leo Sayer", "label": "Chrysalis", "title": "The Very Best of Leo Sayer", "year": 1979