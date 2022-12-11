import React from "react";
import { Button, StyleSheet, Text ,View} from "react-native";




const OrderScreen = ({ route,navigation }) => {
    const msg = route.params
    console.log(msg)
    return <View>
        <Text>THIS IS Order page</Text>
        {
            msg ?
                <Button title="Go Home"
                onPress={()=>{navigation.navigate('home')}}
                /> :
                null
        }
    </View> 
};

const styles = StyleSheet.create({});

export default OrderScreen;