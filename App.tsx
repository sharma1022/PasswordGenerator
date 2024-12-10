import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min 4 characters')
    .max(16, 'Should be max 16 characters')
    .required('Length is required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
