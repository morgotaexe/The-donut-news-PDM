import React, { Component } from 'react';
import { Container, Content, Text, Button } from 'native-base';
import { StyleSheet, Image, FlatList, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class PaginaEditores extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  loadUsers = () => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res.results || [] });
      });
  };
  componentDidMount() {
    this.loadUsers();
  }
  render() {
    return (
      <Container style={styles.organiza}>
        <Content>
          <Text style={styles.texto}>Conheça a nossa equipe de editores!</Text>
          <View>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <View style={styles.line}>
                  <Image
                    source={{ uri: item.picture.thumbnail }}
                    style={styles.avatar}
                  />
                  <View style={styles.info}>
                    <Text style={styles.email}> {item.email}</Text>
                    <Text style={styles.names}>
                      {' '}
                      {item.name.first} {item.name.last}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.email}
            />
          </View>
          <Button
            style={styles.input}
            onPress={() => this.props.navigation.goBack()}>
            <Text>Voltar</Text>
            <FontAwesome5
              name="arrow-left"
              size={20}
              color={'white'}></FontAwesome5>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  organiza: {
    justifyContent: 'center',
    padding: 10,
  },
  line: {
    height: 50,
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
    alignSelf: 'center',
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  names: {
    fontSize: 12,
  },
  email: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  texto: {
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: 170,
    marginTop: 10,
    borderRadius: 15,
    height: 44,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'pink',
  },
});
