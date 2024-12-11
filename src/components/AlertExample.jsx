/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button, Alert } from 'react-native';
import React from 'react';

const showAlert = () => {
    Alert.alert(
        'Alert title',
        'Alert message',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('cancel'),
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => console.log('ok'),
            },
            {
                text: 'Sure',
                onPress: () => console.log('sure'),
            },
        ],
        { cancelable: true }
    );
};

const AlertExample = () => {
    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                }}
            >
                AlertExample Component
            </Text>
            <Button
                onPress={showAlert}
                title="Open Alert"
            />
        </View>
    );
};

export default AlertExample;
