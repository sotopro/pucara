import database from '@react-native-firebase/database';

import React from 'react';
import {View, Text} from 'react-native';

const RealtimeDatabase = () => {
  database()
    .ref('/users/123')
    .set({
      name: 'Ada Lovelace',
      age: 31,
    })
    .then(() => console.warn('Data set.'))
    .catch(error => console.error('Error:', error));
  return (
    <View>
      <Text>Realtime Database</Text>
    </View>
  );
};

export default RealtimeDatabase;
