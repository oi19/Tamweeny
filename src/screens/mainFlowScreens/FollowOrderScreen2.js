import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView, Image, TouchableOpacity, BackHandler } from "react-native";
import OrderTracker from "../../components/orderTracker";
import { Dimensions } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setPageNum } from "../../redux/actions/FollowOrderScreenAction";

const imagesArray = [require('../../assets/photos/MaskGroup22.png'),
require('../../assets/photos/Layer2.png'),
require('../../assets/photos/foodandrestaurant.png')]

const FollowOrderScreen2 = () => {
    const [selectedPhase, setSelectedPhase] = useState(0)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.phasesContainer}>
                {

                    imagesArray.map((item, index) => {
                        return (
                            <View style={styles.seperatorView}>
                                <TouchableOpacity onPress={() => {
                                    setSelectedPhase(index)
                                }} style={selectedPhase != index ? styles.outerViewNotSelected : [styles.outerViewNotSelected, styles.outerAdditionalSelection]}>
                                    <View style={selectedPhase != index ? styles.innerrViewNotSelected : [styles.innerViewNotSelected, styles.innerAdditionalSelection]} />
                                </TouchableOpacity>
                                {
                                    index < 2 && <View style={styles.seperator} />
                                }
                            </View>
                        )
                    })

                }
            </View>
            <View>

                <Image
                    resizeMode={'contain'}
                    source={imagesArray[selectedPhase]}
                    style={styles.image}
                />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    phasesContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20
    },
    outerViewNotSelected: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    outerAdditionalSelection: {
        borderColor: 'green'
    },
    innerViewNotSelected: {

    },
    innerAdditionalSelection: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'green'
    },
    image: {
        height: 417,
        width: Dimensions.get('window').width - 40,
        alignSelf: 'center'
    },
    seperator: {
        width: Dimensions.get('window').width / 2.93,
        height: 1,
        backgroundColor: 'black'
    },
    seperatorView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    }
})

export default FollowOrderScreen2;