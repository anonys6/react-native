// /* eslint-disable no-trailing-spaces */
import { View, FlatList, Text, StyleSheet } from 'react-native';
import React from 'react';

const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 22 },
    { id: 3, name: 'Doe', age: 26 },
    { id: 4, name: 'Smith', age: 23 },
    { id: 5, name: 'Alex', age: 24 },
];

const FlatListScreen = () => {
    const renderList = ({ item }) => (
        <View style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    );

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderList}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default FlatListScreen;

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 24,
    },
    container: {
        padding: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
    },

});
