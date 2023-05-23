import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, CheckBox} from 'react-native';
import BackButton from '../components/BackButton';
import CheckboxList from '../components/CheckList';
import NavigationButton from '../components/NavigateButton';
import CustomTextInput from '../components/CustomInput';

export default function PerfilInformation1() {

const handleCheckboxChange = (checkedItems) => {
    console.log('Checked Items:', checkedItems);
    // Faça o que for necessário com os itens selecionados
  };

  const lista1 = [
    'Bebês 0-6 meses',
    'Bebês 6-11 meses',
    'Bebês 1-2 anos',
    'Crianças 3-6 anos',
    'Crianças ou Bebês sem idade mínima',
  ];

    const lista2 = [
    'Pets',
    'Idosos',
    'PCDs',
    'Acompanhante de Hospital',
  ];

  const lista3 = [
    'Ensino Fundamental',
    'Ensino Médio',
    'Ensino Superior',
    'Prefiro não informar',
  ];

   return (
    <View style={styles.container}>
    <BackButton/>
        <View style={styles.header}>
          <p style = {styles.text}>Olá Cuidador!</p>
          <p style={styles.text}>Essa sessão vai te ajudar na divulgação do seu perfil profissional, aqui te daremos espaço pra falar um pouco mais sobre você.</p>
        </View>
        <p style={styles.sobreYou}>Especialidade:</p>
        <View style={styles.container}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <CheckboxList values={lista1} onChange={handleCheckboxChange} />
        <CheckboxList values={lista2} onChange={handleCheckboxChange} />
        </View>
        </View>
         <p style={styles.sobreYou}>Educação:</p>
         <CheckboxList values={lista3} onChange={handleCheckboxChange} />
        <View>
        </View>
        <NavigationButton texto ='Continuar' screenRoute ='InformationPage2'></NavigationButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    
  },
  header:{
    marginLeft:10
  },
    sobreVoce:{
    borderRadius:4,
    width:'80%',
    height:60,
    color:"#000000",
    marginLeft: 20,
    borderColor:"#D0D5DD",
    paddingLeft:10,
  },
  p:{
      fontSize: 14,
      marginLeft:20,
      fontFamily: 'Inter'
  },
  sobreYou:{
      fontSize: 15,
      marginLeft:10,
      fontFamily:'sans-serif',
      fontWeight: "bold",
      marginTop: 8
   },
  text:{
    fontFamily:'sans-serif',
    color: "#64748B"
  }
});
