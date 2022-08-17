import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function TextInputComponent(props) {
  const [username, onChangeUser] = React.useState('');
  return(
      <TextInput
        style={styles.input}
        secureTextEntry={props.secure}
        onChangeText={onChangeUser}
        placeholder={props.placeholder}
        value={username}
        onChange={(data) => props.setValue(data.target.value)}
      />
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    padding: 5,
    marginBottom: 10,
    width: 300
  }
});
