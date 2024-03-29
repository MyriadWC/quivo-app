import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useContext } from "react";
// Contexts
import UserContext from '../../contexts/UserContext';
// Constants
import * as constants from '../../constants';
// Assets
import { flagImageSources } from "../../assets/img/imageSources";
// Utils
import { calcLevel } from "../../utils/functions";
// Components
import BottomNavBar from '../../components/BottomNavBar';
import RaisedButton from "../../components/RaisedButton";

export default function HomeScreen({navigation}: NativeStackHeaderProps) {

    interface ILanguage {
        id: number,
        language_code: string,
        language_name: string
    }

    const { currentUser, knownLanguages, currentLanguageCode, knownWords, monthlyWordCounts } = useContext(UserContext);

    const userStreak = 26;

    console.log(currentUser.known_languages);

    const wordsThisWeek = monthlyWordCounts.map(item => item.word_count).slice(-7).reduce((a, b) => a + b, 0);

    const { level, levelResidual, wordsInLevel, knownWordsInLevel } = calcLevel(knownWords, 30000);

    let currentLanguageName: string = knownLanguages.find(
        (lang: ILanguage) => lang.language_code === currentLanguageCode
        ).language_name;

    const data = [
        {
            text: 'Words Learned',
            subText: knownWords + ' / 30129',
            image: require('../../assets/words_learned.png'),
            navigateTo: 'WordsLearned'
        },
        /*{
            text: 'Progress',
            subText: wordsThisWeek + ' words this week',
            image: require('../../assets/progress.png'),
            navigateTo: 'Progress'
        },*/
        {
            text: 'Leaderboard',
            subText: '6th this week',
            image: require('../../assets/leaderboard.png'),
            navigateTo: 'Progress'
        },
    ];

    return (
    <>
    <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
            <Image source={flagImageSources[currentLanguageCode]} style={styles.flagImage} />
            <Text style={styles.header}>Your {currentLanguageName} Progress</Text>
        </View>
        <View style={styles.panelContainer}>
            <TouchableOpacity
                style={styles.panel}
                onPress={() => navigation.navigate('Level')}
                >
                <Text style={styles.panelHeader}>Level</Text>
                <View style={styles.panelLevelNumber}>
                    <Text style={styles.panelLevelNumberText}>{level}</Text>
                </View>
                <View style={styles.progressBarBackground}>
                    <View style={{width: Math.floor(levelResidual * 100) + '%', ...styles.progressBar}}></View>
                </View>
                <Text style={styles.panelSubText}>{knownWordsInLevel}/{wordsInLevel}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.panel}
                onPress={() => navigation.navigate('Streak')}
                >
                <Text style={styles.panelHeader}>Streak</Text>
                <View style={styles.streakPanelSubcontainer}>
                    <Image
                            source={require('../../assets/streak-rocket.png')}
                            style={styles.streakPanelImage}
                        />
                    <View style={styles.panelStreakNumber}>
                        <Text style={{
                            fontSize: userStreak.toString().length === 1 ? 90 : userStreak.toString().length === 2 ? 70 : 60
                            , ...styles.panelStreakNumberText
                            }}>{userStreak}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {data.map((item, index) => {
                return (
                <TouchableOpacity
                    style={styles.panel}
                    onPress={() => navigation.navigate(item.navigateTo)}
                    >
                    <Text style={styles.panelHeader}>{item.text}</Text>
                    <Image
                        source={item.image}
                        style={styles.panelImage}
                    />
                    <Text style={styles.panelSubText}>{item.subText}</Text>
                </TouchableOpacity>
                );
            })}
        </View>
    </SafeAreaView>
    {/*<BottomNavBar hilighted='Home' navigation={navigation} />*/}
    </>
    );
 }

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginHorizontal: 0,
        marginTop: 50,
        flex: 1
    },
    topContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10
    },
    flagImage: {
        height: 35,
        width: 50,
        borderRadius: 5
    },
    header: {
        textTransform: 'capitalize',
        fontSize: constants.H2FONTSIZE,
        fontFamily: constants.FONTFAMILYBOLD,
        marginBottom: 'auto',
        marginTop: 'auto',
        marginLeft: 10
    },
    panelContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    panel: {
        backgroundColor: constants.SECONDARYCOLOR,
        width: '46%',
        margin: '2%',
        borderRadius: 10
    },
    panelHeader: {
        fontFamily: constants.FONTFAMILYBOLD,
        fontSize: constants.H2FONTSIZE,
        color: constants.BLACK,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10
    },
    panelLevelNumber: {
        width: 120,
        height: 120,
        marginTop: -15,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5,
    },
    panelLevelNumberText: {
        fontSize: 90,
        fontFamily: constants.FONTFAMILYBOLD,
        color: constants.PRIMARYCOLOR,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    progressBarBackground: {
        height: 15,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15,
        borderWidth: 3,
        borderColor: constants.PRIMARYCOLOR,
        borderRadius: 10,
        overflow: 'hidden'
    },
    progressBar: {
        height: 10,
        backgroundColor: constants.PRIMARYCOLOR
    },
    streakPanelSubcontainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    streakPanelImage: {
        width: 60,
        height: 60,
        padding: 5,
        marginTop: 5,
        marginBottom: 'auto',
        marginRight: 10
    },
    panelStreakNumber: {
        marginTop: 25,
        marginLeft: -20
    },
    panelStreakNumberText: {
        fontFamily: constants.FONTFAMILYBOLD,
        color: constants.ORANGE,
    },
    panelImage: {
        width: 120,
        height: 120,
        padding: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden'
    },
    panelSubText: {
        fontFamily: constants.FONTFAMILY,
        fontSize: constants.H3FONTSIZE,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5,
        marginTop: -15,
        marginBottom: 5
    }
});