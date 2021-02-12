import axios from 'axios';

// get data 3 api, combine it and sort it
const getMusic = async (setIsLoading) => {
    let allMusic = [];

    try {
        const playlist1 = await axios.get('https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list1');
        const playlist2 = await axios.get('https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list2');
        const playlist3 = await axios.get('https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list3');

        allMusic = allMusic.concat(playlist1.data.data.items, playlist2.data.data.items, playlist3.data.data.items);
    } catch (error) {
        // if error do something
    }

    allMusic = allMusic.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    return allMusic
}

export default getMusic;