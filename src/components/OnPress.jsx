/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const OnPress = () => {
    const [name, setName] = useState('Taaib');
    const handlePress = (data) => {
        console.warn("hi, " + name);
        setName((prev) => {
            return prev === "Taaib" ? "Saqib" : "Taaib";
        });
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

            {/* <Button title="Change Text" onPress={handlePress} /> */}
            <Button title="Change Text" onPress={() => handlePress()} />
        </View>
    );
};

export default OnPress;
