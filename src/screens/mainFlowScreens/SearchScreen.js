import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, FlatList, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import SearchBar from "../../components/searchBar";
import Header from "../../components/header";
import Input from "../../components/input";
import { scale, verticalScale } from '../../helper/scaling'
// import strings from "../../localization";
import strings from "../../localization";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import HorizontalList from "../../components/horizontalList";
import ProductItem from "../../components/productItem";
import { addToCart, changeProductStatus } from "../../redux/actions/HomeScreenAction";
import { updateSearchData } from "../../redux/actions/SearchScreenAction";
import { NavigationEvents } from 'react-navigation';
import GreenButton from "../../components/greenButton";
import SelectTextInput from '../../components/selectTextInput'


const SearchScreen = () => {
    const [show, setShow] = useState(false)
    const [term, setTerm] = useState()
    const [specificTerm, setSpecificTerm] = useState()
    const [city, setCity] = useState()

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const productList = useSelector((state) => state?.HomeScreen?.productList);
    const title = useSelector((state) => state?.SearchScreen?.sectionTitle);
    const type = useSelector((state) => state?.SearchScreen?.sectionType);

    const fitlerdProductList =
        type?.length && !term?.length ?
            productList.filter((item) => {
                return item.type === title
            })
            : !type.length ?
                productList.filter((item) => {
                    return item.name === term
                })
                :
                productList.filter((item) => {
                    return item.name === term && item.type === title
                })
    const bestSellingProductList =
        type === 'bestSelling' ?
            !term?.length ?
                productList.filter((item) => { return item.bestSelling === true })
                : productList.filter((item) => { return item.bestSelling === true && item.name === term })
            : null

    const saleList =
        type === 'discount' ?
            !term?.length ?
                productList.filter((item) => { return item.sale === true })
                : productList.filter((item) => { return item.sale === true && item.name === term })
            : null
    
    const renderSection1 = ({ item }) => {
        return (
            <ProductItem
                item={item}
                navigation={() => { navigation.navigate('itemDetail', { id: item.id }) }}
                changeProductStatus={() => dispatch(changeProductStatus(item, item.like))}
                addToCart={() => dispatch(addToCart(item))} />)
    }
    return <SafeAreaView style={{ flexGrow: 1, backgroundColor: 'white' }}>
        <Modal
            onPress={() => {
                setShow(!show)
                console.log('black Mamba')
            }}
            transparent={true}
            isVisible={show}
            onRequestClose={() => {
                setShow(!show)

            }} >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <View style={styles.detailedSearchContainer}>
                    <Text>Fruits</Text>
                    <TextInput
                        value={specificTerm}
                        style={styles.textInput}
                        placeholder="fruit"
                        onChangeText={(term) => {
                            setSpecificTerm(term)
                            dispatch((updateSearchData(term, 'productList')))
                        }}
                    />
                    <Text>City</Text>
                    <TextInput
                        value={city}
                        style={styles.textInput}
                        placeholder="city"
                        onChangeText={(city) => { setCity(city) }}
                    />
                    <GreenButton color='#F9B408' title={strings.search} onPress={() => {
                        console.log(specificTerm)
                        setShow(!show)
                        setSpecificTerm()
                        setCity()
                        setTerm()
                    }} />
                    <GreenButton color='#F9B408' title="Cancel" onPress={() => {
                        setShow(!show)
                        setSpecificTerm()
                        setCity()
                    }} />

                </View>
            </View>
        </Modal>
        <View style={styles.searchContainer}>
            <View style={styles.searchBarContainer}>
                <TouchableOpacity
                    onPress={() => setShow(!show)}
                    style={styles.searchButton}
                >
                    <Image source={require('../../assets/photos/saerchIcon.png')} />
                </TouchableOpacity>
                <Input
                    onChange={(term) => setTerm(term)}
                    placeholder={strings.whatAreYouLookingFor}
                    source={require('../../assets/photos/searchBar.png')}
                    term={term}

                />
            </View>
            <View style={{ alignSelf: 'stretch', flex: 1 }}>

                {type === 'productList' || type === '' ?
                    <FlatList
                        style={styles.subContainer}
                        key={item => item.id}
                        data={fitlerdProductList}
                        renderItem={renderSection1}
                        numColumns={2}
                        // contentContainerStyle={productList.length > 0 ? { flexGrow: 1, alignItems: 'space-between' } : null}
                        contentContainerStyle={!fitlerdProductList?.length && { flexGrow: 1, alignItems: 'stretch', }}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
                    />
                    :
                    <HorizontalList
                        navigation={navigation}
                        data={type === 'discount' ? saleList : bestSellingProductList}
                        searchData={{ title: strings.bestSelling, type: 'bestSelling' }}
                        horizontal={false}
                    />

                }
            </View >
        </View >
    </SafeAreaView>



};




const styles = StyleSheet.create({
    searchContainer: {
        flexGrow: 1,
        alignItems: 'center',
        // marginBottom:20,
        // backgroundColor: 'red',
        // alignSelf:'stretch'

    },
    detailedSearchContainer: {
        justifyContent: 'space-evenly',
        width: 327,
        height: 470,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
    ,
    button: {
        borderRadius: 10
    },
    searchBarContainer: {
        opacity: 70,
        flexDirection: 'row',
        alignSelf: 'stretch',
        borderRadius: 3,
        marginHorizontal: scale(15),
        marginBottom: verticalScale(5),
        //  backgroundColor:'red',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    subContainer: {
        flexGrow: 1,
        // paddingBottom: 50,
        // backgroundColor: 'red',
        marginBottom: 20
    },
    searchButton: {
        width: scale(44),
        height: verticalScale(44),
        backgroundColor: '#F9B408',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16
    },
    image: {
        resizeMode: 'contain'
    }

});

export default SearchScreen;