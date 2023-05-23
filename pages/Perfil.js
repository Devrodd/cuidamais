import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, CheckBox} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Perfil() {
   const [isCheckedTerm, setCheckedTerm] = useState(false);
   const [isChecked18, setChecked18] = useState(false);
  return (
    <View style={styles.container}>
       <Image style={styles.logo}/>
    <div style={styles.form}>
      <p style={styles.paragrafo}>Informações pessoais</p>
      <View style={styles.subdiv}>
      <View style={styles.icones}>
           <Icon name="user" size={25} style = {styles.styleicones}/>
      </View>
        <p style={styles.pai}>Nome</p>
        <p style={styles.filho}>Exemplo</p>
      </View>
      <View style={styles.subdiv}>
        <View style={styles.icones}>
          <Icon name="home" size={25} tyle = {styles.styleicones}/>
        </View>
        <p style={styles.pai}>Cidade</p>
        <p style={styles.fortaleza}>Fortaleza</p>
      </View>
      <View style={styles.subdiv}>
      <View style={styles.icones}>
          <Icon name="home" size={25} tyle = {styles.styleicones} />
        </View>
        <p style={styles.pai}>Telefone</p>
        <p style={styles.telefone}>+55 085 4444</p>
      </View>
      <View style={styles.subdiv}>
      <View style={styles.icones}>
          <Icon name="user" size={25} tyle = {styles.styleicones} />
        </View>
        <p style={styles.pai}>Idade</p>
        <p style={styles.filho}>30</p>
      </View>
    </div>
      <View style={styles.inline}>

          <Icon name="cookie" size={25} style={styles.sobremimpart2}>
              <p style={styles.tipo1}>Sobre mim</p>
          </Icon>

          <Icon name="training" size={25} style = {styles.education}>
              <p style={styles.tipo1}>Educação</p>
          </Icon>
      </View>
      <View style={styles.inline}>
       <p style={styles.paragrafo2}>Avaliações</p>
       <button style={styles.vejaMais}>Veja Mais</button>
      </View>
      <View style={styles.card}>
        <View style={styles.inline}>
          <View style={styles.icones}>
              <Icon name="user" size={25} style = {styles.styleicones}/>
          </View>
          <p style={styles.nameUser}>User1</p>
         </View>
         <Text style={styles.textSobre}>aaaaaaaaaaaaaaaaaaaaaa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
   logo: {
    height: 140,
    width: '30%',
    marginLeft:'39%',
    marginTop:-13
  },
  form:{
    marginLeft:'5%',
    marginTop:-30
  },
  paragrafo:{
    fontFamily:'Manrope',
    fontSize: 16,
    marginTop:30,
    fontWeight: "bold",
  },
  pai:{
    fontFamily:'Manrope',    
    fontSize: 16,
    marginTop:2

  },
  filho:{
    fontFamily:'Manrope',    
    fontSize: 11,
    marginLeft: -37,
    marginTop: 20,
    color: "#64748B"
  },
  subdiv:{
    flexDirection:'row',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 2,
    marginBottom: 1,
  },
  icones:{
    marginRight:6,
    marginLeft: 10,
    width: 30,
    height:30,
    borderRadius: 30,
    marginTop:3,
    backgroundColor: 'rgba(240, 240, 240, 1)',
    textAlign: 'center',
  },
  telefone:{
    fontFamily:'Manrope',    
    fontSize: 11,
    marginLeft: -52,
    marginTop: 20,
    color: "#64748B"
  },
  fortaleza:{
    fontFamily:'Manrope',    
    fontSize: 11,
    marginLeft: -44,
    marginTop: 20,
    color: "#64748B"
  },
  styleicones:{
    color: 'black',
  },
  inline:{
    flexDirection:'row',
    border:1
  },
  sobremimpart2:{
    color:'black',
    backgroundColor:'white',
    textAlign:'center',
    marginLeft:  '5%',
    marginTop:10,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    width:120,
    height:100,
    paddingTop:30,
    borderBottomColor: '#F5F5F5',
    borderTopColor: '#F5F5F5',
    borderLeftColor: '#F5F5F5',
    borderRightColor: '#F5F5F5',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  education:{
    color:'black',
    backgroundColor:'white',
    textAlign:'center',
    marginLeft:  '20%',
    marginTop:10,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    width:120,
    height:100,
    paddingTop:30,
    borderBottomColor: '#F5F5F5',
    borderTopColor: '#F5F5F5',
    borderLeftColor: '#F5F5F5',
    borderRightColor: '#F5F5F5',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  tipo1:{
    marginTop: -1,
    fontSize:13
  },
  paragrafo2:{
    fontFamily:'Manrope',
    fontSize: 16,
    marginTop:30,
    fontWeight: "bold",
    marginLeft: 10
  },
  vejaMais:{
    height:20,
    width:80,
    marginTop: 30,
    marginLeft: '50%',
    marginRight: 5,
    fontSize:12,
    backgroundColor: 'white'
  },
  nameUser:{
    marginTop: 4,

  },
  textSobre:{
    marginLeft: 12
  },
  card:{
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 70,
    width:  200,
    borderRadius: 10,
  }

});