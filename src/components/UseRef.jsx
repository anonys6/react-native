/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';

const UseRef = () => {
    const myRef = useRef();

    const handleRef = () => {
        myRef.current.setNativeProps({
            text: 'saqib',
        });
        myRef.current.focus();
    };
    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                }}
            >
                UseRef Component
            </Text>

            <TextInput
                ref={myRef}
                placeholder="Enter text"
            />
            <TouchableOpacity
                onPress={handleRef}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UseRef;
