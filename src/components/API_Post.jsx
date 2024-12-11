/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const API_Post = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
    });

    const handleInput = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:3000/users', formData);
            console.log(response);
            Alert.alert('Success!', `Data Submitted Successfuylly ${response}`);
            setFormData({
                id: '',
                name: '',
                email: '',
            });
        } catch (error) {
            Alert.alert('Error', 'Unable to submit');
        }

    };

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                }}
            >
                API_Post Component
            </Text>

            <View>
                <TextInput
                    placeholder="Enter ID"
                    value={formData.id}
                    onChangeText={(value) => handleInput('id', value)}
                />
                <TextInput
                    placeholder="Enter name"
                    value={formData.name}
                    onChangeText={(value) => handleInput('name', value)}
                />
                <TextInput
                    placeholder="Enter email"
                    value={formData.email}
                    onChangeText={(value) => handleInput('email', value)}
                />
                <Button
                    title="Submit"
                    onPress={() => handleSubmit()}
                />
            </View>
        </View>
    );
};

export default API_Post;
