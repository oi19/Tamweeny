import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, Image, View, TouchableOpacity, ScrollView } from "react-native";
import { scale, verticalScale } from "../../helper/scaling";
import Input from '../../components/input'
import strings from "../../localization";
import GreenButton from '../../components/greenButton'

const userData = { username: 'Ahmed Ibrahim', phone: "+20 125 2225 555", email: 'AhmedIbra@gmail.com', city: 'Mansoura', gender: 'Male', birthday: '25/05/1990' }

const UsernameScreen = ({ navigation }) => {
    const data = Object.entries(userData).map(([k, v]) => `${k}_${v}`);
    const [username, setUsername] = useState(userData.username)
    const [phone, setPhone] = useState(userData.phone)
    const [email, setEmail] = useState(userData.email)
    const [city, setCity] = useState(userData.city)
    const [gender, setGender] = useState(userData.gender)
    const [birthday, setBirthday] = useState(userData.birthday)
    console.log(data)
    return <SafeAreaView style={{ flexGrow: 1, backgroundColor: 'white' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <View style={styles.imageContainer}>
                <Image style={styles.profilePic} source={require('../../assets/photos/profilePic2.png')} />
            </View>
            <View style={styles.dataContainer}>
                <Input pp={true} term={username} label={strings.username} onChange={(term) => { setUsername(term) }} />
                <Input pp={true} term={email} label={strings.email} onChange={(term) => { setUsername(term) }} />
                <Input pp={true} term={phone} label={strings.phoneNum} onChange={(term) => { setPhone(term) }} />
                <Input pp={true} term={city} label={strings.city} onChange={(term) => { setCity(term) }} />
                <Input pp={true} term={gender} label={strings.username} onChange={(term) => { setGender(term) }} />
                <Input pp={true} term={birthday} label={strings.username} onChange={(term) => { setBirthday(term) }} />
                <GreenButton color={'#F9B408'} title='Update Profile' onPress={() => { navigation.goBack() }} />
            </View>
        </ScrollView>



    </SafeAreaView>
};

const styles = StyleSheet.create({
    imageContainer: {
        width: scale(112),
        height: verticalScale(112),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: verticalScale(25),

    },
    profilePic: {
        width: scale(112),
        height: verticalScale(112),
        resizeMode: 'contain',
    },
    dataContainer: {
        flex: 1,
        marginHorizontal: scale(16),
        justifyContent: 'flex-start',
        // backgroundColor: 'red'
    }

});

export default UsernameScreen;