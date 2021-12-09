import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const SampleStyledComponent = styled.View`
  font-size: 50px;
  background-color: red;
`;

const Another = styled.Text`
  color: red;
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <SampleStyledComponent>
        <Text>Arsenal</Text>
      </SampleStyledComponent>
      <Another>MU</Another>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
