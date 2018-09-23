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
      onPress={() => props.navigation.navigate('Landing')}
    >
      <Text>Inside Home page. Tap to go to Landing</Text>
    </TouchableOpacity>
  </View>
);
