import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Welcome() {
  return (
    <View>
      <Text style={styles.title}>Avisa App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color:'red',
    fontSize: 18
  }
});