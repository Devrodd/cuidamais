import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './pages/Home';
import RegisterScreen from './pages/Register';
import LoginScreen from './pages/Login';
import UserTypeScreen from './pages/UserType';
import PerfilInformation from './pages/PerfilInformationPage1';
import PerfilInformation2 from './pages/PerfilInformationPage2';
import Perfil from './pages/Perfil';
// Configuração da navegação
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
     Login: {
      screen: LoginScreen,
    },
     UserType: {
      screen: UserTypeScreen,
    },
     InformationPage1: {
      screen: PerfilInformation,
    },
         InformationPage2: {
      screen: PerfilInformation2,
    },
         Perfil: {
      screen: Perfil,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}