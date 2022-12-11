import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../../screens/mainFlowScreens/SettingsScreen';
import ChangePassScreen from '../../screens/mainFlowScreens/ChangePassScreen'
import AdressScreen from '../../screens/mainFlowScreens/AddressScreen';
import UsernameScreen from '../../screens/mainFlowScreens/UsernameScreen';

const Stack = createStackNavigator();

function SettingsStack() {
    return (
        <Stack.Navigator headerMode='none' initialRouteName='settings' >
            <Stack.Screen name="settings" component={SettingsScreen} />
            <Stack.Screen name="changePass" component={ChangePassScreen} />
            <Stack.Screen name="adress" component={AdressScreen} />
            <Stack.Screen name="username" component={UsernameScreen} />
        </Stack.Navigator>
    );
}

export default SettingsStack;

