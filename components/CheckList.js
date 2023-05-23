import React, { useState } from 'react';
import { View, Text, CheckBox, StyleSheet } from 'react-native';

const CheckboxList = ({ values, onChange }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (value) => {
    const isChecked = checkedItems.includes(value);

    let updatedCheckedItems;

    if (isChecked) {
      updatedCheckedItems = checkedItems.filter((item) => item !== value);
    } else {
      updatedCheckedItems = [...checkedItems, value];
    }

    setCheckedItems(updatedCheckedItems);
    onChange(updatedCheckedItems);
  };

  return (
    <View>
      {values.map((value) => (
        <View key={value} style={styles.checkboxContainer}>
          <CheckBox
            value={checkedItems.includes(value)}
            onValueChange={() => handleCheckboxChange(value)}
          />
          <Text style={styles.checkboxLabel}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});

export default CheckboxList;