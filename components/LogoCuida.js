import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const LogoCuida = () => {
    return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/iconecuida.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  logo: {
    height: 300,
    width: '100%',
  }
});

export default LogoCuida;