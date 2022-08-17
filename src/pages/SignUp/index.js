import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Bugiganga from '../../services/Bugiganga';
import DialogMessage from '../../components/DialogMessage';

export default function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' style={styles.containerHeader}>
        <Text style={styles.message}>Cadastre-se!</Text>
      </Animatable.View>

      <Animatable.View animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput
          onBlur={(data) => setName(data.target.value)}
          placeholder='Informe seu nome ...'
          style={styles.input}
        />

        <Text style={styles.title}>Email</Text>
        <TextInput
          onBlur={(data) => setEmail(data.target.value)}
          placeholder='Informe seu email ...'
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          onBlur={(data) => setPassword(data.target.value)}
          placeholder='Informe sua senha ...'
          style={styles.input}
        />

        <Text style={styles.title}>Confirmarção da senha</Text>
        <TextInput
          placeholder='Informe sua senha ...'
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Bugiganga.postUser({ name, password, email })
              .then((result) => {
                if (result.status === 201) {
                  navigation.navigate('SignIn');
                }
              })
              .catch((error) => {
                DialogMessage()
              });
              // .catch((error) => Alert.alert(
              //   "Falha ao cadastrar usuário!",
              //   error.message,
              //   [
              //     {
              //       text: "Cancel",
              //       style: "cancel"
              //     },
              //     { text: "OK"}
              //   ]
              // ));
          }}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#38a69d'
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd:'5%'
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button: {
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText: {
    color: '#a1a1a1'
  }
})
