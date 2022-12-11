import React, { useState } from "react";
import { StyleSheet, View, Image, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { Dimensions } from "react-native";
import { scale, verticalScale, moderateScale } from '../../helper/scaling'
import Input from "../../components/input";
import strings from "../../localization";
import GreenButton from "../../components/greenButton";
import SelectTextInput from "../../components/selectTextInput";



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

const SignupScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false)
    const [username, setUsername] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [checkBoxError, setCheckBoxError] = useState(false)
    const [showError, setShowError] = useState(false)


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
                <Text style={styles.title}>{strings.createNewAccount}</Text>
                <Input source={require('../../assets/photos/username.png')}
                    label={strings.username}
                    onChange={(username) => {
                        setUsername(username)
                        setShowError(false)
                    }}
                    term={username}
                />
                <View style={styles.phoneNumContainer}>
                    <Input label={strings.phoneNum}
                        phoneNum={true}
                        source={require('../../assets/photos/iphone.png')}
                        onChange={(phoneNum) => {
                            setPhoneNum(phoneNum)
                            setShowError(false)

                        }}
                        term={phoneNum} />
                    <SelectTextInput margin={17}
                        placeholder='codes'
                        data={codes} />
                </View>
                <Input
                    email={true}
                    source={require('../../assets/photos/email.png')}
                    label={strings.email}
                    onChange={(email) => {
                        setEmail(email)
                        setShowError(false)

                    }}
                    term={email} />
                <SelectTextInput
                    label={strings.city}
                    placeholder='select City'
                    data={countries}
                    onSelect={(city) => setCity(city)}
                    term={city} />
                <Input
                    password={true}
                    label={strings.password}
                    onChange={(password) => {
                        setPassword(password)
                        setShowError(false)
                    }}
                    term={password} />
                <Input
                    password={true}
                    label={strings.confirmPassword}
                    onChange={(confirmPassword) => {
                        setConfirmPassword(confirmPassword)
                        setShowError(false)
                    }}
                    term={confirmPassword}
                    condition={password !== confirmPassword}
                    errorMessage='Passwords do not match'
                />

                <View style={styles.checkBoxContainer}>
                    <Text style={styles.acceptThsese}>{strings.acceptThsese} <Text style={styles.checkBoxText}>{strings.terms}</Text></Text>
                    <TouchableOpacity
                        onPress={() => {
                            setSelection(!isSelected)
                            setCheckBoxError(false)
                        }}                    >
                        <View style={isSelected ? [styles.checkBox, { backgroundColor: 'red' }] : styles.checkBox} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'flex-start' }}>
                    {
                        !isSelected && checkBoxError ?
                            <Text style={{ color: 'red', fontSize: 12 }}>please Agree on the terms</Text>
                            : showError ? <Text style={{ color: 'red', fontSize: 12 }}>please Fill the empty fields</Text> :
                                null

                    }
                </View>
                <GreenButton color='#03AD53' title={strings.createNewAccount} onPress={() => {
                    isSelected && username.length > 3 && phoneNum.length == 10 && email.length && password === confirmPassword && password.length
                        ? navigation.navigate('varification', { title: strings.confirmCreatingNewAccount, subtitle: strings.sendCodeMsg })
                        : !isSelected
                            ? setCheckBoxError(true)
                            : setShowError(true)
                }} />
                <Text style={styles.belowButtonMsg}>
                    {strings.alreadyHaveAnAccount}!<Text style={{ color: '#03AD53' }} onPress={() => { navigation.navigate('loginStack', { screen: 'login' }) }}> {strings.login}</Text>
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
        marginTop: verticalScale(20)
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
    acceptThsese: {
        color: '#4D4D4D',
        opacity: 50,
        // marginb: verticalScale(10),

    },
    belowButtonMsg: {
        color: '#000000',
        fontWeight: 'bold'
    },
    errors: {
        alignSelf: 'flex-end'
    }


});

export default SignupScreen;