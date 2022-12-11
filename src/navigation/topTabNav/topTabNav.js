import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AddressScreen from "../../screens/mainFlowScreens/AddressScreen";
import DeliveryScreen from "../../screens/mainFlowScreens/DeliveryScreen";
import PaymentScreen from "../../screens/mainFlowScreens/PaymentScreen";
import strings from "../../localization";


const screens = [
    { id: 1, name: "delivry", component: DeliveryScreen },
    { id: 2, name: "address", component: AddressScreen },
    { id: 3, name: "payment", component: PaymentScreen },
]

const Tab = createMaterialTopTabNavigator();

function TopTabNav() {
    const [isFocused, setIsFocused] = useState(strings.DeliveryScreen)
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: styles.TabNav, headerTintColor: 'white' }}>
            <Tab.Screen name="delivery" component={DeliveryScreen} option={{
                title: 'title',
                tabBarIcon: () => (<View style={{ backgroundColor: 'white' }}>
                    <TouchableOpacity style={{ backgroundColor: 'red' }}>
                        <Text>delivery</Text>
                    </TouchableOpacity></View>)
            }} />
            <Tab.Screen name="address" component={AddressScreen} />
            <Tab.Screen name="payment" component={PaymentScreen} />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    TabNav: {
        backgroundColor: '#03AD53',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        height: 95,
        tintColor: 'white'

    },
    unFocused: {
        color: '#FFFFFF',
        fontSize: 14
    },
    focused: {
        color: '#03AD53'
    }

})
export default TopTabNav;