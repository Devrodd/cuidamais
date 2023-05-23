import React from 'react';
import { View, TextInput, Text } from 'react-native';

const CustomTextInput = ({ label, value }) => {
  return (
    <View>
      <Text style ={{textAlign:'left', marginTop:5, fontWeight:'bold', fontFamily:'sans-serif'}}>{label}</Text>
      <TextInput
        placeholder={value}
        style={{
          marginTop:3,
          height: 35,
          width:'flex',
          borderColor: 'gray',
          borderRadius: 10,
          borderWidth: 2,
          padding:10,
          marginRight:2,
          fontFamily:'sans-serif'
        }}
      />
    </View>
  );
};

export default CustomTextInput;