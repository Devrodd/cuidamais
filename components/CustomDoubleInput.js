import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const CustomDoubleInput = ({ label1, value1, label2, value2 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.textStyle}>{label1}</Text>
        <TextInput
          placeholder={value1}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textStyle}>{label2}</Text>
        <TextInput
          placeholder={value2}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    marginRight:2
  },
  input: {
    height: 35,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 2,
  },
  textStyle: {
    textAlign: 'left',
    marginTop: 5,
    fontWeight:'bold',
    fontFamily:'sans-serif'
  },
});

export default CustomDoubleInput;