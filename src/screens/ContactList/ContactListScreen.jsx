
import { FlatList, Text } from 'react-native';
import React from 'react';
import { user } from './userDetails';
import ContactItem from '../../components/ContactItem';
import { styles } from './style';

const ContactListScreen = () => {
    const renderItem = ({ item }) => (
        <ContactItem name={item.name} email={item.email} />
    );

    return (
        <FlatList
            data={user}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<Text style={styles.header}>Contacts</Text>}
        />
    );
};

export default ContactListScreen;
