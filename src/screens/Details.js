import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Details = ({ route, navigation }) => {
    const { music } = route.params

    return (
        <>
            <View style={{ ...styles.details, ...styles.shadow }}>
                <View style={styles.row}>
                    <Text style={{ ...styles.right, ...styles.text }}>Name:</Text>
                    <Text style={{ ...styles.left, ...styles.text }}>{music.artist}</Text>
                </View>
                <View style={styles.divider}></View>
                <View style={styles.row}>
                    <Text style={{ ...styles.right, ...styles.text }}>Label:</Text>
                    <Text style={{ ...styles.left, ...styles.text }}>{music.label}</Text>
                </View>
                <View style={styles.divider}></View>
                <View style={styles.row}>
                    <Text style={{ ...styles.right, ...styles.text }}>Year:</Text>
                    <Text style={{ ...styles.left, ...styles.text }}>{music.year}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.backText}>Go Back!</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    details: {
        marginTop: 60,
        backgroundColor: 'white',
        paddingTop: 75,
        paddingBottom: 75,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    row: {
        flexDirection: 'row',
    },
    divider: {
        backgroundColor: '#b0b0b0',
        height: 3,
        width: '70%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 10,
        marginBottom: 10,
    },
    left: {
        flex: 3,
        textAlign: 'left',
        marginLeft: 20
    },
    right: {
        flex: 2,
        textAlign: 'right',
    },
    text: {
        fontSize: 20,
    },
    back: {
        backgroundColor: 'blue',
        marginTop: 100,
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: 3,
        borderColor: '#1d0ac7'

    },
    backText: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default Details;
// "artist": "Leo Sayer", "label": "Chrysalis", "title": "The Very Best of Leo Sayer", "year": 1979

