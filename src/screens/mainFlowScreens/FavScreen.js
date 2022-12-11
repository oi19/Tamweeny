import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import HorizontalList from "../../components/horizontalList";
import strings from "../../localization";

const FavScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const productList = useSelector((state) => state?.HomeScreen?.productList);
    const favList = productList.filter((item)=>{return item.like})
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HorizontalList
                navigation={navigation}
                data={favList}
                // searchData={{ title: strings.bestSelling, type: 'bestSelling' }}
                horizontal={false}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default FavScreen;