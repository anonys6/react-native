/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

const Child = (props) => {
    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                }}
            >
                Child: {props.count}
            </Text>
        </View>
    );
};

export default Child;
