import React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';


export default function MainMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Main Menu</Text>
      <Button
        title="Go to Library"
        onPress={() => navigation.navigate('Library')}
      />
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