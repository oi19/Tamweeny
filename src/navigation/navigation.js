import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import introStack from './introStack/introStack';
import loginStack from './loginStack/loginStack';
import MainFlowStack from './mainFlowStack/mainFlowStack';


const Stack = createStackNavigator();

function AppNav() {
    console.log('here')

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle:{headerTintColor:'white'}}} >
                <Stack.Screen options={{ headerShown: false }} name="introStack" component={introStack} />
                <Stack.Screen options={{ headerShown: false }} name="loginStack" component={loginStack} />
                <Stack.Screen options={{headerShown:false,headerTintColor:'white' }} name ='mainFlowStack' component={MainFlowStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNav;

