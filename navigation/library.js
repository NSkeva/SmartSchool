import React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';


export default function Library({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Library</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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