import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, I18nManager, SafeAreaView } from "react-native";
import { scale, verticalScale } from "../../helper/scaling";
import strings from "../../localization";

const arr = [
    { id: 1, name: 'Edit Account', route: 'username' },
    { id: 2, name: 'Change Password', route: 'changePass' },
    { id: 3, name: 'Change Address', route: 'address' },
]
const SettingsScreen = ({ navigation }) => {
    const [notifs, setNotifs] = useState(true)
    const [offers, setOffers] = useState(false)
    return <SafeAreaView style={{ flex: 1, paddingTop: verticalScale(45) }}>
        {
            arr.map((item) => {
                return (
                    <View>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => { navigation.navigate(item.route) }}
                        >
                            <Text style={styles.text}>{item.name}</Text>
                            <Image style={styles.ImageTransform} source={require('../../assets/photos/Group1197.png')} />
                        </TouchableOpacity>
                        <View style={styles.saperator} />
                    </View>

                )
            })
        }
        <View style={styles.buttonContainer}>
            <Text> {strings.notifications}</Text>
            <TouchableOpacity
                onPress={() => setNotifs(!notifs)}>
                <Image source={notifs ? require('../../assets/photos/Group16115.png')
                    : require('../../assets/photos/Group16114.png')} />
            </TouchableOpacity>

        </View>
        <View style={styles.saperator} />
        <View style={styles.buttonContainer}>
            <Text>Recieve Offers</Text>
            <TouchableOpacity
                onPress={() => setOffers(!offers)}>
                <Image source={offers ? require('../../assets/photos/Group16115.png')
                    : require('../../assets/photos/Group16114.png')
                } />
            </TouchableOpacity>
        </View>
        <View style={styles.saperator} />
    </SafeAreaView>
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale(25),
        // marginTop: verticalScale(33)
    },

    ImageTransform: {
        transform: I18nManager.isRTL ? [{ scaleX: 1 }] : [{ scaleX: -1 }]
    },
    text: {
        fontSize: 16,
        color: '#1A1824',
        fontWeight: 'bold'
    },
    saperator: {
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#EAEEF4',
        marginVertical: verticalScale(15)


    }

});

export default SettingsScreen;