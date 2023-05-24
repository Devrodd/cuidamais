import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomPasswordInput = ({ label, value, onChangeText }) => {
  const [hidePsswrd, setHidePsswrd] = useState(false);

  const togglePasswordVisibility = () => {
    setHidePsswrd(!hidePsswrd);
  };

  return (
    <View>
      <Text style={styles.textStyle}>{label}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder="******"
          placeholderTextColor="grey"
          secureTextEntry={!hidePsswrd}
          style={styles.textInputStyle}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons name={hidePsswrd ? 'eye' : 'eye-off'} size={20} color="gray" />
        </TouchableOpacity>
      </View>
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
  textStyle: {
    textAlign: 'left',
    marginTop: 5,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
});

export default CustomPasswordInput;