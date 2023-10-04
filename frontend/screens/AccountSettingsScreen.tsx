import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, SectionList, StatusBar } from "react-native"
import { useEffect } from "react"
import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import { FontAwesome } from "@expo/vector-icons"
import * as constants from "../constants";

/*
const DATA = [
    {
      title: "Account Settings",
      data: ["Change password", "Change language", "Log out"],
    },
    {
      title: "General",
      data: ["Choose language", "Voice narration", "-----"],
    },
    {
      title: "Social",
      data: ["FAQs", "Rate and comment", "Share", "Contact us", "Confidentiality"],
    },
  ];*/

const DATA = [
{
    title: "Account Settings",
    data: [
    { text: "Change password", action: () => {} },
    { text: "Change language", action: () => {} },
    { text: "Log out", action: () => {console.log('logging out')} },
    ],
},
{
    title: "General",
    data: [
    { text: "Choose language", action: () => {} },
    { text: "Voice narration", action: () => {} },
    { text: "-----", action: () => {} },
    ],
},
{
    title: "Social",
    data: [
    { text: "FAQs", action: () => {} },
    { text: "Rate and comment", action: () => {} },
    { text: "Share", action: () => {} },
    { text: "Contact us", action: () => {} },
    { text: "Confidentiality", action: () => {} },
    ],
},
];

export default function AccountSettingsScreen({navigation}: NativeStackHeaderProps) {

    return (
        <SafeAreaView style={styles.container}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.text + index}
            renderItem={({item}) => (
              <TouchableOpacity onPress={item.action}>
                <View style={styles.item}>
                  <Text style={styles.title}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    item: {
        //backgroundColor: constants.PRIMARYCOLOR,
        fontSize: constants.CONTENTFONTSIZE,
        borderColor: constants.PRIMARYCOLOR,
        borderWidth: 2,
        padding: 10,
        //borderRadius: 15,
        marginBottom: 5,
        marginVertical: 0
    },
    header: {
        fontSize: constants.H2FONTSIZE + 2,
        color: constants.PRIMARYCOLOR,
        fontWeight: "bold",
        padding: 10,
        backgroundColor: constants.SECONDARYCOLOR,
        paddingTop: 20,
        paddingBottom: 10
    },
    title: {
        fontSize: constants.H2FONTSIZE,
        color: constants.PRIMARYCOLOR
    },
});
