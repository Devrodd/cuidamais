import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import BackButton from '../components/BackButton';
import NavigationButton from '../components/NavigateButton';
import CustomTextInput from '../components/CustomInput';

export default function PerfilInformationPage2() {

   return (
    <View style={styles.container}>
    <BackButton/>
        <View style={styles.header}>
          <p style = {styles.text}>Nos conte mais sobre você,</p>
          <p style={styles.text}>Que tal compartilhar um pouco mais conosco?
          Fale das suas experiências, sobre com o que já trabalhou ou com o que espera trabalhar, este espaço é reservado para te conhecer!</p>
        </View>
        <p style={styles.sobreYou}>Sobre você:</p>
        <input style={styles.sobreVoce}></input>
        <p style={styles.sobreYou}>Experiências:</p>
        <input style={styles.sobreVoce}></input>
        <View style={{padding:10}}>
        <CustomTextInput label ='Site' value ='http://' ></CustomTextInput>
        <CustomTextInput label ='Social'  ></CustomTextInput>
        </View>
        <NavigationButton texto ='Continuar' screenRoute ='Perfil'></NavigationButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    paddingBottom:5
  },
  header:{
    marginLeft:10
  },
    sobreVoce:{width:'90%',
    height:100,
    color:"#000000",
    marginLeft: 10,
    borderColor:"#D0D5DD"
    
  },
  sobreYou:{
      fontSize:14,
      marginLeft:10,
      fontFamily:'sans-serif',
      fontWeight: "bold",
      marginTop: 8
   },
  text:{
    fontSize:14,
    fontFamily:'sans-serif',
    color: "#64748B"
  }
});
