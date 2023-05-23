import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import LogoCuida from '../components/LogoCuida'
import NavigationButton from '../components/NavigateButton';
import CustomTextInput from '../components/CustomInput';
import CustomPasswordInput from '../components/CustomInputPsswrd';
import BackButton from '../components/BackButton';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <BackButton/>
      <LogoCuida></LogoCuida>
      <View style={styles.form}>
      <Text style={styles.login}>Login{'\n'}</Text>
      <Text style={styles.welcome}>Bem vindo de volta!</Text>
        <View style ={{marginTop:20}}> 
          <CustomTextInput label='E-mail'></CustomTextInput>
          <CustomPasswordInput label='Senha' value='******'></CustomPasswordInput> 
        </View> 
      </View>
        <View style ={{marginTop:20, marginBottom:30}}> 
       <NavigationButton screenRoute = 'UserType' texto = 'Entrar'></NavigationButton>
       </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white'
  },
  form:{
    marginLeft:'5%',
  },
  welcome:{
    color: '#64748B',
    fontSize:20

  },
  login:{
    fontSize:30,
    color: '#191D23',
    fontWeight: 'bold',
    fontFamily:'sans-serif'
  }

});

export default LoginScreen;