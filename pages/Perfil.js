import React from 'react';
import { Text, View, StyleSheet, Image, CheckBox} from 'react-native';
import CustomIcon from '../components/IconCustom';
import ImageButton from '../components/ImageButton';
import SectionAbout from '../components/SectionAbout';
import Icon from 'react-native-vector-icons/FontAwesome';
import Rating from '../components/Rating';
import HomeButton from '../components/HomeButton';

export default function Perfil() {

  return (
    <View style={styles.container}>
    <HomeButton/>
      <View style ={{alignItems:'center', marginRight:-30}}>
        <ImageButton></ImageButton>
      </View>
      <View style={styles.subdiv} >
        <Text style={styles.text1}>Informações pessoais</Text>
      </View>
        <View style={styles.subdiv}>
        <CustomIcon label='Nome' icon ='user' value ='Exemplo'></CustomIcon>
        </View>
        <View style={styles.subdiv}>
        <CustomIcon label='Cidade' icon ='home' value ='Exemplo'></CustomIcon>
        </View>
         <View style={styles.subdiv}>
        <CustomIcon label='Telefone' icon ='phone' value ='Exemplo'></CustomIcon>
        </View>
        <View style={styles.subdiv}>
        <CustomIcon label='Idade' icon ="cake-candles" value ='Exemplo'></CustomIcon>
        </View>
        <SectionAbout/>
        <View style={{marginTop:-10, flexDirection: 'column',alignItems:'center', marginBottom:15}}>
        <Text style={styles.text2}>Avaliações</Text>
        <Rating numberOfVotes = {5}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10
  },
  text1:{
    marginTop:20,
    fontWeight:'bold',
    fontSize:18,
    fontFamily:'sans-serif',
    height:30,
    
  },
    text2:{
    marginBottom:20,
    fontWeight:'bold',
    fontSize:18,
    fontFamily:'sans-serif',
    height:10,
    textAlign:'Center'
    
  },
  subdiv:{
    flexDirection:'row',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 2,
    marginBottom: 1,
    alignItems:'left'
  },
  
});