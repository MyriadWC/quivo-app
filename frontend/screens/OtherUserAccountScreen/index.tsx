import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
// Constants
import * as constants from "../../constants";
// Assets
import { avatarImageMap } from "../../assets/avatars/avatarMaps";
// Components
import NavBar from "../../components/NavBar";

export default function OtherUserAccountScreen({route, navigation}: NativeStackHeaderProps) {

    // TODO: In future, just pass the userId and make a fresh API request for user data
    const { user } = route.params;
    
    return (
        <SafeAreaView style={styles.container}>
            <NavBar navigation={navigation}/>
            <View style={styles.userContainer}>
                <View style={styles.usernameContainer}>
                    <Text style={styles.usernameText}>{user.username}</Text>
                </View>
                <View style={styles.imageAndFollowContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={avatarImageMap[user.avatar_id]}
                            style={styles.profileImage}
                        />
                    </View>
                    <View style={styles.followOuterContainer}>
                        <View style={styles.followSubContainer}>
                            <View style={styles.followTextContainer}>
                                <Text>Followers</Text>
                                <Text>{user.followers_count}</Text>
                            </View>
                        </View>
                        <View style={styles.followSubContainer}>
                            <View style={styles.followTextContainer}>
                                <Text>Following</Text>
                                <Text>{user.following_count}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text>Known Words in French: {user.known_words_count['fr']}</Text>
                <Text>Streak: {user.streak} days</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginHorizontal: 20
    },
    userContainer: {
        marginTop: 10,
        borderWidth: 3,
        borderColor: constants.GREY,
        borderRadius: 10,
        overflow: 'hidden'
    },
    usernameContainer: {
        backgroundColor: constants.PRIMARYCOLOR,
        borderBottomWidth: 3,
        borderBottomColor: constants.GREY
    },
    usernameText: {
        fontSize: constants.H2FONTSIZE,
        fontFamily: constants.FONTFAMILYBOLD,
        backgroundColor: constants.SECONDARYCOLOR,
        width: '100%',
        textAlign: 'center',
        padding: 10
    },
    imageAndFollowContainer: {
        flexDirection: 'row',
        height: 100
    },
    followOuterContainer: {
        flexDirection: 'column'
    },
    followSubContainer: {
        height: '50%'
    },
    followTextContainer: {
        flexDirection: 'row'
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
});