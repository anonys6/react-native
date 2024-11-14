// /* eslint-disable no-trailing-spaces */
import { View, Text, StyleSheet, SectionList } from 'react-native';
import React from 'react';

const sectionData = [
    {
        id: 1,
        title: 'Fruits',
        data: [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Banana' },
            { id: 3, name: 'Cherry' },
        ],
    },
    {
        id: 2,
        title: 'Vegetables',
        data: [
            { id: 1, name: 'Carrot' },
            { id: 2, name: 'Drumstick' },
            { id: 3, name: 'Eggplant' },
        ],
    },
    {
        id: 3,
        titile: 'Flowers',
        data: [
            { id: 1, name: 'Rose' },
            { id: 2, name: 'Lily' },
            { id: 3, name: 'Lotus' },
        ],
    },
];

const SectionListScreen = () => {
    const renderList = ({ item }) => (
        <View style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    );

    const renderSectionHeader = ({ section }) => (
        <View>
            <Text style={styles.text}>{section.title}</Text>
        </View>
    );



    return (
        <View>
            <SectionList
                sections={sectionData}
                renderItem={renderList}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default SectionListScreen;

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
