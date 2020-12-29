import React, { Component } from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Card,
  CardItem,
} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class PaginaQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vetorUm: [
        'Einkommende Zeitungen',
        'Haarlems Dagblad',
        'Wall Street Journal',
        'Folha de São Paulo',
        'Acta Diurna',
        'Title Title',
      ],
      vetorDois: ['V', 'IV', 'VIII', 'VI', 'X', 'XV'],
      vetorTres: [
        'Marie Curie',
        'Henry Smolinski',
        'William Bullock',
        'Johannes Gutenberg',
        'Michael Dacre',
        'William Nelson',
      ],
      vetorQuatro: [
        'William Waack',
        'Alexandre Garcia',
        'Chico Pinheiro',
        'Sérgio Chapelin',
        'Ricardo Boechat',
        'Danton Jobim',
      ],
      vetorCinco: [
        'Suécia',
        'Egito',
        'Brasil',
        'Venezuela',
        'Holanda',
        'Argentina',
      ],
      vetorSeis: ['XX', 'XV', 'XVII', 'XIV', 'XIX', 'XVIII'],
    };
  }

  cliqueUm = () => {
    const novoVetorUm = this.state.vetorUm.filter((item) => {
      return item == 'Acta Diurna';
    });
    this.setState({
      vetorUm: novoVetorUm,
    });
  };

  cliqueDois = () => {
    const novoVetorDois = this.state.vetorDois.filter((item) => {
      return item == 'VIII';
    });
    this.setState({
      vetorDois: novoVetorDois,
    });
  };

  cliqueTres = () => {
    const novoVetorTres = this.state.vetorTres.filter((item) => {
      return item == 'Johannes Gutenberg';
    });
    this.setState({
      vetorTres: novoVetorTres,
    });
  };

  cliqueQuatro = () => {
    const novoVetorQuatro = this.state.vetorQuatro.filter((item) => {
      return item == 'Danton Jobim';
    });
    this.setState({
      vetorQuatro: novoVetorQuatro,
    });
  };

  cliqueCinco = () => {
    const novoVetorCinco = this.state.vetorCinco.filter((item) => {
      return item == 'Suécia';
    });
    this.setState({
      vetorCinco: novoVetorCinco,
    });
  };

  cliqueSeis = () => {
    const novoVetorSeis = this.state.vetorSeis.filter((item) => {
      return item == 'XIX';
    });
    this.setState({
      vetorSeis: novoVetorSeis,
    });
  };

  render() {
    return (
      <Container style={styles.organiza}>
        <Content>
          <Image
            style={styles.logo}
            source={require('../assets/cerebro.png')}
          />
          <Text style={styles.texto}>Hora do quiz!</Text>
          <View style={styles.centralizar}>
            <View style={styles.inicio}>
              <Text style={styles.frased}>
                Teste seus conhecimentos sobre o mundo jornalístico.
              </Text>
              <Text style={styles.frased}>
                Confira as respostas certas clicando nos botões:
              </Text>
            </View>
            <View style={styles.espacod} />

            <View style={styles.cor}>
              <Text style={styles.branco}>
                1. Qual o nome do jornal mais antigo já encontrado?
              </Text>
              <View style={styles.espaco} />
              <Icon name="arrow-down" size={25} color="#ff97a9" />
              <FlatList
                data={this.state.vetorUm}
                renderItem={({ item }) => (
                  <Text style={styles.branco}>{item}</Text>
                )}
              />
              <View style={styles.espaco} />
              <Button style={styles.input} onPress={this.cliqueUm}>
                <Text>Resposta</Text>
              </Button>
              <View style={styles.espaco} />
            </View>
            <View style={styles.espaco} />
            <View style={styles.cor}>
              <Text style={styles.branco}>
                2. Em que século surgiram na China os jornais escritos a mão?
              </Text>
              <View style={styles.espaco} />
              <Icon name="arrow-down" size={25} color="#ff97a9" />
              <FlatList
                data={this.state.vetorDois}
                renderItem={({ item }) => (
                  <Text style={styles.branco}>{item}</Text>
                )}
              />
              <View style={styles.espaco} />
              <Button style={styles.input} onPress={this.cliqueDois}>
                <Text>Resposta</Text>
              </Button>
              <View style={styles.espaco} />
            </View>
            <View style={styles.cor}>
              <Text style={styles.branco}>
                3. A partir da invenção de quem, em 1447, surgiram os jornais
                modernos?
              </Text>
              <View style={styles.espaco} />
              <Icon name="arrow-down" size={25} color="#ff97a9" />
              <FlatList
                data={this.state.vetorTres}
                renderItem={({ item }) => (
                  <Text style={styles.branco}>{item}</Text>
                )}
              />
              <View style={styles.espaco} />
              <Button style={styles.input} onPress={this.cliqueTres}>
                <Text>Resposta</Text>
              </Button>
              <View style={styles.espaco} />
            </View>
            <View style={styles.cor}>
              <Text style={styles.branco}>
                4. Quem foi o fundador da primeira faculdade pública de
                jornalismo no Brasil?
              </Text>
              <View style={styles.espaco} />
              <Icon name="arrow-down" size={25} color="#ff97a9" />
              <FlatList
                data={this.state.vetorQuatro}
                renderItem={({ item }) => (
                  <Text style={styles.branco}>{item}</Text>
                )}
              />
              <View style={styles.espaco} />
              <Button style={styles.input} onPress={this.cliqueQuatro}>
                <Text>Resposta</Text>
              </Button>
              <View style={styles.espaco} />
            </View>
            <View style={styles.cor}>
              <Text style={styles.branco}>
                5. Em que país foi aprovada a primeira lei protegendo a
                liberdade de imprensa em 1766?
              </Text>
              <View style={styles.espaco} />
              <Icon name="arrow-down" size={25} color="#ff97a9" />
              <FlatList
                data={this.state.vetorCinco}
                renderItem={({ item }) => (
                  <Text style={styles.branco}>{item}</Text>
                )}
              />
              <View style={styles.espaco} />
              <Button style={styles.input} onPress={this.cliqueCinco}>
                <Text>Resposta</Text>
              </Button>
              <View style={styles.espaco} />
            </View>
            <View style={styles.cor}>
              <Text style={styles.branco}>
                6. A partir de que século os jornais já eram os principais meios
                de transmissão de informações?
              </Text>
              <View style={styles.espaco} />
              <Icon name="arrow-down" size={25} color="#ff97a9" />
              <FlatList
                data={this.state.vetorSeis}
                renderItem={({ item }) => (
                  <Text style={styles.branco}>{item}</Text>
                )}
              />
              <View style={styles.espaco} />
              <Button style={styles.input} onPress={this.cliqueSeis}>
                <Text>Resposta</Text>
              </Button>
              <View style={styles.espaco} />
            </View>
          </View>
          <View style={styles.espacod} />
          <Button
            style={styles.inputd}
            onPress={() => this.props.navigation.goBack()}>
            <Text>Voltar</Text>
            <FontAwesome5
              name="arrow-left"
              size={20}
              color={'white'}></FontAwesome5>
          </Button>
          <View style={styles.espacod} />
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
    height: 100,
    marginTop: 30,
    width: 100,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  texto: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cor: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF7F8',
    width: 345,
    height: 315,
    marginTop: 10,
  },
  centralizar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicio: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe6ea',
    width: 360,
    height: 100,
  },
  frased: {
    fontSize: 13,
    textAlign: 'center',
  },
  input: {
    width: 120,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 15,
    height: 34,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  inputd: {
    width: 160,
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
  branco: {
    fontSize: 13,
    padding: 2,
    textAlign: 'center',
    marginTop: 5,
  },
  espaco: {
    marginTop: 5,
  },
  espacod: {
    marginTop: 15,
  },
});
