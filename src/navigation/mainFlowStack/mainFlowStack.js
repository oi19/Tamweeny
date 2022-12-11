import * as React from 'react';
import { Text, Pressable, View, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { I18nManager } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setPageNum } from "../../../src/redux/actions/FollowOrderScreenAction";

import FavScreen from '../../screens/mainFlowScreens/FavScreen'
import AddressScreen from '../../screens/mainFlowScreens/AddressScreen';
import NotifScreen from '../../screens/mainFlowScreens/NotifScreen';
import OrderScreen from '../../screens/mainFlowScreens/OrdersScreen';
// import ForgotScreen3 from '../../screens/loginScreens/ForgetScreen3';
import ContactScreen from '../../screens/mainFlowScreens/ContactScreen';
import AboutuS from '../../screens/mainFlowScreens/AboutUsScreen';
import LangScreen from '../../screens/mainFlowScreens/LangScreen';
import UsernameScreen from '../../screens/mainFlowScreens/UsernameScreen';
import DrawerScreen from '../../screens/mainFlowScreens/DrawerScreen';
import BottomTabNav from '../bottomTabNav/bottomTabNav'
import ItemDetailScreen from '../../screens/mainFlowScreens/ItemDetailScreen';
import SettingsScreen from '../../screens/mainFlowScreens/SettingsScreen';
import ChangePassScreen from '../../screens/mainFlowScreens/ChangePassScreen'
import ChangeAddressScreen from '../../screens/mainFlowScreens/ChangeAddressScreen';
import TopTabNav from '../topTabNav/topTabNav';
import FollowOrderScreen2 from '../../screens/mainFlowScreens/FollowOrderScreen2';
import OrderSummeryScreen from '../../screens/mainFlowScreens/OrderSummeryScreen';
import strings from '../../localization';


const Stack = createStackNavigator();

function MainFlowStack() {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const pageNum = useSelector((state) => state?.FollowOrderScreen?.pageNum);

    const onPress = () => {
        if (pageNum !== 1) {
            dispatch(setPageNum(pageNum - 1))
        }
        if (pageNum === 1) {
            dispatch(setPageNum(1))
            navigation.navigate('orderSummery')
        }
    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeftContainerStyle: { backgroundColor: '#03AD53' },
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#03AD53', elevation: 0 },
                headerTintColor: 'white',

                headerBackImage: () => (<Image
                    source={require('../../assets/photos/Backbutton.png')}
                    style={{ height: 12, width: 6, transform: !I18nManager.isRTL ? [{ scaleX: -1 }] : [{ scaleX: 1 }] }}
                />)
            }}>
            <Stack.Screen options={{ headerShown: false }} name="bottomTabNav" component={BottomTabNav} />
            <Stack.Screen name="fav" component={FavScreen} />
            <Stack.Screen name="drawer" component={DrawerScreen} />
            <Stack.Screen name="username" component={UsernameScreen} options={{ headerTitle: ' Profile' }} />
            <Stack.Screen name="contact" component={ContactScreen} />
            <Stack.Screen name="aboutUs" component={AboutuS} />
            <Stack.Screen name="settings" component={SettingsScreen} />
            <Stack.Screen name="lang" component={LangScreen} />
            <Stack.Screen name="address" component={AddressScreen} options={{ headerTitle: ' My Addresses' }} />
            <Stack.Screen name="orders" component={OrderScreen} options={{ headerTitle: ' My Orders' }} />
            <Stack.Screen name="notify" component={NotifScreen} options={{ headerTitle: strings.notifications }} />
            <Stack.Screen name='itemDetail' component={ItemDetailScreen} />
            <Stack.Screen name='changePass' component={ChangePassScreen} options={{ headerTitle: 'Change  Password' }} />
            <Stack.Screen name='changeAddress' component={ChangeAddressScreen} />
            <Stack.Screen name='orderSummery' component={OrderSummeryScreen} />
            <Stack.Screen name='followOrder' component={FollowOrderScreen2} options={{
                headerStyle: { backgroundColor: '#03AD53' }, headerTintColor: 'white',
                headerTitle: 'Follow Order', headerLeft: () => (
                    <Pressable
                        onPress={() => onPress()}
                        style={{ marginLeft: 10 }}
                    >
                        <Image
                            source={require('../../assets/photos/Backbutton.png')}
                            style={{
                                height: 12, width: 6,
                                transform: !I18nManager.isRTL ? [{ scaleX: -1 }]
                                    : [{ scaleX: 1 }]
                            }}
                        />
                    </Pressable>)

            }} />
            <Stack.Screen name='topTabNav' component={TopTabNav} />
        </Stack.Navigator>
    );
}

export default MainFlowStack;