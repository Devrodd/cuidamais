import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const CustomTextInput = ({label, value, onChangeText,placeholder }) => {
  return (
    <View>
    <Text style ={styles.textStyle}>{label}</Text>
     <TextInput
     placeholder={placeholder}
     placeholderTextColor="grey"     
        style={styles.textInputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    marginTop: 3,
    height: 35,
    width: '100%',
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    marginRight: 2,
    fontFamily: 'sans-serif',
  },
  textStyle:{
    textAlign:'left',
    marginTop:5,
    fontWeight:'bold',
    fontFamily:'sans-serif'
  }
});

export default CustomTextInput;