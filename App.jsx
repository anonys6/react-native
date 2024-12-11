/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import First from './src/components/First';
import JSX from './src/components/JSX';
import OnPress from './src/components/OnPress';
import Props from './src/components/Props';
import InputText from './src/components/InputText';
import Styling from './src/components/Styling';
import FlatList from './src/components/FlatListScreen';
import FlatListScreen from './src/components/FlatListScreen';
import SectionListScreen from './src/components/SectionListScreen';
import Login from './src/components/Login';
import ContactListScreen from './src/screens/ContactList/ContactListScreen';
import Grid from './src/components/Grid';
import Loader from './src/components/Loader';
import UseRef from './src/components/UseRef';
import DialogModal from './src/components/DialogModal';
import AlertExample from './src/components/AlertExample';
import API_Get from './src/components/API_Get';
import API_Post from './src/components/API_Post';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Button title="Press here" /> */}
      {/* <First /> */}
      {/* <JSX /> */}
      {/* <OnPress /> */}
      {/* <Props /> */}
      {/* <InputText /> */}
      {/* <Styling /> */}
      {/* <FlatListScreen /> */}
      {/* <SectionListScreen /> */}
      {/* <Login /> */}
      {/* <ContactListScreen /> */}
      {/* <Grid /> */}
      {/* <Loader /> */}
      {/* <UseRef /> */}
      {/* <DialogModal /> */}
      {/* <AlertExample /> */}
      {/* <API_Get /> */}
      <API_Post />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default App;
