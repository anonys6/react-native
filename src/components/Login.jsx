/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import { Dimensions, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
const { width, height } = Dimensions.get('window');

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email);
        console.log(password);

        setEmail('');
        setPassword('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#ccc"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#ccc"
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: '',
        alignItems: 'center',
        padding: 16,
        height: height,
        width: width,
        backgroundColor: '#f5f5f5',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 12,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        color: '#222'
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#007BFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Login;