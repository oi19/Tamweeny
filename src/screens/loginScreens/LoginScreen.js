import React, { useState } from "react";
import { StyleSheet, View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { Dimensions } from "react-native";
import { scale, verticalScale, moderateScale } from '../../helper/scaling'
import Input from "../../components/input";
import strings from "../../localization";
import GreenButton from "../../components/greenButton";
import SelectTextInput from "../../components/selectTextInput";
import Logo from "../../components/logo";


const codes = [
    { country: '+20', source: require('../../assets/photos/egypt.png') },
    { country: '+212', source: require('../../assets/photos/Morocco.jpg') },
    { country: '+966', source: require('../../assets/photos/Saudi.png') },
    { country: '+216', source: require('../../assets/photos/Tunisia.png') },
]


const LoginScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false)
    const [phoneNum, setPhoneNum] = useState()
    const [password, setPassword] = useState()
    return <SafeAreaView style={styles.viewContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View
                style={styles.imageContainer}>
                <View style={styles.skipButtonContainer}>
                    <Text style={styles.skipButton}
                        onPress={() => { navigation.navigate('mainFlowStack') }}>{strings.skip}</Text>
                </View>
                <View style={{ flex: 2.5, alignItems: 'flex-end', flexDirection: 'row' }}>
                    <Image
                        source={require('../../assets/photos/Group7193.png')}
                        style={styles.image}
                    />
                </View>

            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{strings.login}</Text>

                <View style={styles.logosContainer}>
                    <Logo source={require('../../assets/photos/Google.png')} />
                    <Logo source={require('../../assets/photos/facebook.png')} />
                    <Logo source={require('../../assets/photos/Group28715.png')} />
                </View>
                <View style={styles.phoneNumContainer}>
                    <Input
                        phoneNum={true}
                        label={strings.phoneNum}
                        source={require('../../assets/photos/iphone.png')}
                        onChange={(phoneNum) => setPhoneNum(phoneNum)}
                        term={phoneNum}
                    />
                    <SelectTextInput margin={17}
                        placeholder='codes'
                        data={codes}
                    />
                </View>
                <Input
                    password={true}
                    label={strings.password}
                    onChange={(password) => setPassword(password)}
                    term={password}

                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('forgot')}
                    style={styles.forgotTextContainer}>
                    <Text
                        style={styles.forgotText}
                    >{strings.forgotPassword}</Text>
                </TouchableOpacity >

                <GreenButton color='#03AD53' title={strings.login} onPress={() => { navigation.navigate('mainFlowStack') }} />
                <Text style={styles.belowButtonMsg}>
                    {strings.dontHaveAccount}!<Text style={{ color: '#03AD53' }} onPress={() => { navigation.navigate('loginStack', { screen: 'signup' }) }}> {strings.registerNow}</Text>
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'green'
    },
    scrollViewContainer: {
        flexGrow: 1,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        borderTopRightRadius: 28,
        borderTopLeftRadius: 28,
        paddingVertical: 30,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        alignSelf: 'stretch',
    },
    skipButtonContainer: {
        alignSelf: 'stretch',
        flex: 1,
    },
    skipButton: {
        marginLeft: scale(19),
        marginTop: verticalScale(34),
        alignSelf: 'flex-start',
        color: '#FFFFFF'

    },
    imageContainer: {
        width: Dimensions.get('window').width,
        height: verticalScale(276),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: -58,
        flexDirection: 'row',
    },
    image: {
        // flex:2,
        height: verticalScale(417),
        width: scale(140),
        resizeMode: 'contain',
        alignSelf: 'center',

        // alignContent:'center'
    },
    title: {
        fontSize: 22,
        color: '#202E2E'
    },
    checkBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginVertical: 5
    },

    checkBox: {
        width: scale(15),
        height: verticalScale(15),
        borderWidth: 1,
        marginHorizontal: 10
    },
    checkBoxText: {
        textDecorationLine: 'underline',
        color: '#0675C1BF'
    },
    phoneNumContainer: {
        flexDirection: 'row',
        // alignSelf: 'stretch',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    belowButtonMsg: {
        color: '#000000',
        fontWeight: 'bold'
    },
    logosContainer: {
        width: scale(150),
        height: verticalScale(40),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: verticalScale(23),

        // backgroundColor:'red'
    },
    forgotTextContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginVertical: verticalScale(20),
    },
    forgotText: {

        color: '#03AD53',
        // marginRight:25
        // flexDirection:'row'
    }


});

export default LoginScreen;