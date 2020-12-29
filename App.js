import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Componentes
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import PaginaInicial from './components/PaginaInicial';
import PaginaEditores from './components/PaginaEditores';
import PaginaSobre from './components/PaginaSobre';
import PaginaQuiz from './components/PaginaQuiz';
import PaginaSedes from './components/PaginaSedes';
import PaginaJornalismo from './components/PaginaJornalismo';
import PaginaArtigos from './components/PaginaArtigos';
import PaginaCandidato from './components/PaginaCandidato';
import PaginaFormulario from './components/PaginaFormulario';
import PaginaFotografias from './components/PaginaFotografias';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    const Stack = createStackNavigator();

    return (
      <Container> 
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login"> 
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Página inicial" component={PaginaInicial} />
            <Stack.Screen name="Editores" component={PaginaEditores} />
            <Stack.Screen name="Sobre" component={PaginaSobre} />
            <Stack.Screen name="Quiz" component={PaginaQuiz} />
            <Stack.Screen name="Candidatar-se" component={PaginaCandidato} />
            <Stack.Screen name="Formulário" component={PaginaFormulario} />
            <Stack.Screen name="Sedes" component={PaginaSedes} />
            <Stack.Screen name="Jornalismo" component={PaginaJornalismo} />
            <Stack.Screen name="Artigos" component={PaginaArtigos} />
            <Stack.Screen name="Fotografias" component={PaginaFotografias} />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    );
  }
}
