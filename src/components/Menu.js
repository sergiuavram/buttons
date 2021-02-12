import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import getMusic from '../helpers/getMusic';

const Menu = ({ handleClick, setIsLoading }) => {

    const handleGetData = async () => {
        const allMusic = await getMusic();
        handleClick(allMusic);
    }

    return (
        <View style={styles.buttons}>
            <TouchableOpacity
                style={styles.button}
                onPress={handleGetData}
            >
                <Text style={styles.text}>
                    Get Data
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => { handleClick([]) }}
            >
                <Text style={styles.text}>
                    Remove
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        backgroundColor: 'blue',
        marginTop: 2,
        marginLeft: 2,
        marginRight: 2,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 2,
        borderColor: '#1d0ac7',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default Menu;
