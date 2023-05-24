import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import LogoCuida from '../components/LogoCuida';
import NavigateSubmitButton from '../components/NavigateSubmitButton';
import CustomTextInput from '../components/CustomInput';
import CustomPasswordInput from '../components/CustomInputPsswrd';
import BackButton from '../components/BackButton';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <BackButton />
      <LogoCuida></LogoCuida>
      <View style={styles.form}>
        <Text style={styles.login}>Login{'\n'}</Text>
        <Text style={styles.welcome}>Bem vindo de volta!</Text>
        <View style={{ marginTop: 20 }}>
          <CustomTextInput label="E-mail" 
          value={email} onChangeText={setEmail} 
          placeholder="exemplo@mail.com" />
          <CustomPasswordInput
            label="Senha"
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <NavigateSubmitButton texto="Entrar" mail={email} psswrd={password} screenRoute="Perfil" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  form: {
    marginLeft: '5%',
  },
  welcome: {
    color: '#64748B',
    fontSize: 20,
  },
  login: {
    fontSize: 30,
    color: '#191D23',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
});

export default LoginScreen;