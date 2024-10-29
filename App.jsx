/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, color: '#fff' }}>Name: Saqib</Text>
      <Text style={{ fontSize: 30, color: '#fff' }}>Software Engineer</Text>
      <Text style={{ fontSize: 30, color: '#fff' }}>Mobile App Developer</Text>
      <Button title="Press here" />
    </View>
  );
};

export default App;
