import * as React from 'react';
import { Text, Pressable, Image, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FavScreen from '../../screens/mainFlowScreens/FavScreen'
import HomeScreen from '../../screens/mainFlowScreens/HomeScreen'
import SearchScreen from '../../screens/mainFlowScreens/SearchScreen';
import BusketScreen from '../../screens/mainFlowScreens/BusketScreen';
import DrawerScreen from '../../screens/mainFlowScreens/DrawerScreen';
import { useSelector } from 'react-redux';

import { I18nManager } from 'react-native';
import strings from '../../localization';
const Tab = createBottomTabNavigator();

function BottomTabNav() {
    const title = useSelector((state) => state?.SearchScreen?.sectionTitle);
    console.log(title)

    return (
        <Tab.Navigator initialRouteName='home' screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#03AD53', elevation: 0 },
            headerTintColor: 'white',
        }}>
            <Tab.Screen name='fav' component={FavScreen} options={{ title: 'Fav', tabBarIcon: () => (<Image source={require('../../assets/photos/star.png')} />), headerTitle: strings.favourite }} />
            <Tab.Screen name='busket' component={BusketScreen} options={{ title: 'Busket', tabBarIcon: () => (<Image source={require('../../assets/photos/shoppingCart.png')} />) }} />
            <Tab.Screen name='home' component={HomeScreen} options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: () => (<Image source={require('../../assets/photos/home.png')} />),
            }} />
            <Tab.Screen name='search' component={SearchScreen} options={{ title: "Search", tabBarIcon: () => (<Image source={require('../../assets/photos/search.png')} />), headerTitle: !title ? strings.search : title, }} />
            <Tab.Screen name='drawer' component={DrawerScreen} options={{ title: 'Account', tabBarIcon: () => (<Image source={require('../../assets/photos/Group3.png')} />) }} />
        </Tab.Navigator>
    );
}

export default BottomTabNav;

