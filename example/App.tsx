import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExposureNotification from 'react-native-exposure-notification';

export default function App() {
  ExposureNotification.sampleMethod('hello', 5, console.log);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
