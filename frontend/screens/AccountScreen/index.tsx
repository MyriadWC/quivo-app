import { StyleSheet, View, Image, SafeAreaView, Text, TouchableOpacity, FlatList } from "react-native";
import { useEffect, useState, useContext } from "react";
import UserContext from '../../contexts/UserContext';
import PNG from 'pngjs';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { FontAwesome } from '@expo/vector-icons';
import * as constants from "../../constants";
import SetKnownWordsPanel from "./components/SetKnownWordsPanel";

export default function AccountScreen({navigation}: NativeStackHeaderProps) {
    // Drapeaux trouvés ici: https://www.flaticon.com/packs/international-flags-6

    const { currentUser, currentLanguage } = useContext(UserContext);
    
    useEffect(() =>{
        console.log("Rendering Accountscreen")
    }, []);

    const flagImageMap: Record<string, PNG> = {
        'ru': require('../../assets/ru.png'),
        'de': require('../../assets/de.png'),
        'es': require('../../assets/es.png'),
        'fr': require('../../assets/fr.png')
    };

    return (
        <SafeAreaView>
            <View style={styles.topContainer}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.navigate("SearchUser")}
                    style={styles.addUserButtonContainer}
                    >
                    <View style={styles.addUserButton}>
                        <FontAwesome name="user-plus" size={constants.H1FONTSIZE} color={constants.BLACK} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.navigate("AccountSettings")}
                    style={styles.settingsButtonContainer}
                    >
                    <View style={styles.settingsButton}>
                        <FontAwesome name="gear" size={constants.H1FONTSIZE} color={constants.BLACK} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={require("../../assets/profile.jpg")}
                        style={styles.profileImage}
                    />
                </View>
                <View style={styles.profileNameBubble}>
                    <View style={styles.profileNameContainer}>
                        <Text style={styles.profileName}>{currentUser.username}</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => navigation.navigate("AccountLanguages")}
                        >
                        <View>
                            <FlatList
                                data={Object.keys(currentUser.known_words_count)}
                                //style={styles.languagePopupList}
                                bounces={false}
                                horizontal={true}
                                renderItem={({item}) => (
                                    <>
                                    {currentUser.known_words_count[item] !== 0 &&
                                    <View>
                                        <View style={styles.flagImageContainer}>
                                            <Image
                                                source={flagImageMap[item]}
                                                style={styles.flagImage}
                                            />
                                        </View>
                                        <Text>
                                            {currentUser.known_words_count[item]}
                                        </Text>
                                    </View>
                                    }
                                    </>
                                )}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.middleContainer}>
                <View style={styles.middleContainerColumn}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => navigation.navigate("WordList")}
                        >
                        <View style={styles.knownWordsContainer}>
                            <Text style={styles.knownWords}>{ currentUser.known_words_count[currentLanguage] }</Text>
                            <Text style={styles.knownWordsSubheader}>Words</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.middleContainerColumn}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => navigation.navigate("FollowList", {initialTab: "followers"})}
                        >
                        <View style={styles.followCountContainer}>
                            <Text style={styles.followCount}>{ currentUser.followers_count }</Text>
                            <Text style={styles.followCountSubheader}>Followers</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.middleContainerColumn}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => navigation.navigate("FollowList", {initialTab: "following"})}
                        >
                        <View style={styles.followCountContainer}>
                            <Text style={styles.followCount}>{ currentUser.following_count }</Text>
                            <Text style={styles.followCountSubheader}>Following</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <SetKnownWordsPanel />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: 50  
    },
    profileContainer: {
        width: "100%",
        marginTop: 10,
    },
    middleContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: 10
    },
    middleContainerColumn: {
        height: 60,
        flex: 1
    },
    mainContainer: {
        marginTop: 20
    },
    addUserButtonContainer: {
        alignSelf: 'flex-start',
        backgroundColor: constants.SECONDARYCOLOR,
        padding: 15,
        width: 60,
        borderRadius: 10
    },
    addUserButton: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    settingsButtonContainer: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        backgroundColor: constants.SECONDARYCOLOR,
        padding: 15,
        width: 60,
        borderRadius: 10
    },
    settingsButton: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    profileImageContainer: {
        borderRadius: 50,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20,
        overflow: "hidden",
        width: 100,
        height: 100
    },
    profileImage: {
        width: "100%",
        height: "100%",
        borderRadius: 50
    },
    profileNameBubble: {
        height: 50,
        backgroundColor: constants.PRIMARYCOLOR,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        marginLeft: "auto",
        marginRight: "auto"
    },
    profileNameContainer: {
        height: "100%",
        marginRight: 10,
        justifyContent: "center",
    },
    profileName: {
        fontSize: constants.H2FONTSIZE,
        fontFamily: constants.FONTFAMILYBOLD,
        color: constants.SECONDARYCOLOR
    },
    flagImageContainer: {
        borderRadius: 10,
        borderWidth: 4,
        borderColor: constants.PRIMARYCOLOR,
        overflow: "hidden",
        height: "100%",
        width: 40,
    },
    flagImage: {
        width: "100%",
        height: "100%",
    },
    knownWordsContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto"
    },
    knownWords: {
        fontSize: constants.H1FONTSIZE,
        fontFamily: constants.FONTFAMILYBOLD,
        color: constants.BLACK,
        marginLeft: "auto",
        marginRight: "auto"
    },
    knownWordsSubheader: {
        fontSize: constants.H3FONTSIZE,
        fontFamily: constants.FONTFAMILYBOLD,
        color: constants.GREY,
        marginLeft: "auto",
        marginRight: "auto"
    },
    followCountContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto"
    },
    followCount: {
        fontSize: constants.H1FONTSIZE,
        fontFamily: constants.FONTFAMILYBOLD,
        color: constants.BLACK,
        marginLeft: "auto",
        marginRight: "auto"
    },
    followCountSubheader: {
        fontSize: constants.H3FONTSIZE,
        fontFamily: constants.FONTFAMILYBOLD,
        color: constants.GREY,
        marginLeft: "auto",
        marginRight: "auto"
    }
});