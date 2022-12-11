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
const countries = [
    { country: 'Egypt', source: require('../../assets/photos/Egyptt.png') },
    { country: 'Canada', source: require('../../assets/photos/Canada.png') },
    { country: 'Ireland', source: require('../../assets/photos/Ireland.png') },
    { country: 'Australia', source: require('../../assets/photos/Australia.png') }]

const LoginScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false)
    return <SafeAreaView style={styles.viewContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View
                style={styles.imageContainer}>
                <Image
                    source={require('../../assets/photos/Group7193.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{strings.resetPassword}</Text>
                <Text style={styles.subtitle}>{strings.resetPasswordMsg}</Text>

                <Input
                    password={true}
                    source={require('../../assets/photos/Group7193.png')}
                    label={strings.password} />
                <Input
                    password={true}
                    source={require('../../assets/photos/Group7193.png')}
                    label={strings.confirmPassword} />

                <GreenButton color='#03AD53' title={strings.setPasswordButton} onPress={() => { navigation.navigate('login') }} />
                {/* <Text style={styles.belowButtonMsg}>
                    {strings.dontHaveAccount}!<Text style={{ color: '#03AD53' }} onPress={() => { navigation.navigate('loginStack', { screen: 'signup' }) }}> {strings.registerNow}</Text>
                </Text> */}
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
        // justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 28,
        borderTopLeftRadius: 28,
        paddingVertical: 30,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        alignSelf: 'stretch',
        // justifyContent:'center'
    },
    imageContainer: {
        width: Dimensions.get('window').width,
        height: verticalScale(276),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginBottom: -58
    },
    image: {
        height: verticalScale(417),
        width: scale(140),
        resizeMode: 'contain'
    },
    skipButton: {
        marginLeft: 19,
        marginTop: 34,
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
    },
    subtitle: {
        color: '#091545',
        opacity: 74,
        alignSelf: 'center',
        // width: scale(298),
        marginVertical: verticalScale(15),
        // marginHorizontal:'auto'
        // backgroundColor:'red'

    }


});

export default LoginScreen;