import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Button,
  Right,
  ListItem,
  List,
  Body,
  Item,
  Input,
  CardItem,
} from 'native-base';
import {
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  View,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';

// Componentes
import firebase from './firebase';

export default class PaginaCandidato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayUsuario: null,
      search: null,
    };
  }

  componentDidMount() {
    this.carregarDados();
  }

  carregarDados = () => {
    firebase
      .database()
      .ref('usuario')
      .on('value', (snapshot) => {
        var vetorTemp = [];
        snapshot.forEach((child) => {
          vetorTemp.push({
            id: child.key,
            nome: child.val().nome,
            telefone: child.val().telefone,
            cpf: child.val().cpf,
          });
        });
        this.setState({ arrayUsuario: vetorTemp });
      });
    console.log(this.state.arrayUsuario);
  };

  remover = async (key) => {
    console.log(key);
    await firebase
      .database()
      .ref('usuario/' + key)
      .remove()
      .then(() => {
        console.log('Removido..');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  pesquisar = (text) => {
    if (text != '') {
      const newArray = this.state.arrayUsuario.filter((item) => {
        const itemDado = item.nome ? item.nome.toUpperCase() : ''.toUpperCase();
        const textDado = text.toUpperCase();

        return itemDado.indexOf(textDado) > -1;
      });

      this.setState({
        arrayUsuario: newArray,
        search: text,
      });
    } else {
      this.carregarDados();
      this.setState({ search: null });
    }
  };

  render() {
    return (
      <Container style={styles.organiza}>
        <CardItem style={styles.card}>
          <Body>
            <Text style={{ textAlign: 'center' }}>
              Que tal fazer parte do nosso grupo de editores? Candidate-se!
            </Text>
          </Body>
        </CardItem>
        <Content>
          <Item>
            <FontAwesome5 name="search" size={20} />
            <Input
              placeholder="Pesquisar por nome"
              onChangeText={(text) => this.pesquisar(text)}
              value={this.state.search}
            />
            <FontAwesome5 name="user" solid size={20} />
          </Item>

          <Grid>
            <Col>
              <Button
                style={styles.input}
                onPress={() => {
                  this.props.navigation.navigate('Formulário');
                }}>
                <Text>Cadastrar</Text>
                <FontAwesome5
                  name="plus"
                  size={20}
                  color={'white'}></FontAwesome5>
              </Button>
            </Col>
            <Col>
              <Button
                style={styles.input}
                onPress={() => this.props.navigation.goBack()}>
                <Text>Voltar</Text>
                <FontAwesome5
                  name="arrow-left"
                  size={20}
                  color={'white'}></FontAwesome5>
              </Button>
            </Col>
          </Grid>

          <List style={{ flex: 1 }}>
            <FlatList
              data={this.state.arrayUsuario}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <ListItem>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Body
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        width: 300,
                      }}>
                      <Text style={{ fontSize: 12 }}>
                        Candidato nº: {index + 1}
                      </Text>
                      <Text style={{ fontSize: 12 }}>Nome: {item.nome}</Text>
                      <Text style={{ fontSize: 12 }}>
                        Telefone: {item.telefone}
                      </Text>
                      <Text style={{ fontSize: 12 }}>CPF: {item.cpf}</Text>
                      <Right
                        style={{
                          flex: 1,
                          alignSelf: 'flex-end',
                          position: 'absolute',
                        }}>
                        <Button
                          style={styles.inputd}
                          onPress={() => {
                            this.props.navigation.navigate('Formulário', {
                              clienteKey: item.id,
                            });
                          }}>
                          <Text>Editar</Text>
                          <FontAwesome5
                            name="user-edit"
                            size={15}
                            color={'white'}></FontAwesome5>
                        </Button>
                        <Button
                          style={styles.inputd}
                          onPress={() => {
                            Alert.alert(
                              'Remover Usuário',
                              'Deseja realmente remover o registro?',
                              [
                                {
                                  text: 'Cancel',
                                  onPress: () => console.log('Cancel Pressed'),
                                  style: 'cancel',
                                },
                                {
                                  text: 'OK',
                                  onPress: () => this.remover(item.id),
                                },
                              ],
                              { cancelable: false }
                            );
                          }}>
                          <Text>Remover</Text>
                          <FontAwesome5
                            name="trash-alt"
                            size={15}
                            solid
                            color={'white'}></FontAwesome5>
                        </Button>
                      </Right>
                    </Body>
                  </TouchableOpacity>
                </ListItem>
              )}></FlatList>
          </List>
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
    width: 155,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    height: 44,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  inputd: {
    width: 125,
    borderRadius: 10,
    height: 30,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    backgroundColor: 'pink',
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#ffe6ea',
    marginTop: 20,
    marginBottom: 20,
  },
});
