import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import Menu from '../components/Menu';
import AllContent from '../components/AllMusic';

const Home = () => {
    const [allMusic, setAllMusic] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <Menu handleClick={setAllMusic} setIsLoading={setIsLoading} isLoading={isLoading} />
            <AllContent allMusic={allMusic} isLoading={isLoading} />
        </>
    );
};

const styles = StyleSheet.create({

});

export default Home;
