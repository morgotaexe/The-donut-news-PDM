import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Item,
  Label,
  Input,
  Button,
  Form,
  CardItem,
  Body,
} from 'native-base';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Componentes
import firebase from './firebase';

export default class PaginaFormulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      nome: null,
      telefone: null,
      cpf: null,
      arrayCliente: [],
    };
    this.carregarDados();
  }

  salvar = () => {
    let itemId = this.state.id;

    if (itemId != null) {
      console.log(itemId);
      console.log(this.state.nome);

      firebase
        .database()
        .ref('usuario/' + itemId)
        .update({
          nome: this.state.nome,
          telefone: this.state.telefone,
          cpf: this.state.cpf,
        })
        .then(() => {
          console.log('Atualizado');
        })
        .catch((error) => {
          console.log(error);
        });

      alert('Atualizando...');
    } else {
      firebase
        .database()
        .ref('usuario')
        .push({
          nome: this.state.nome,
          telefone: this.state.telefone,
          cpf: this.state.cpf,
        })
        .then(() => {
          console.log('Inserido!');
        })
        .catch((error) => {
          console.log(error);
        });

      alert('Salvando...');
    }
    this.props.navigation.goBack();
  };

  clearData = () => {
    this.setState({
      id: null,
      nome: null,
      cpf: null,
      telefone: null,
    });
  };

  carregarDados = async () => {
    const { route } = this.props;
    const { clienteKey } = route.params;

    const refUsuario = firebase.database().ref('usuario/' + clienteKey);

    var that = this;

    await refUsuario.once('value').then((snapshot) => {
      that.setState({
        id: clienteKey,
        nome: snapshot.val().nome,
        telefone: snapshot.val().telefone,
        cpf: snapshot.val().cpf,
      });
    });
  };

  remover = (key) => {
    const vetorCliente = this.state.arrayCliente;
    vetorCliente.splice(key, 1);
    alert('removendo..' + key);
  };

  render() {
    return (
      <Container style={styles.organiza}>
        <CardItem style={styles.card}>
          <Body>
            <Text style={{ textAlign: 'center' }}>
              Preencha o formulário abaixo para candidatar-se! Você
              pode editar suas informações depois...
            </Text>
          </Body>
        </CardItem>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nome</Label>
              <Input
                name="nome"
                value={this.state.nome}
                onChangeText={(texto) => this.setState({ nome: texto })}
              />
            </Item>

            <Item floatingLabel>
              <Label>Telefone</Label>
              <Input
                name="telefone"
                value={this.state.telefone}
                onChangeText={(texto) => this.setState({ telefone: texto })}
              />
            </Item>

            <Item floatingLabel last>
              <Label>CPF</Label>
              <Input
                name="cpf"
                value={this.state.cpf}
                onChangeText={(texto) => this.setState({ cpf: texto })}
              />
            </Item>
            <KeyboardAvoidingView>
              <Button style={styles.input} onPress={() => this.salvar()}>
                <Text>Salvar</Text>
                <FontAwesome5
                  name="save"
                  solid
                  size={20}
                  color={'white'}></FontAwesome5>
              </Button>
              <Button
                style={styles.inputvol}
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
    );
  }
}

const styles = StyleSheet.create({
  organiza: {
    justifyContent: 'center',
    padding: 15,
  },
  input: {
    width: 170,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 15,
    height: 44,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  inputvol: {
    width: 170,
    borderRadius: 15,
    marginBottom: 20,
    height: 44,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  card: {
    backgroundColor: '#ffe6ea',
    marginTop: 20,
    marginBottom: 20,
  },
});
