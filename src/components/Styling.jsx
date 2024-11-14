/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import styles from '../styles/styles';

const Styling = () => {
    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                }}
            >

                Styling Component
            </Text>
            <Text style={internal.textStyle}>Styling Component</Text>
            <Text style={styles.textStyle}>Styling Component</Text>

            <Text style={[internal.textStyle, { backgroundColor: 'crimson' }]}>Mix Styling</Text>

        </View>
    );
};

export default Styling;

const internal = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: '#0f0',
    },
});
