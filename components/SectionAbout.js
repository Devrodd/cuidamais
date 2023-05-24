import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SectionAbout = () => {
  const [cardOpen, setCardOpen] = useState({
    section1: false,
    section2: false,
  });
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionPress = (section) => {
    if (selectedSection === section) {
      setCardOpen((prevState) => ({
        ...prevState,
        [section]: !prevState[section],
      }));
    } else {
      setCardOpen((prevState) => ({
        ...prevState,
        [selectedSection]: false,
        [section]: true,
      }));
    }
    setSelectedSection(section);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <TouchableOpacity
          style={[styles.section, selectedSection === 'section1' && styles.selectedSection]}
          onPress={() => handleSectionPress('section1')}
        >
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Icon name="address-card" size={25} />
            <Text style={styles.textLabel}>Sobre mim</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.section, selectedSection === 'section2' && styles.selectedSection]}
          onPress={() => handleSectionPress('section2')}
        >
          <View style={{ flexDirection: 'column', alignItems: 'center'}}>
            <Icon name="graduation-cap" size={25} />
            <Text style={styles.textLabel}>Educação</Text>
             <Text style={styles.textLabel}>e</Text>
            <Text style={styles.textLabel}>Experiência</Text>
          </View>
        </TouchableOpacity>
      </View>

      {cardOpen.section1 && (
        <View style={styles.card}>
          <Text style={styles.cardText}>Preciso passar nessa disciplina</Text>
        </View>
      )}

      {cardOpen.section2 && (
        <View style={styles.card}>
          <Text style={styles.cardText}>Tenho experiência em sofrer</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  sectionContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  section: {
    flex: 1,
    width: 140,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderColor: '#B6D2D8',
    borderWidth: 1,
  },
  selectedSection: {
    backgroundColor: '#F9FDFE',
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#F9FDFE',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textLabel: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'sans-serif',
  },
});

export default SectionAbout;