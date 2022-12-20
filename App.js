import React from 'react';
import {StatusBar, View, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text>The Expense Tracker App</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
