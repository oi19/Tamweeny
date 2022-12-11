import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "../../helper/scaling";
import { Shadow } from 'react-native-shadow-2';
import strings from "../../localization";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { changeProductRate, changeProductStatus, addToCart } from "../../redux/actions/HomeScreenAction";
import GreenButton from "../../components/greenButton";




const ItemDetailScreen = ({ route }) => {
    const [numberOfItem, setNumberOfItem] = useState(1)
    const id = route.params.id
    const rate = []
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const productList = useSelector((state) => state?.HomeScreen?.productList);
    const item = productList.filter((item) => { return item.id === id })[0]
    for (let x = 1; x <= 5; x++) {
        rate.push({
            id: x,
            source: x <= item?.rate ? require('../../assets/photos/favourite-31.png')
                : require('../../assets/photos/favourite-31-1.png')
        })
    }
    return <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.priceTag}>
            <Text style={styles.priceTagText}>{item?.price} usd a piece</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={item?.source} />
            <View style={styles.shadowContainer}>
                <Shadow distance={10} startColor={'#00000034'}>
                    <View style={styles.Shadow} />
                </Shadow>
            </View>
        </View>
        <View style={styles.buttonSectionContainer}>
            <TouchableOpacity>
                <Image style={styles.shareButton} source={require('../../assets/photos/Group52.png')} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.likeButtonContainer}
                onPress={() => dispatch(changeProductStatus(item))}>
                <Image style={styles.likeButton}
                    source={item?.like ? require('../../assets/photos/like.png') :
                        require('../../assets/photos/unlike.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{item?.name}</Text>
            </View>
            <View >
                <Text style={styles.description}>
                    {strings.voucherMsg}
                    {strings.voucherMsg}
                </Text>
            </View>
        </View>
        <View style={styles.ratingSection}>
            <View style={styles.starsContainer}>
                {
                    rate.map((rate) => {
                        return <TouchableOpacity
                            style={styles.starContainer}
                            onPress={() => { dispatch(changeProductRate(item, rate.id)) }}                        >
                            <Image source={rate.source} />
                        </TouchableOpacity>
                    })
                }
            </View>
            <Text style={styles.ratingText}>Add Rating</Text>
        </View>
        <View style={styles.amountSection}>
            <View style={{ flexDirection: 'row' }}>
                <Text>Amount</Text>
                <View style={{ marginHorizontal: 20 }}>
                    <Shadow startColor={'#00000019'}>
                        <View style={styles.amountContainer}>
                            <TouchableOpacity
                                onPress={() => setNumberOfItem(numberOfItem + 1)}>
                                <Text>+</Text>
                            </TouchableOpacity>
                            <Text>{numberOfItem}</Text>
                            <TouchableOpacity
                                onPress={() => setNumberOfItem(numberOfItem > 1 ? (numberOfItem - 1) : 1)}>
                                <Text>-</Text>
                            </TouchableOpacity>
                        </View>
                    </Shadow>
                </View>
            </View>
            <Text>{numberOfItem * item?.price} eg</Text>
        </View>
        <View style={styles.buttonSection}>
            <View style={{ flex: 1 }}>
                <GreenButton title='Buy Now' color={'#F9B408'} />

            </View>
            <TouchableOpacity
                style={styles.busketButton}
                onPress={() => dispatch(addToCart(item?.id))}
            >
                <Text style={styles.busketText}>add To cart</Text>
                <Image source={require('../../assets/photos/cart.png')} />
            </TouchableOpacity>
        </View>
    </SafeAreaView >
};

const styles = StyleSheet.create({
    sectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    likeButtonContainer: {
        width: scale(34),
        height: verticalScale(34),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9f3e5',
        borderRadius: 100,
        opacity: 11,
        marginVertical: verticalScale(18)
    },
    likeButton: {
        resizeMode: 'contain'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(-70)
    },
    image: {
        width: scale(300),
        height: verticalScale(300),
        resizeMode: 'contain'
    },
    buttonSectionContainer: {
        alignSelf: 'flex-end',
        marginRight: scale(16),
        marginTop: verticalScale(-50)
    },
    priceTag: {
        alignSelf: 'flex-start',
        backgroundColor: 'red',
        marginTop: verticalScale(26),
        height: verticalScale(50),
        width: scale(135),
        backgroundColor: '#F9B40830',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceTagText: {
        color: '#F9B408',
        fontSize: 15,
        fontWeight: 'bold'
    },
    textContainer: {
        marginHorizontal: 16,
        marginVertical: verticalScale(10)
    },

    titleContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
    },
    title: {
        color: '#2E2E2E',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Almari'
    },
    description: {
        color: '#707070',
        fontSize: 14
    },
    Shadow: {
        width: scale(132),
        backgroundColor: '#00000034',
        height: verticalScale(8),
        borderRadius: 200,
    },
    shadowContainer: {
        marginTop: verticalScale(-40)
    },
    ratingSection: {
        flexDirection: 'row',
        marginHorizontal: scale(16)
    },
    ratingText: {
        color: '#03AD53',
        fontSize: 14,
        marginHorizontal: scale(20)
    },
    starContainer: {
        marginRight: scale(5)
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    amountSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale(16),
        marginVertical: verticalScale(5)
    },
    amountContainer: {
        flexDirection: 'row',
        width: scale(100),
        height: verticalScale(30),
        justifyContent: 'space-around',
        alignItems: 'center',

        // backgroundColor: 'red',
        // marginHorizontal: scale(20)
    },
    buttonSection: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale(16),
        // marginBottom: 10
        // marginLeft:15

    },
    busketButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        width: scale(120),
        height: verticalScale(44),
        borderWidth: 1,
        borderRadius: 3,
        marginLeft: scale(16),
        borderColor: '#03AD53'
    },
    busketText: {
        color: '#03AD53',
        fontSize: 15
    }

});


export default ItemDetailScreen;