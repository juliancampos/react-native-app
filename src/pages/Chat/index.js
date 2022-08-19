import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import io from 'socket.io-client';

export default function Chat() {
  const socketRef = useRef();
  const messageBody = useRef();
  const [message, setMessage] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);

  const sendMessage = () => {
    socketRef.current.emit('message', message);
    setMessageHistory([ ...messageHistory, message ]);
    printMessage(message);
    setMessage('');
  };

  useEffect(() => {
    socketRef.current = io('http://localhost:3000');
    socketRef.current.on('teste', (data) => console.log(data));
    // socketRef.current.on('messages', (messages) => setMessageHistory([...messageHistory, messages ]));
  });

  const printMessage = (message) => messageBody.current.innerHTML += `<div>${message}</div>`;

  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}>Chat IO!</Text>
      </Animatable.View>

      <div ref={messageBody} />

      <TextInput
        placeholder='Digite aqui ...'
        style={styles.input}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={sendMessage}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a690'
  },
  logo: {
    flex: 1
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: '#a1a1a1',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#38a69d',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  }
})
