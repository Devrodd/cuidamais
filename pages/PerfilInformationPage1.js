import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BackButton from '../components/BackButton';
import CheckboxList from '../components/CheckList';
import NavigationButton from '../components/NavigateButton';
import RadioList from '../components/RadioList';

export default function PerfilInformation1() {
  const handleCheckboxChange = (checkedItems) => {
    console.log('Checked Items:', checkedItems);
    
  };

  const lista = [
    'Bebês 0-6 meses',
    'Bebês 6-11 meses',
    'Bebês 1-2 anos',
    'Crianças 3-6 anos',
    'Crianças ou Bebês\n em qualquer idade',
    'Pets',
    'Idosos',
    'PCDs',
    'Acompanhante\n de Hospital',
    
  ];

  const splitList = (list) => {
    const halfLength = Math.ceil(list.length / 2);
    const firstHalf = list.slice(0, halfLength);
    const secondHalf = list.slice(halfLength);
    return [firstHalf, secondHalf];
  };

  const [lista1Col1, lista1Col2] = splitList(lista);

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.header}>
        <Text style={styles.text}>Olá Cuidador!</Text>
        <Text style={styles.text}>
          Essa sessão vai te ajudar na divulgação do seu perfil profissional, aqui te daremos espaço pra falar um
          pouco mais sobre você.
        </Text>
      </View>
      <Text style={styles.education}>Especialidade:</Text>
      <View style={styles.checkboxContainer}>
        <View>
          <CheckboxList values={lista1Col1} onChange={handleCheckboxChange} />
        </View>
        <View>
          <CheckboxList values={lista1Col2} onChange={handleCheckboxChange} />
        </View>
      </View>
      <Text style={styles.education}>Educação:</Text>
      <RadioList options={['Ensino Fundamental','Ensino Médio','Ensino Técnico','Ensino Superior']}/>
      <NavigationButton texto="Continuar" screenRoute="InformationPage2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  header: {
    marginBottom: 20,
  },
  education: {
    fontSize: 15,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:5,
    marginLeft: 10,
  },
  text: {
    marginTop:15,
    fontFamily: 'sans-serif',
    color: '#64748B',
    marginBottom:-10
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});