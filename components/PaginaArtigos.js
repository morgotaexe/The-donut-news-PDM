import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        color={'black'}
        solid
        size={25}
        name={'link'}
      />
    );
  }
}

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Card,
  Root,
  Toast,
  CardItem,
  Body,
  Button,
  Right,
} from 'native-base';
import { StyleSheet, Image, Alert, View, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class PaginaArtigos extends Component {
  render() {
    return (
      <Container style={styles.organiza}>
        <Content>
          <Image style={styles.logo} source={require('../assets/donuts.png')} />
          <Text style={styles.nomeApp}>THE DONUT NEWS</Text>
          <CardItem style={styles.card}>
            <Body>
              <Text style={styles.texto}>
                Confira alguns dos artigos escritos pelos nossos editores que já
                foram publicados!
              </Text>
            </Body>
          </CardItem>

          <Card style={styles.espaco}>
            <CardItem header style={styles.cardart}>
              <Text style={styles.frasein}>
                O véu da ignorância: como diminuir a injustiça
              </Text>
              <Right>
                <Icon name="file-document-outline" size={25} color="#000" />
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text style={styles.body}>
                    "O princípio da justiça: quando se deparar com uma ação
                    moral, imagine que você não sabe se será o doador ou o
                    recebedor e, na dúvida, erre para o lado da outra pessoa." -
                    Michael Shermer
                  </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.frasefim}>
                Clique no ícone ao lado para acessar a matéria completa
              </Text>
              <Right>
                <View>
                  <Anchor href="https://medium.com/coffee-break-through/o-v%C3%A9u-da-ignor%C3%A2ncia-como-verificar-se-uma-decis%C3%A3o-%C3%A9-justa-277341bfee4a" />
                </View>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.espaco}>
            <CardItem header style={styles.cardart}>
              <Text style={styles.fraseind}>
                Brasil desperdiça o potencial de sua biodiversidade
              </Text>
              <Right>
                <Icon name="file-document-outline" size={25} color="#000" />
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text style={styles.body}>
                    Benefícios são muitos, porém pouco aproveitados e muito
                    ameaçados, segundo documento preparado por 85 pesquisadores
                    brasileiros.
                  </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.frasefim}>
                Clique no ícone ao lado para acessar a matéria completa
              </Text>
              <Right>
                <View>
                  <Anchor href="https://jornal.usp.br/ciencias/ciencias-ambientais/brasil-desperdica-o-potencial-de-sua-biodiversidade-um-ativo-unico-e-inigualavel/" />
                </View>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.espaco}>
            <CardItem header style={styles.cardart}>
              <Text style={styles.frasein}>A história da saúde mental</Text>
              <Right>
                <Icon name="file-document-outline" size={25} color="#000" />
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text style={styles.body}>
                    Engana-se quem pensa que a saúde mental data apenas do
                    período que conhecemos como período contemporâneo/atual.
                  </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.frasefim}>
                Clique no ícone ao lado para acessar a matéria completa
              </Text>
              <Right>
                <View>
                  <Anchor href="https://blog.cenatcursos.com.br/a-historia-da-saude-mental-do-antigo-ao-contemporaneo/" />
                </View>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.espaco}>
            <CardItem header style={styles.cardart}>
              <Text style={styles.frasein}>
                Uma introdução a Pierre Bourdieu
              </Text>
              <Right>
                <Icon name="file-document-outline" size={25} color="#000" />
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text style={styles.body}>
                    Considerado um dos maiores sociólogos de língua francesa das
                    últimas décadas, Pierre Bourdieu é um dos mais importantes
                    pensadores do século XX.
                  </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.frasefim}>
                Clique no ícone ao lado para acessar a matéria completa
              </Text>
              <Right>
                <View>
                  <Anchor href="https://revistacult.uol.com.br/home/uma-introducao-a-pierre-bourdieu/" />
                </View>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.espaco}>
            <CardItem header style={styles.cardart}>
              <Text style={styles.frasein}>A inexplicável lei de Murphy</Text>
              <Right>
                <Icon name="file-document-outline" size={25} color="#000" />
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text style={styles.body}>
                    “Nada é tão ruim que não possa piorar.” Essa é a filosofia
                    fundamental da Lei de Murphy, uma invenção folclórica
                    norte-americana que explica como, em situações do cotidiano,
                    a provável melhor escolha acaba dando errado. Por
                    experiência própria, listei algumas dessas situações, seja
                    em filas, no trânsito ou às voltas com uma goteira.
                  </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.frasefim}>
                Clique no ícone ao lado para acessar a matéria completa
              </Text>
              <Right>
                <View>
                  <Anchor href="http://lounge.obviousmag.org/leve_no_temporal/2015/01/a-inexplicavel-lei-de-murphy.html" />
                </View>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.espaco}>
            <CardItem header style={styles.cardart}>
              <Text style={styles.frasein}>O problema do problema</Text>
              <Right>
                <Icon name="file-document-outline" size={25} color="#000" />
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text style={styles.body}>
                    "É na angústia que o homem toma consciência de sua liberdade
                    […] na angústia que a liberdade está em seu ser colocando-se
                    a si mesmo em questão."
                  </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.frasefim}>
                Clique no ícone ao lado para acessar a matéria completa
              </Text>
              <Right>
                <View>
                  <Anchor href="http://lounge.obviousmag.org/choque_sinaptico/2015/02/o-problema-do-problema.html" />
                </View>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.espaco}>
            <CardItem header style={styles.cardart}>
              <Text style={styles.fraseind}>
                Can a computer devise a theory of everything?
              </Text>
              <Right>
                <Icon name="file-document-outline" size={25} color="#000" />
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text style={styles.body}>
                    It might be possible, physicists say, but not anytime soon.
                    And there’s no guarantee that we humans will understand the
                    result.
                  </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.frasefim}>
                Clique no ícone ao lado para acessar a matéria completa
              </Text>
              <Right>
                <View>
                  <Anchor href="https://www.nytimes.com/2020/11/23/science/artificial-intelligence-ai-physics-theory.html" />
                </View>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.espaco}>
            <CardItem header style={styles.cardart}>
              <Text style={styles.frasein}>
                Minha solidão ajudou a unir 10 mil estranhos
              </Text>
              <Right>
                <Icon name="file-document-outline" size={25} color="#000" />
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text style={styles.body}>
                    Patrick Cakirli não podia imaginar o que aconteceria quando
                    postou um apelo para fazer novos amigos em um fórum na
                    internet.
                  </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.frasefim}>
                Clique no ícone ao lado para acessar a matéria completa
              </Text>
              <Right>
                <View>
                  <Anchor href="https://www.bbc.com/portuguese/geral-54644399" />
                </View>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.espaco}>
            <CardItem header style={styles.cardart}>
              <Text style={styles.fraseindd}>
                Mandar menos e-mails pode ajudar a salvar o planeta?
              </Text>
              <Right>
                <Icon name="file-document-outline" size={25} color="#000" />
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text style={styles.body}>
                    As autoridades britânicas estão considerando pedir para que
                    parem de enviar emails de agradecimento. Mas por quê?
                  </Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.frasefim}>
                Clique no ícone ao lado para acessar a matéria completa
              </Text>
              <Right>
                <View>
                  <Anchor href="https://www.bbc.com/portuguese/geral-55010944" />
                </View>
              </Right>
            </CardItem>
          </Card>

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
  logo: {
    height: 110,
    marginTop: 20,
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
  card: {
    backgroundColor: '#ffe6ea',
    marginTop: 20,
  },
  cardart: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc0cb',
  },
  espaco: { marginTop: 25 },
  frasefim: {
    fontSize: 10,
    textAlign: 'center',
  },
  frasein: {
    fontSize: 11,
    textAlign: 'center',
  },
  fraseind: {
    fontSize: 11,
    textAlign: 'center',
  },
  fraseindd: {
    fontSize: 11,
    textAlign: 'center',
  },
  body: {
    fontSize: 14,
    textAlign: 'justify',
  },
});
