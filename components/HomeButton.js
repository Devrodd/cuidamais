import React from 'react';
import { TouchableOpacity, Icon, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Feather } from '@expo/vector-icons';

const HomeButton = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Feather name="home" size={22} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius: 25,
    backgroundColor: '#0097B2',
  },
});

export default withNavigation(HomeButton);