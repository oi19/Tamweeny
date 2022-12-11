import React, { useState,useEffect } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView ,Image,TouchableOpacity, BackHandler} from "react-native";
import OrderTracker from "../../../components/orderTracker";
import { Dimensions } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setPageNum } from "../../../src/redux/actions/FollowOrderScreenAction";

const FollowOrderScreen = () => {   

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const pageNum = useSelector((state) => state?.FollowOrderScreen?.pageNum);
    
   
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <OrderTracker pageNum={pageNum} />
            <TouchableOpacity
                onPress={() => {
                    pageNum === 3 ?
                        navigation.navigate('orders')                         
                        :
                    dispatch(setPageNum(pageNum + 1))
                }}>
                <Image
                    source={require('../../../assets/photos/MaskGroup27.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
        </SafeAreaView>
          
     )
}

const styles = StyleSheet.create({
     image: {
        height: 417,
        width: Dimensions.get('window').width,
        // backgroundColor:'red'
    }
})

export default FollowOrderScreen;