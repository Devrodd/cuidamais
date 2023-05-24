import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import firebase from 'firebase';

class NavigateSubmitButton extends React.Component {
  handlePress = () => {
    const { navigation, screenRoute, mail, psswrd } = this.props;

    if (mail === "" || password ==="") {
      Alert.alert(
      "Alert Title",
      "Alert Msg",
      [
        {
          text: "Cancel"
        },
        { 
          text: "OK"
        }
      ]
);
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(mail, psswrd)
      .then(() => {
        navigation.navigate(screenRoute);
      })
      .catch((error) => {
        console.log('Erro ao fazer login:', error);
      });
  };

  render() {
    const { texto } = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={this.handlePress}>
        <Text style={styles.textButton}>{texto}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    color: 'white',
    marginTop: 30,
    borderRadius: 25,
    height: 40,
    width: 200,
    marginLeft: '22%',
    backgroundColor: '#0097B2',
    border: 'none',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default withNavigation(NavigateSubmitButton);