import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import LogoCuida from '../components/LogoCuida'
import NavigationButton from '../components/NavigateButton';
import LinkButton from '../components/LinkButton';
import SwitchToggleButton from '../components/switchToogle';
import BackButton from '../components/BackButton';

export default function UserType() {
  return (
    <View style={styles.container}>
    <BackButton/>
     <LogoCuida></LogoCuida>
     <View>
      <Text style={styles.euSou}>Eu sou: </Text>
      <SwitchToggleButton></SwitchToggleButton>
        <Text style={styles.description}>Nos ajude a entender{'\n'}
seu perfil para te trazer{'\n'}
uma melhor experiência!</Text>
     </View>
     <View style = {{textAlign:'center', marginTop:5}}>
     <LinkButton texto ='Saiba mais'></LinkButton>
     </View>
     <NavigationButton texto = 'Continuar' screenRoute = 'InformationPage1'></NavigationButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    marginBottom:10,
    paddingBottom:30
  },
  euSou:{
    color: '#0097B2',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description:{
    marginTop:20,
    textAlign: 'center',
    fontSize: 15
  }
});