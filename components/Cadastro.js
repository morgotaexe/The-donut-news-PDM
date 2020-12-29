import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Root,
  Toast,
} from 'native-base';
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Componentes
import firebase from './firebase';

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
  cadastrar = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Cadastro criado com sucesso!');
        this.props.navigation.navigate('Login');
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            text: 'E-mail já cadastrado!',
          });
        }

        if (error.code === 'The email address is badly formatted') {
          Toast.show({
            text: 'E-mail fora do formato padrão!',
          });
        }
      });
  };

  render() {
    return (
      <Root>
        <Container style={styles.organiza}>
          <Content>
            <Image
              style={styles.logo}
              source={require('../assets/donuts.png')}
            />
            <Text style={styles.nomeApp}>THE DONUT NEWS</Text>
            <Text style={styles.texto}>Crie aqui seu cadastro! :)</Text>
            <Form>
              <Item floatingLabel>
                <Label>E-mail</Label>
                <Input
                  name="email"
                  value={this.state.email}
                  onChangeText={(text) => this.setState({ email: text })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Senha</Label>
                <Input
                  name="password"
                  value={this.state.password}
                  onChangeText={(text) => this.setState({ password: text })}
                  secureTextEntry={true}
                />
              </Item>
              <KeyboardAvoidingView>
                <Button style={styles.input} onPress={() => this.cadastrar()}>
                  <Text>Cadastrar</Text>
                  <FontAwesome5
                    name="user"
                    size={20}
                    color={'white'}
                    solid></FontAwesome5>
                </Button>
                <Button
                  style={styles.input}
                  onPress={() => this.props.navigation.goBack()}>
                  <Text>Voltar</Text>
                  <FontAwesome5
                    name="arrow-left"
                    size={20}
                    color={'white'}></FontAwesome5>
                </Button>
              </KeyboardAvoidingView>
            </Form>
          </Content>
        </Container>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  organiza: {
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    height: 110,
    marginTop: 60,
    width: 110,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  nomeApp: {
    fontStyle: 'italic',
    fontSize: 25,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  texto: {
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: 200,
    marginTop: 28,
    height: 44,
    borderRadius: 15,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'pink',
  },
});
