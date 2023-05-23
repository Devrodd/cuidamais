import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class NavigationButton extends React.Component {
  handlePress = () => {
    const { navigation, screenRoute } = this.props;
    navigation.navigate(screenRoute);
  };

  render() {
    const { texto} = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={this.handlePress}>
        <Text style={styles.textButton}>{texto}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    justifyContent:'center',
    color:'white',
    marginTop:30,
    borderRadius: 25,
    height: 40,
    width:200,
    marginLeft:'22%',
    backgroundColor:"#0097B2",
    border:"none",
    },
    textButton:{
      textAlign:'center',
      fontSize:18,
      color:'white',
      fontWeight: 'bold'
    },
});

export default withNavigation(NavigationButton);