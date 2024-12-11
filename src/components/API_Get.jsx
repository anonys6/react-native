/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_Get = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // fetch('http://10.0.2.2:3000/users')
        //     .then(res => res.json())
        //     .then(data => console.log(data));

        axios.get('http://10.0.2.2:3000/users')
            .then(res => {
                setUsers(res.data);
            });
    }, []);

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                }}
            >
                API_Get Component
            </Text>
            <View>
                {
                    users.map((user) => (
                        <Text key={user.id}>{user.name}</Text>
                    ))
                }
            </View>
        </View>
    );
};

export default API_Get;
