/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

const JSX = () => {
    let name = "Saqib";

    const getAge = () => {
        return 22;
    };

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                }}
            >
                Name: {name}
            </Text>

            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                }}
            >
                {getAge()}
            </Text>
        </View>
    );
};

export default JSX;
