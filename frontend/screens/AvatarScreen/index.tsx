import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useContext } from "react";
import PNG from 'pngjs';
// Utils
import { avatarImageMap, avatarLevelUnlock, avatarLevelColors } from '../../assets/avatars/avatarMaps';
import { calcLevel } from "../../utils/functions";
import client from "../../utils/axios";
// Constants
import * as constants from '../../constants';
// Contexts
import UserContext from '../../contexts/UserContext';
// Components
import NavBar from "../../components/NavBar";

interface IAvatarBoxProps {
    userId: number,
    id: number,
    source: any,
    color: string,
    isUnlocked: boolean,
    isActive: boolean
}

const AvatarBox = ({userId, id, source, color, isUnlocked, isActive}: IAvatarBoxProps) => {
    
    const handlePress = () => {
        if (!isActive) {
            client.post('./api/users/changeavatar/', {
                user_id: userId,
                avatar_id: id
            }).then((res) => {
                // Make this change the hilighted avatar on frontend
                console.log('avatar_id changed to ' + id);
            }).catch((err) => {
                console.log(err);
            });
        }
    }
    
    return (
        <TouchableOpacity
            style={styles.avatarContainer}
            activeOpacity={1}
            disabled={!isUnlocked}
            onPress={() => handlePress()}
            >
            <View style={{
                backgroundColor: isActive // Comparing int to string here
                    ? constants.ORANGE
                    : color,
                ...styles.avatarContainerShadow
                }}></View>
            <View style={{
                borderColor: isActive
                    ? constants.ORANGE
                    : color,
                ...styles.avatarImageContainer
                }}>
                <Image
                    style={{
                        opacity: isUnlocked ? 1 : 0.3,
                        ...styles.avatarImage
                    }}
                    source={source}
                />
            </View>
        </TouchableOpacity>
    );
}

export default function AvatarScreen({navigation}: NativeStackHeaderProps) {

    const { currentUser, knownWords } = useContext(UserContext);

    const level = calcLevel(knownWords, 30000).level;
    
    const renderSubsection = (
        level: (0|10|20|30|40|50|60|70|80|90|100),
        avatarIds: number[],
        userLevel: number
    ) => {

        const isUnlocked = userLevel > level;
        const color = isUnlocked ? avatarLevelColors[level] : constants.GREY;

        return (
            <View
                style={{
                    borderColor: color,
                    ...styles.subsectionContainer
                }}
                >
                <View style={{
                    backgroundColor: color,
                    ...styles.subsectionTitleContainer
                    }}>
                    <Text style={styles.subsectionTitleText}>Level {level}+</Text>
                    </View>
                <View style={styles.subsectionAvatarsContainer}>
                    {avatarIds.map((avatar_id: number) => (
                        <AvatarBox
                            userId={currentUser.user_id}
                            id={avatar_id}
                            source={avatarImageMap[avatar_id]}
                            color={color}
                            isUnlocked={isUnlocked}
                            isActive={avatar_id === currentUser.avatar_id}
                        />
                    ))}
                </View>
            </View>
        );
    }

    return (
    <SafeAreaView style={styles.container}>
        <NavBar title='Choose an Avatar' navigation={navigation} />
        <ScrollView
            style={styles.subsectionsContainer}
            bounces={false}
            showsVerticalScrollIndicator={false} 
            showsHorizontalScrollIndicator={false}
            overScrollMode="never"
            removeClippedSubviews={true}
        >
            {Object.entries(avatarLevelUnlock).map(([key, value]) => renderSubsection(key, value, level))}
        </ScrollView>
    </SafeAreaView>
    );
 }

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginHorizontal: 0,
        marginTop: 50,
        flex: 1,
    },
    subsectionsContainer: {
        flexDirection: 'column',
    },
    avatarContainer: {
        marginHorizontal: 5,
        marginBottom: 20,
        backgroundColor: constants.TERTIARYCOLOR
    },
    avatarContainerShadow: {
        width: 100,
        height: 30,
        marginTop: 75,
        borderRadius: 10
    },
    avatarImageContainer: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderRadius: 10,
        marginTop: -105,
        backgroundColor: constants.TERTIARYCOLOR
    },
    avatarImage: {
        width: 80,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    // renderSubsection
    subsectionContainer: {
        flexDirection: 'column',
        borderWidth: 3,
        width: '100%',
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    subsectionTitleContainer: {
        marginBottom: 10,
        padding: 10
    },
    subsectionTitleText: {
        fontFamily: constants.FONTFAMILYBOLD,
        fontSize: constants.H2FONTSIZE,
        color: constants.TERTIARYCOLOR,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    subsectionAvatarsContainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});