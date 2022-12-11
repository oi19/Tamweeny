import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/loginScreens/LoginScreen';
import SignupScreen from '../../screens/loginScreens/SignupScreen';
import ForgotScreen from '../../screens/loginScreens/ForgotScreen';
import VarificationScreen from '../../screens/loginScreens/VarificationScreen';
import ResetPasswordScreen from '../../screens/loginScreens/ResetPasswordScreen';

const Stack = createStackNavigator();

function LoginStack() {
    return (
        <Stack.Navigator initialRouteName='login' screenOptions={{headerShown:false}} >
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="signup" component={SignupScreen} />
            <Stack.Screen name="forgot" component={ForgotScreen} />
            <Stack.Screen name="varification" component={VarificationScreen} />
            <Stack.Screen name="resetPassword" component={ResetPasswordScreen} />
        </Stack.Navigator>
    );
}

export default LoginStack;

