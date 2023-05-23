import React, {useState} from 'react';
import { Text, View, StyleSheet, CheckBox} from 'react-native';

const CheckButton = ({ texto }) => {
  const [isChecked, setChecked] = useState(false);

    return (
       <View style={styles.checkbox}>
       <CheckBox
          value={isChecked}
          onValueChange={setChecked}
          style={styles.checkbox}
        />
      <Text style={styles.label}>{texto}</Text>
      </View>
    );
  }
  
const styles = StyleSheet.create({
  label:{
    padding:8,
    marginLeft: 5,
    fontSize:14,
    color: '#474D66',
    marginTop:-6,
    fontFamily:'sans-serif'
  },
  checkbox:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 3,
    alignItems:'left'
  }
});

export default CheckButton;
 