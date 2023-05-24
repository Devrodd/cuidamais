import React,{useState}from 'react';
import { Text, View, StyleSheet} from 'react-native';
import CheckButton from '../components/CustomCheckbox';
import NavigateSubmitButton from '../components/NavigateSubmitButton';
import CustomTextInput from '../components/CustomInput';
import CustomPasswordInput from '../components/CustomInputPsswrd';
import CustomDoubleInput from '../components/CustomDoubleInput';
import ImageButton from '../components/ImageButton';
import LinkButton from '../components/LinkButton';
import BackButton from '../components/BackButton';
export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
    <BackButton/>
    <View style={{justifyContent: 'space-between',alignItems:'center',flexDirection: 'row', textAlign:'left'}}>
       <View>
      <Text style ={{fontSize: 25,fontFamily:'sans-serif', marginLeft:10}}>Cadastre-se</Text>
       <Text style ={{fontSize: 20,fontFamily:'Baloo',color:'#64748B', marginLeft:14}}>Seja bem vindo!</Text>
      </View>
      <View style={{alignItems:'center'}}><ImageButton></ImageButton>
      </View>
    </View>
      <View style={styles.formContainer}>
        <CustomTextInput label='Nome*'></CustomTextInput>
        <CustomTextInput label="E-mail*" 
          value={email} onChangeText={setEmail} 
          placeholder="exemplo@mail.com" />   
        <CustomDoubleInput label1='Telefone' label2='CEP'></CustomDoubleInput>
        <CustomTextInput label='Endereço'></CustomTextInput>
        <CustomDoubleInput label1='Data de Nascimento*' label2='CPF*'></CustomDoubleInput>
          <CustomPasswordInput
            label="Senha*"
            value={password}
            onChangeText={setPassword}
          />
        <CustomPasswordInput label='Confirme a Senha*'></CustomPasswordInput>
        <View style={styles.checkButtonsContainer}>
        <Text style={{color:'red', fontSize:11}}>Campos obrigatórios ( * ) </Text> 
          <CheckButton texto='Sou maior de 18 anos.'></CheckButton>
          <View style ={{textAlign:'right',justifyContent: 'space-between',flexDirection: 'row'}}>
          <CheckButton texto='Aceito os termos de uso.'></CheckButton> 
          <LinkButton texto ='Termos de Uso' screenRoute='UseTerms'></LinkButton> 
          </View>  
        </View>
        <View style ={{marginTop:-20}}>
 <NavigateSubmitButton texto="Cadastrar" mail={email} psswrd={password} screenRoute="Login" /> 
        </View>
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  formContainer: {
    marginTop: -15,
    padding: 8,
  },
  checkButtonsContainer: {
    padding:8,
    marginTop:2,
    alignItems: 'left',
  },
});