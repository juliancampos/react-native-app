import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import ButtonComponent from './ButtonComponent';
import TextInputComponent from './TextInputComponent';

export default function Login() {
  let [userName, setUserName] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  const onCall = (data) => {
    console.log('bla ', userName)
    Alert.alert(
      "Alert Title",
      userName,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInputComponent placeholder='login' secure={false} setValue={setUserName} />
        <TextInputComponent placeholder='password' secure={true} setValue={setUserPassword} />
      </View>
      <View>
        <ButtonComponent title='cancelar' onPress={onCall} />
        <ButtonComponent title='confirmar' onPress={onCall} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 50
  }
});
