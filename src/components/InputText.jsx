/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const InputText = () => {
    const [username, setUsername] = useState();

    const clearButton = () => {
        setUsername('');
    };

    return (
        <View
            style={{
                padding: 10,
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                }}
            >

                Input Text Component
            </Text>

            <TextInput
                style={{
                    fontSize: 20,
                    borderWidth: 2,
                    borderColor: 'grey',
                    margin: 10,
                    color: 'white',
                }}
                placeholder='Enter name'
                value={username}
                onChangeText={(e) => setUsername(e)}
            />

            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                }}
            >
                Username: {username}
            </Text>

            <Button title='Clear' onPress={clearButton} />
        </View>
    );
};

export default InputText;
