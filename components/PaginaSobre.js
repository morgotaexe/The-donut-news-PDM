class Anchor extends React.Component {
  _handlePress = () => {
    console.log('Link clicked for ' + this.props.href);
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return ( 
      <FontAwesome5
        onPress={this._handlePress}
        color={'#ff97a9'}
        solid
        size={30}
        name={'envelope'}
      />
    );
  }
}

import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Button,
  Card,
  CardItem,
  Accordion,
  DeckSwiper,
  Thumbnail,
  Left,
  Body,
} from 'native-base';
import { StyleSheet, Image, View, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

const dataArray = [
  {
    title: 'Sobre o que é o aplicativo',
    content:
      'O "The donut news" é um aplicativo feito pelo estudante Luiz Paulo Grafetti Terres e a estudante Morgana Rodrigues para o componente curricular "Programação para Dispositivos Móveis" do Instituto Federal de Santa Catarina (IFSC) Câmpus Xanxerê, sob oriantação do docente Jackson Meires Dantas Canuto. Os estudantes são do Curso Técnico Integrado em informática e o aplicativo foi desenvolvido com o framework React Native e a biblioteca do Native Base juntamente da ferramenta Expo Snack, e sua temática é o Jornalismo, aproveite!',
  },
  {
    title: 'O que é React Native',
    content:
      'React Native é uma biblioteca JavaScript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.',
  },
  {
    title: 'O que é NativeBase',
    content:
      'O NativeBase é uma biblioteca open source de componentes visuais, que nos disponibiliza rapidamente componentes comuns e reusáveis como os botões, textos e menus que vemos nos apps nativos de forma rápida e fácil.',
  },
  {
    title: 'O que é o Expo Snack',
    content:
      'Ferramenta totalmente gratuita e online que permite visualizar os protótipos das telas de seu aplicativo em tempo real em um simulador online e até mesmo no seu próprio dispositivo.',
  },
  {
    title: 'O que é jornalismo',
    content:
      'Atividade profissional que visa coletar, investigar, analisar e transmitir periodicamente ao grande público, ou a segmentos dele, informações da atualidade, utilizando veículos de comunicação (jornal, revista, rádio, televisão etc.) para difundi-las.',
  },
  {
    title: 'Por que escolhemos essa temática',
    content:
      'O motivo pelo qual escolhemos a temática é que o Jornalismo é uma atividade profissional muito ampla, as funções do aplicativo ainda são limitadas, mas já é possível desfrutar um pouco desse universo de notícias que nos cerca, juntamente da programção, que permite criações como esta para diversos fins!',
  },
];

export default class PaginaSobre extends Component {
  render() {
    return (
      <Container style={styles.organiza}>
        <Content>
          <Image style={styles.logo} source={require('../assets/donuts.png')} />
          <Text style={styles.nomeApp}>THE DONUT NEWS</Text>
          <Text style={styles.textofr}>"Sem jornalismo não há revolução"</Text>
          <Text style={styles.textoau}>- Juahrez Alves</Text>

          <Text style={styles.texto}>Quem somos nós?</Text>
          <Grid>
            <Col>
              <FontAwesome5
                style={{ textAlign: 'center', marginTop: 25 }}
                name="laptop-code"
                size={30}
                color={'black'}></FontAwesome5>
              <Image
                style={styles.av}
                source={require('../assets/Morga.png')}
              />
              <Text style={styles.textoav}>Morgana Rodrigues</Text>
            </Col>
            <Col>
              <FontAwesome5
                style={{ textAlign: 'center', marginTop: 25 }}
                name="laptop-code"
                size={30}
                color={'black'}></FontAwesome5>
              <Image style={styles.av} source={require('../assets/Luiz.png')} />
              <Text style={styles.textoav}>Luiz Paulo Grafetti Terres</Text>
            </Col>
          </Grid>
          <Accordion
            style={styles.accordion}
            icon="arrow-bottom-left-thick"
            expandedIcon="arrow-top-right-thick"
            iconStyle={{ color: 'black' }}
            expandedIconStyle={{ color: 'black' }}
            dataArray={dataArray}
            contentStyle={{
              backgroundColor: '#FFF7F8',
              textAlign: 'justify',
              fontSize: 13,
            }}
            headerStyle={{ backgroundColor: '#ffe6ea' }}
          />
          <Text style={styles.textod}>Siga-nos em nossas redes sociais!</Text>
          <View style={styles.card}>
            <Card>
              <CardItem>
                <Icon name="pinterest" size={30} color="#ff0000" />
                <Text> Pinterest </Text>
              </CardItem>
              <CardItem>
                <Icon name="facebook-square" size={25} color="#3b5998" />
                <Text> Facebook </Text>
              </CardItem>
              <CardItem>
                <Icon name="youtube-play" size={25} color="#ff0000" />
                <Text> Youtube </Text>
              </CardItem>
              <CardItem>
                <Icon name="twitter" size={25} color="#00acee" />
                <Text> Twitter </Text>
              </CardItem>
              <CardItem>
                <Icon name="reddit" size={25} color="#F4511E" />
                <Text> Reddit </Text>
              </CardItem>
              <CardItem>
                <Icon name="instagram" size={25} color="#D81B60" />
                <Text> Instagram</Text>
              </CardItem>
            </Card>
          </View>
          <Text style={styles.textod}>
            O que está achando do aplicativo? Clique no ícone abaixo e nos mande
            um e-mail relatando a sua experiência!
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <Anchor href="mailto:morgana.r1@aluno.ifsc.edu.br" />
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
  accordion: {
    padding: 15,
    marginTop: 10,
  },
  card: {
    padding: 15,
  },
  texto: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textofr: {
    marginTop: 10,
    textAlign: 'center',
  },
  textoau: {
    textAlign: 'center',
  },
  textod: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  textoav: {
    textAlign: 'center',
    fontSize: 12,
  },
  nomeApp: {
    fontStyle: 'italic',
    fontSize: 25,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    width: 170,
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
  logo: {
    height: 110,
    marginTop: 30,
    width: 110,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  av: {
    height: 130,
    width: 130,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
