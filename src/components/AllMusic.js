import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, FlatList, ScrollView } from 'react-native';

import OneMusic from './OneMusic';

const AllMusic = ({ allMusic, isLoading }) => {
    // display this if music exist
    const allMusicDisplay =
        // <View>
        //     <FlatList
        //         contentContainerStyle={{ paddingBottom: 60 }}
        //         keyExtractor={() => Math.random() + ''}
        //         data={allMusic}
        //         renderItem={({ item, index }) => {
        //             console.log(index)
        //             return (<OneMusic music={item} />)
        //         }}
        //     />
        // </View>
        <ScrollView>
            {allMusic.map((music, key) => {
                return (
                    <OneMusic key={`${key}`} music={music} />
                )
            })}
        </ScrollView>

    // display this if there is no music
    const noMusic =
        <View>
            <Text style={styles.noMusic}>No Music!</Text>
            <Text style={styles.press}>Press "Get Data" to see the music</Text>
        </View>

    // display this if loading data
    const loading =
        <View style={styles.loading}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>

    return (
        isLoading ? loading : allMusic.length ? allMusicDisplay : noMusic
    );
};

const styles = StyleSheet.create({
    noMusic: {
        fontSize: 26,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    press: {
        textAlign: 'center',
        fontSize: 18,
    },
    loading: {
        marginTop: 50
    }
});

export default AllMusic;
