import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButtonList = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    if (selectedOption === option) {
      // Se a opção atual já estiver selecionada, desmarque-a
      setSelectedOption(null);
      onChange(null);
    } else {
      // Caso contrário, selecione a nova opção
      setSelectedOption(option);
      onChange(option);
    }
  };

  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.optionContainer,
            selectedOption === option && styles.selectedOption,
          ]}
          onPress={() => handleOptionChange(option)}
        >
          <Text style={styles.optionLabel}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ddd',
  },
  selectedOption: {
    backgroundColor: '#0097B2',
    borderColor: '#0097B2',
  },
  optionLabel: {
    marginLeft: 8,
    color: '#000',
  },
});

export default RadioButtonList;