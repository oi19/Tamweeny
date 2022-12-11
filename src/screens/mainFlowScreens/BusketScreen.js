import React from "react";
import { StyleSheet, View, Text } from "react-native";


const BusketScreen = ({ navigation }) => {
    return (
        <View>
            <Text >busket screen</Text>
            <Text onPress={() => { navigation.navigate('topTabNav', { screen: 'delivery' }) }}>complete transaction</Text>
        </View>

    )
}
const styles = StyleSheet.create({})

export default BusketScreen;