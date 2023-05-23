import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';

class LinkButton extends React.Component {
  handlePress = () => {
    const { navigation, screenRoute } = this.props;
    navigation.navigate(screenRoute);
  };

  render() {
    const { texto} = this.props;
    return (
          <TouchableOpacity onPress={this.handlePress}>
            <Text style={styles.link}>{texto}</Text>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    link: {
    color: 'blue',
    marginLeft: 5,
    fontFamily:'sans-serif'
  }
});

export default withNavigation(LinkButton);