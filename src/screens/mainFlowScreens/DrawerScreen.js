import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import DrawerItem from "../../components/drawerItem";
import GreenButton from "../../components/greenButton";
import { scale, verticalScale } from "../../helper/scaling";
import strings from "../../localization";

const settings = [
    [{ title: strings.username, route: 'username', email: 'Ahmed@gmail.com', source: require('../../assets/photos/profilePic.png') }],
    [
        { title: strings.orders, route: 'orders', source: require('../../assets/photos/shoppingBag.png') },
        { title: strings.addresses, route: 'address', source: require('../../assets/photos/adressBook.png') }
    ],
    [
        { title: strings.notifications, route: 'notify', source: require('../../assets/photos/Group37Black.png') },
        { title: strings.favourite, route: 'fav', source: require('../../assets/photos/fav.png') },
    ],
    [
        { title: strings.lang, route: 'lang', source: require('../../assets/photos/translate.png') },
        { title: strings.settings, route: 'settings', source: require('../../assets/photos/settings.png') },
        { title: strings.contactus, route: 'contact', source: require('../../assets/photos/phoneCall.png') },
        { title: strings.aboutus, route: 'aboutUs', source: require('../../assets/photos/question.png') },
        { title: strings.shareApp, source: require('../../assets/photos/share.png') },
    ],
]

const DrawerScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.viewContainer} >
            <ScrollView contentContainerStyle={styles.scrollView}>
                {
                    settings.map((item, index) => {
                        return <View style={styles.container}>
                            {
                                item.map((subItem, index) => {
                                    return <DrawerItem
                                        title={subItem.title}
                                        route={subItem.route}
                                        source={subItem.source}
                                        email={subItem.email ? subItem.email : null}
                                        navigation={navigation}
                                    />
                                })
                            }
                        </View>
                    })
                }
                <View style={{ paddingHorizontal: 15 }}>
                    <GreenButton color='#F9B408' title={strings.logout} onPress={() => navigation.navigate('loginStack', { screen: 'login' })} />
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        backgroundColor: '#F2F4F3',
        justifyContent: 'flex-start',
        marginTop: verticalScale(20),
    },
    container: {
        // justifyContent: '',
        paddingVertical: verticalScale(10),
        borderBottomColor: '#D5D5D5',
        borderTopColor: '#D5D5D5',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        backgroundColor: '#FFFFFF',
        marginBottom: verticalScale(5),

        // marginLeft: scale(24),
        // backgroundColor:'black'

        // backgroundColor:'red'
    }
})

export default DrawerScreen;