import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { useContext } from "react";
import PNG from 'pngjs';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
// Constants
import * as constants from '../../constants';
// Contexts
import UserContext from '../../contexts/UserContext';
// Assets
import { avatarImageMap, avatarLevelUnlock } from '../../assets/avatars/avatarMaps';
// Utils
import { generateBuckets } from '../../utils/functions';
import { calcLevel } from "../../utils/functions";
// Components
import NavBar from "../../components/NavBar";

export default function WordsLearnedScreen({navigation}: NativeStackHeaderProps) {

    const { currentUser, knownLanguages,knownWords, currentLanguage } = useContext(UserContext);
    const {r, buckets} = generateBuckets(30000, 100, 50);
    const userLevel = calcLevel(knownWords, 30000).level;

    console.log(buckets);

    const renderImage = (image: PNG) => (
        <Image source={image} style={styles.avatarImage} />
    );

    const renderLevelItem = (bucketSize: number, level: number) => (
        <View style={{
            backgroundColor: level <= userLevel ? constants.GREEN : constants.GREY,
            ...styles.itemContainer
        }}>
            <Text style={styles.levelText}>Lv. {level}</Text>
            <Text style={styles.wordsText}>0 / {bucketSize}</Text>
            {avatarLevelUnlock.hasOwnProperty(level) &&
            <View style={styles.avatarImagesContainer}>
                {avatarLevelUnlock[level].map(imageCode => renderImage(avatarImageMap[imageCode]))}
            </View>
            }
        </View>
    );

    return (
    <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false} 
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        removeClippedSubviews={true}
        >
        <NavBar title='Level' navigation={navigation} />
        <View style={styles.itemsContainer}>
            {buckets.map((item, idx) => renderLevelItem(item, idx))}
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginHorizontal: 16
    },
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center'
    },
    itemContainer: {
        flexDirection: 'column',
        margin: 5,
        borderRadius: 10,
        width: 80,
        height: 100
    },
    levelText: {
        backgroundColor: constants.PRIMARYCOLOR,
        color: constants.TERTIARYCOLOR,
        fontFamily: constants.FONTFAMILYBOLD,
        borderRadius: 5,
        margin: 5,
        textAlign: 'center',
        padding: 5
    },
    wordsText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: constants.FONTFAMILY,
        color: constants.BLACK
    },
    avatarImagesContainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 5
    },
    avatarImage: {
        width: 25,
        height: 25
    }
});