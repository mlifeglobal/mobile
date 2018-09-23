import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

/* eslint-disable */
export default props => (
  <View style={styles.container}>
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => props.navigation.navigate('Home')}
    >
      <Text>Inside Landing page. Tap to go to Home.</Text>
    </TouchableOpacity>
  </View>
);
