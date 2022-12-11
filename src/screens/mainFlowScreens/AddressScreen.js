import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { Shadow } from "react-native-shadow-2";
import GreenButton from "../../components/greenButton";
import { scale, verticalScale } from "../../helper/scaling";
import { useSelector, useDispatch } from 'react-redux';
import { addAddress } from "../../redux/actions/UsernameScreenAction";


const AddressScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state?.UsernameScreen?.addresses)
    console.log('entered the address screen successfully ')
    return (<SafeAreaView style={{ flex: 1, backgroundColor: 'whtie' }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {
                data.map((item) => {
                    return (
                        <View style={{ paddingVertical: 5 }}>
                            <Shadow
                                distance={10}
                                startColor={'#00000009'}
                                radius={10} >
                                <View style={styles.addressContainer}>
                                    <View style={styles.topSection}>
                                        <Text style={styles.title}>Address {item.id}</Text>
                                        <TouchableOpacity
                                            style={styles.editButton}
                                            onPress={() => navigation.navigate('')}>
                                            <Text style={styles.editText}>Edit</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.address} numberOfLines={2}>{item.address}</Text>
                                </View>
                            </Shadow>
                        </View>
                    )
                })
            }
            <GreenButton title='Add New Address' color={'#F9B408'} />
        </ScrollView>
    </SafeAreaView>)
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: scale(16),
        paddingVertical: verticalScale(30),
        backgroundColor: 'white',
        // justifyContent: 'space-between',
        flexDirection: 'column',
    },

    addressContainer: {
        width: scale(330),
        height: verticalScale(168),
        borderRadius: 3,
        paddingHorizontal: scale(17),
        borderColor: '#E2E2E2',
        borderWidth: 0.6
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(25),

    },
    title: {
        color: '#383838',
        fontSize: 18
    },
    editText: {
        color: '#F9B408',
        fontSize: 14
    },
    address: {
        color: '#000000',
        fontSize: 16,
        marginVertical: verticalScale(17),
        width: scale(250)
    }

});

export default AddressScreen;