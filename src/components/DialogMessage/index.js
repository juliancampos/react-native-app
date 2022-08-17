import React from 'react';
import { Alert } from 'react-native';

export default function DialogMessage() {
  return Alert.alert(
    "Falha ao cadastrar usuário!!!!",
    'error.messageeee',
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK"}
    ]
  )
}
