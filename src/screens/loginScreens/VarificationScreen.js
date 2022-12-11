import React, { useState } from "react";
import { StyleSheet, View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity, I18nManager } from 'react-native'
import { Dimensions } from "react-native";
import { scale, verticalScale, moderateScale } from '../../helper/scaling'
import Input from "../../components/input";
import strings from "../../localization";
import GreenButton from "../../components/greenButton";
import SelectTextInput from "../../components/selectTextInput";
import Logo from "../../components/logo";
import VarificationCode from "../../components/verificationCode";


const VarificationScreen = ({ navigation, route }) => {
    const [showError, setShowError] = useState(false)
    const [digit1, setDigit1] = useState(6)
    const [digit2, setDigit2] = useState()
    const [digit3, setDigit3] = useState()
    const [digit4, setDigit4] = useState()
    const code = [
        { id: 1, value: digit1, function: (num) => setDigit1(num) },
        { id: 2, value: digit2, function: (num) => setDigit2(num) },
        { id: 3, value: digit3, function: (num) => setDigit3(num) },
        { id: 4, value: digit4, function: (num) => setDigit4(num) },

    ]
    const { title, subtitle } = route.params
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
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <View style={styles.digitSectionContainer}>
                    {
                        code.map((item) => {
                            return (
                                <VarificationCode onChangeText={(term) => {
                                    item.function(term)
                                    setShowError(false)
                                }} term={item.value} />
                            )
                        })
                    }
                </View>
                <TouchableOpacity
                    onPress={() => { code.map((item) => { item.function(null) }) }}>
                    <Text style={{ color: '#0095FF' }}>Resend Code</Text>
                </TouchableOpacity>
                <View>
                    {
                        showError
                            ? <Text style={{ color: 'red' }}>Varificaiton Code is Incorrect</Text>
                            : null
                    }
                </View>
                <GreenButton color='#03AD53' title={strings.enter} onPress={() => {
                    code.filter((item) => { return item.value === undefined }).length ?
                        setShowError(true)
                        : title === strings.forgotPassword ?
                            navigation.navigate('resetPassword')
                            :
                            navigation.navigate('mainFlowStack')
                }} />

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
        paddingVertical: verticalScale(30),
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
        marginBottom: verticalScale(-58)
    },
    image: {
        height: verticalScale(417),
        width: scale(140),
        resizeMode: 'contain'
    },
    skipButton: {
        marginLeft: 19,
        marginTop: verticalScale(34),
    },
    title: {
        fontSize: 22,
        color: '#202E2E',
        // marginBottom:verticalScale(15)
        // backgroundColor:'red'
    },
    phoneNumContainer: {
        flexDirection: 'row',
        // alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between'
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

    },
    digitSectionContainer: {
        width: scale(285),
        height: verticalScale(60),
        flexDirection: 'row',
        transform: [{ scaleX: I18nManager.isRTL ? 1 : 1 }],
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: verticalScale(20)

    },


});

export default VarificationScreen;