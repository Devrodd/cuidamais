import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomIcon = ({ label, value, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={25} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textLabel}>{label}</Text>
        <Text style={styles.textValue}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  iconContainer: {
    marginRight: 6,
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  icon: {
    color: 'black',
  },
  textContainer: {
    flexDirection: 'column',
    height:50
  },
  textLabel: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'sans-serif',
  },
  textValue: {
    fontSize: 13,
    fontFamily: 'sans-serif',
  },
});

export default CustomIcon;