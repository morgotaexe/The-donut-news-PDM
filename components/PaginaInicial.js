import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { FontAwesome5 } from '@expo/vector-icons';

// Componentes
import firebase from './firebase';

export default class PaginaInicial extends Component {
  render() {
    return (
      <Container style={styles.organiza}>
        <Content>
          <Image style={styles.logo} source={require('../assets/donuts.png')} />
          <Text style={styles.nomeApp}>THE DONUT NEWS</Text>
          <Text style={styles.texto}>Acesse suas funcionalidades!</Text>
          <Grid>
            <Col>
              <Button
                style={styles.input}
                onPress={() => this.props.navigation.navigate('Sobre')}>
                <Text>Sobre</Text>
                <FontAwesome5
                  name="info"
                  size={20}
                  color={'white'}></FontAwesome5>
              </Button>
              <Button
                style={styles.input}
                onPress={() => this.props.navigation.navigate('Candidatar-se')}>
                <Text>Candidatar-se</Text>
                <FontAwesome5
                  name="hand-paper"
                  size={20}
                  solid
                  color={'white'}></FontAwesome5>
              </Button>
              <Button
                style={styles.input}
                onPress={() => this.props.navigation.navigate('Editores')}>
                <Text>Editores</Text>
                <FontAwesome5
                  name="users"
                  size={20}
                  color={'white'}></FontAwesome5>
              </Button>
              <Button
                style={styles.input}
                onPress={() => this.props.navigation.navigate('Quiz')}>
                <Text>Quiz</Text>
                <FontAwesome5
                  name="comment"
                  size={20}
                  color={'white'}
                  solid></FontAwesome5>
              </Button>
            </Col>
            <Col>
              <Button
                style={styles.input}
                onPress={() => this.props.navigation.navigate('Sedes')}>
                <Text>Sedes</Text>
                <FontAwesome5
                  name="map-marker-alt"
                  size={20}
                  color={'white'}></FontAwesome5>
              </Button>
              <Button
                style={styles.input}
                onPress={() => this.props.navigation.navigate('Jornalismo')}>
                <Text>Jornalismo</Text>
                <FontAwesome5
                  name="newspaper"
                  size={20}
                  color={'white'}
                  solid></FontAwesome5>
              </Button>
              <Button
                style={styles.input}
                onPress={() => this.props.navigation.navigate('Artigos')}>
                <Text>Artigos</Text>
                <FontAwesome5
                  name="file-alt"
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
            </Col>
          </Grid>
          <Button
            style={styles.input}
            onPress={() => this.props.navigation.navigate('Fotografias')}>
            <Text>Fotografias</Text>
            <FontAwesome5
              name="camera"
              size={20}
              color={'white'}
              solid></FontAwesome5>
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
    width: 165,
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
