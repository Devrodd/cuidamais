import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomPasswordInput = ({ label, value }) => {
  const [hidePsswrd, setHidePsswrd] = useState(false);

  const togglePasswordVisibility = () => {
    setHidePsswrd(!hidePsswrd);
  };

  return (
    <View>
      <Text style={{ textAlign: 'left', marginTop: 5, fontWeight: 'bold', fontFamily: 'sans-serif' }}>
        {label}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder={value} secureTextEntry={!hidePsswrd}
          style={{
            marginTop: 3,
            height: 35,
            flex: 1,
            borderColor: 'gray',
            borderRadius: 10,
            borderWidth: 2,
            padding: 10,
            marginRight: 2,
            fontFamily: 'sans-serif',
          }}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons name={hidePsswrd ? 'eye' : 'eye-off'} size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomPasswordInput;