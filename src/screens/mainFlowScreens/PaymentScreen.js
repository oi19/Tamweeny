import React from "react";
import { View, StyleSheet, Text , Button } from "react-native";


const PaymentScreen = ({navigation}) => {
    return (<>
        <Text> this is PaymentScreen</Text>
        <Button
        title="Confirm"
        onPress={()=>{navigation.navigate('orderSummery')}}
        />
    </>)  
};

const styles = StyleSheet.create({});

export default PaymentScreen;