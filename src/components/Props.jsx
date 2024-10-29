/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import Child from './Child';

const Props = () => {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                }}
            >
                Props Component
            </Text>

            <Button title="Counter" onPress={() => setCount(count + 1)} />

            <Child count={count} />
        </View>
    );
};

export default Props;
