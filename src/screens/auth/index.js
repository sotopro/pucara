import auth from '@react-native-firebase/auth';
import React from 'react';

import {View, Text} from 'react-native';

auth()
  .createUserWithEmailAndPassword(
    'jane.doe@example.com',
    'SuperSecretPassword!',
  )
  .then(() => {
    console.warn('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.warn('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.warn('That email address is invalid!');
    }

    console.error(error);
  });

const Auth = () => {
  return (
    <View>
      <Text>Auth</Text>
    </View>
  );
};

export default Auth;
