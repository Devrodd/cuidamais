import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ToogleButton = () => {
  const [selected, setselected] = useState('Cuidador');

  const handleToggle = (value) => {
    setselected(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={selected === 'Cuidador' ? styles.selectedValue : styles.toogleBtn}
          onPress={() => handleToggle('Cuidador')}
        >
          <Text style={selected === 'Cuidador' ? styles.selectedValueText : styles.toogleBtnText}>Cuidador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selected === 'Solicitante' ? styles.selectedValue : styles.toogleBtn}
          onPress={() => handleToggle('Solicitante')}
        >
          <Text style={selected === 'Solicitante' ? styles.selectedValueText : styles.toogleBtnText}>Solicitante</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0097B2',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 5,
  },
  toogleBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedValue: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    height:30
  },
  toogleBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedValueText: {
    color: '#0097B2',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ToogleButton;