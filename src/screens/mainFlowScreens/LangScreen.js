import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, I18nManager } from "react-native";
import { switchLang } from '../../helper/switchLang';



const LangScreen = () => {

    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={() => { switchLang('ar') }}>
                <Text style={styles.ar}>Arabic</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { switchLang('en') }}            >
                <Text style={styles.en}>English</Text>
            </TouchableOpacity>

        </SafeAreaView>

    )
};

const styles = StyleSheet.create({
    ar: {
        color: I18nManager.isRTL ? 'red' : 'blue',
        fontWeight:'bold'
    },
    en: {
        color: I18nManager.isRTL ? 'blue' : 'red',
        fontWeight: 'bold'

    },
});

export default LangScreen;