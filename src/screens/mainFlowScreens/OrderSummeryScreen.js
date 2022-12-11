import React, { useState } from "react";
import { View, StyleSheet, Text, Button, SafeAreaView, TextInput } from 'react-native';
import Modal from "react-native-modal";


const OrderSummeryScreen = ({ navigation }) => {
    const [show, setShow] = useState(false)

    return (

        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <Modal
                transparent={true}
                isVisible={show}
                onRequestClose={() => {

                    setShow(!show)
                }}
            >
                <View
                    onPress={() => {
                        setShow(!show)
                        console.log('setShow(false)')
                    
                    }}
                    style={styles.detailedSearchBody}                
                >
                    <View style={styles.detailedSearchContainer}>
                        <Text>Fruits</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="fruit"

                        />
                        <Text>City</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="city"

                        />
                        <Button style={styles.button} title="keep shopping " onPress={() => {
                            navigation.navigate('home');
                            setShow(!show);
                        }} />
                        <Button style={styles.button} title="Track Order" onPress={() => {
                            navigation.navigate('followOrder')
                            setShow(!show)
                        }} />
                    </View>

                </View>



            </Modal>


            <View style={styles.searchContainer}>
                <Button
                    title="Buy!"
                    onPress={() => setShow(!show)}
                />
                <Button
                    title="Go back"
                    onPress={() => navigation.goBack()}
                />
            </View >



        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        // justifyContent: "center",
        alignItems: 'center',

    },
    detailedSearchContainer: {
        justifyContent: 'space-evenly',
        width: 327,
        height: 470,
        // marginTop: 327,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10

    }
    ,
    button: {
        borderRadius: 10
    },
    detailedSearchBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red'
    }
});
export default OrderSummeryScreen;
