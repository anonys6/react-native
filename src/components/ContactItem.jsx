import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../screens/ContactList/style';

const ContactItem = ({ name, email }) => {
    return (
        <View style={styles.contactItem}>
            <Text style={styles.name}>Name: {name}</Text>
            <Text style={styles.email}>Email: {email}</Text>
        </View>
    );
};

export default ContactItem;
