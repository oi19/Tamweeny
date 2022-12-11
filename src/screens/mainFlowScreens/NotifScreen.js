import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Shadow, version } from "react-native-shadow-2";
import { scale, verticalScale } from "../../helper/scaling";
const notifications = [
    { id: 1, title: 'Special Offer For Fruits', avaialable: true },
    { id: 2, title: 'Special Offer For Vegetables', avaialable: true },
    { id: 3, title: 'Special Offer For Meat', avaialable: false },
    { id: 4, title: 'Special Offer For Fish', avaialable: true },
    { id: 5, title: 'Special Offer For Baker', avaialable: false },
]
const NotifScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingTop: verticalScale(11) }}>
                {
                    notifications.map((item) => {
                        return (
                            <View style={{ marginHorizontal: scale(16), marginVertical: verticalScale(11) }}>
                                <Shadow>
                                    <TouchableOpacity style={styles.itemContainer}>
                                        <View style={styles.mainSection}>
                                            <View style={item.avaialable ? styles.show : [styles.show, { backgroundColor: 'white' }]} />
                                            <Image style={styles.image} source={require('../../assets/photos/Group16108.png')} />
                                            <Text style={styles.title}>{item.title}</Text>
                                        </View>
                                        <Text style={styles.time}>10 mins ago</Text>
                                    </TouchableOpacity>
                                </Shadow>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    itemContainer: {
        width: scale(341),
        height: verticalScale(65),
        flexDirection: 'row',
        borderRadius: 3,
        justifyContent: 'space-between'


    },
    mainSection: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    show: {
        width: scale(5),
        height: '100%',
        backgroundColor: '#2ECC71',
        alignSelf: 'flex-start',
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    image: {
        resizeMode: 'contain',
        marginHorizontal: scale(20),
        width: scale(37),
        height: verticalScale(37)
    },
    title: {
        fontSize: 14,
        color: 'black'
    },
    time: {
        color: '#CBCED1',
        fontSize: 10,
        alignSelf: 'flex-end'
    }


});

export default NotifScreen;