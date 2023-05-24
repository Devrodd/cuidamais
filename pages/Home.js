import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LogoCuida from '../components/LogoCuida';
import NavigationButton from '../components/NavigateButton';
import LinkButton from '../components/LinkButton';

class HomeScreen extends React.Component  {
    
   render() {
    return (
      <View style={styles.container}>
        <div>
          <Text style={styles.cuidamais}>Cuida</Text>
          <Text style={styles.mais}>+</Text>
          </div>
      <LogoCuida></LogoCuida>
        <Text  style={styles.text}>As vezes o dom de alguém é cuidar dos outros</Text>
        <NavigationButton screenRoute = 'Register' texto = 'Cadastre-se'></NavigationButton>
        <View style={styles.footer}>
          <Text>Já possui uma conta?</Text>
          <LinkButton texto = 'Entrar' screenRoute='Login'></LinkButton>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  cuidamais:{
      
      color:'#0097B2',
       fontSize: 40,
       fontWeight: 'bold',
       marginLeft: '30%'
  },
  mais:{
    color:'#0097B2',
       fontSize: 50,
       fontWeight: 'bold',
       marginLeft:15
  },
  text:{
    textAlign:'center',
    flex:1,
    color:'#0097B2',
    fontSize: 24,
    fontWeight: 'bold',
    padding:5
  },
  footer:{
    flexDirection: 'row',
    display:'flex',
    marginTop:30,
    marginBottom:50,
    paddingLeft:"24%",
    fontFamily:'Inter',
  }
});

export default HomeScreen;
