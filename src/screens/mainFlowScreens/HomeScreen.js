import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, ScrollView, Image, TextInput, Dimensions, FlatList, I18nManager } from "react-native";
import GreenButton from "../../components/greenButton";
import Input from "../../components/input";
import { scale, verticalScale } from "../../helper/scaling";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getCategoriesList, getProducts, changeProductStatus, getFavList, addToCart } from "../../redux/actions/HomeScreenAction";
import CategoryItem from "../../components/categoryItem";
import strings from "../../localization";
import Header from "../../components/header";
import ProductItem from "../../components/productItem";
import HorizontalList from "../../components/horizontalList";
import VoucherList from "../../components/voucherList";
import { updateSearchData } from "../../redux/actions/SearchScreenAction";
// import { Shadow } from 'react-native-shadow-2';



const HomeScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const categories = useSelector((state) => state?.HomeScreen?.categories);
    const productList = useSelector((state) => state?.HomeScreen?.productList);
    const fitlerdProductList = productList.filter((item) => { return item.type === selectedCategory })
    const bestSellingProductList = productList.filter((item) => { return item.bestSelling === true })
    const saleList = productList.filter((item) => { return item.sale === true })

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const renderCategories = ({ item }) => {
        return (
            <TouchableOpacity
                style={selectedCategory === item.name ? [styles.categoryContainer, { borderColor: '#03AD53', }] : styles.categoryContainer}
                onPress={() => {
                    setSelectedCategory(item.name)
                }}>
                <Image source={item.source} />
                <Text style={styles.categoryName}>{item.name}</Text>
            </TouchableOpacity>)
    }
    const ListHeaderComponent = () => {
        return (
            <View >
                <CategoryItem
                    categories={categories}
                    navigation={navigation}
                    renderCategories={renderCategories}
                    // selectedCategory={selectedCategory}
                    searchData={{ title: selectedCategory, type: 'productList' }}
                />
            </View>)
    }
    const renderSection1 = ({ item }) => {
        return (
            <ProductItem
                item={item}
                navigation={() => { navigation.navigate('itemDetail', { id: item.id }) }}
                changeProductStatus={() => dispatch(changeProductStatus(item, item.like))}
                addToCart={() => dispatch(addToCart(item))} />)
    }
    const ListFooterComponent = () => {
        return (
            <>
                <HorizontalList
                    navigation={navigation}
                    data={bestSellingProductList}
                    title={strings.bestSelling}
                    horizontal={true}
                    searchData={{ title: strings.bestSelling, type: 'bestSelling' }}
                />
                <VoucherList
                    navigation={() => { navigation.navigate('itemDetail') }}
                />
                <HorizontalList
                    navigation={navigation}
                    data={saleList}
                    title={strings.latestDiscounts}
                    horizontal={true}
                    searchData={{ title: strings.discounts, type: 'discount' }}
                />
            </>)
    }
    return (
        <SafeAreaView style={styles.viewContainer}>
            <Header
                title={'jjgjjgjgj'}
                HomePage={true}
                navigation={() => navigation.navigate('notify')}
            />
            <View style={styles.shippingBannar}>
                <Text style={styles.shippingText}>{strings.freeShipping}</Text>
            </View>
            <TouchableOpacity
                style={styles.saleContainer}>
                <Image style={styles.saleImage} source={require('../../assets/photos/bannerFoods.png')} />
            </TouchableOpacity>
            <View style={styles.searchBarContainer}>
                <Input placeholder={strings.whatAreYouLookingFor} source={require('../../assets/photos/searchBar.png')} />
            </View>

            {/* <CategoryItem categories={categories} navigation={navigation} /> */}
            {/* <ProductItem onPress={() => { navigation.navigate('itemDetail') }} /> */}

            {/* <Input placeholder={'what are you looking for?'} source={require('../../../assets/photos/searchBar.png')} /> */}
            < FlatList
                style={styles.subContainer}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
                key={item => item.id}
                data={!selectedCategory ? productList : fitlerdProductList.slice(0, 4)}
                renderItem={renderSection1}
                numColumns={2}
                // contentContainerStyle={productList.length > 0 ? { flexGrow: 1, alignItems: 'space-between' } : null}
                contentContainerStyle={!productList?.length && { flexGrow: 1, alignItems: 'stretch', }}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
            />
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexGrow: 1
    },
    subContainer: {
        // flexGrow: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#03AD53',
        shadowColor: '#00000029',
        width: Dimensions.get('window').width,
        height: 60,
        paddingHorizontal: 16
    },
    headerLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        marginTop: 12,
        paddingRight: 15
    },
    image: {
        // marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
        color: 'white'
    },
    shippingBannar: {
        backgroundColor: 'black',
        width: Dimensions.get('window').width,
        height: verticalScale(25),
        alignItems: 'center',
        justifyContent: 'center'
    },
    shippingText: {
        color: 'white',
        fontSize: 13
    },
    saleContainer: {
        marginHorizontal: scale(15),
        marginVertical: verticalScale(13),
        // resizeMode: 'contain',
    },
    saleImage: {
        width: '100%',
        resizeMode: 'contain'
    },
    searchBarContainer: {
        opacity: 70,
        flexDirection: 'row',
        alignSelf: 'stretch',
        borderRadius: 3,
        marginHorizontal: scale(15),
        marginBottom: verticalScale(10)
    },
    categoriesSection: {
        // width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginVertical: verticalScale(20),
    },
    categoriesList: {
        // backgroundColor: 'red',
        flexGrow: 1
    },
    categoryContainer: {
        width: scale(64),
        // height: verticalScale(64),
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        shadowColor: '#00000021',
        shadowRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: scale(16),
        borderWidth: 1,
        borderColor: '#00000021',

        // padding: 2
    },
    categoryName: {
        color: '#0B0B0B',
        fontSize: 10,
        marginBottom: 5
    },
    allYouNeed: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: verticalScale(15),
        paddingHorizontal: 16

        // backgroundColor: 'red',
        // marginRight:32
    },
    showAllButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: scale(95),
        height: verticalScale(30),
        borderColor: '#03AD53',
        borderWidth: 1,
        borderRadius: 5,
        // marginRight:30
    },
    showAllText: {
        color: '#03AD53',
        fontSize: 12,
        marginHorizontal: 2
    },
    allYouNeedText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15

    },
    ImageTransform: {
        transform: I18nManager.isRTL ? [{ scaleX: 1 }] : [{ scaleX: -1 }]
    },
    categoriesList: {
        // backgroundColor: 'red',
        maxHeight: verticalScale(200),
        flexGrow: 1,
        paddingHorizontal: 10,

    },
})

export default HomeScreen;