import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  View,
  DeckSwiper,
  Thumbnail,
  Left,
} from 'native-base';
import { StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';

const secThumb = {
  uri: 'https://i.ibb.co/vqt0n5m/newspaper.png',
};

const secUm = {
  uri:
    'https://cidadania23.org.br/wp-content/uploads/2020/01/manchetes-editoriais1-1.jpg',
};

const secDois = {
  uri: 'https://www.ingredientecomunicacao.com.br/wp-content/uploads/2019/02/entrevista-jornal%C3%ADstica.jpg',
};

const secTres = {
  uri:
    'https://www.luispaulorodrigues.com/op/image/?co=882&h=68376',
};

const secQuatro = {
  uri:
    'https://s1.static.brasilescola.uol.com.br/be/vestibular/jornalistas-podem-trabalhar-com-tv-internet-radio-midias-impressas-59f8499bd090c.jpg',
};

const secCinco = {
  uri:
    'https://veja.abril.com.br/wp-content/uploads/2019/09/design-sem-nome-29-1.png',
};

const secSeis = {
  uri:
    'https://static.otvfoco.com.br/2019/08/William-Bonner.jpg',
};

const secSete = {
  uri:
    'https://i.pinimg.com/originals/03/82/2c/03822cd141d855f899ae1300d4bc003d.png',
};

const secOito = {
  uri:
    'https://s3.amazonaws.com/deolhonomercado-prd/deolhonomercado/wp-content/uploads/2019/06/acao-comercial-GE-PR.png',
};

const cards = [
  {
    text: 'Primeira fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secUm,
  },
  {
    text: 'Segunda fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secDois,
  },
  {
    text: 'Terceira fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secTres,
  },
  {
    text: 'Quarta fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secQuatro,
  },
  {
    text: 'Quinta fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secCinco,
  },
  {
    text: 'Sexta fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secSeis,
  },
  {
    text: 'Sétima fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secSete,
  },
  {
    text: 'Oitava fotografia',
    name: ' Veja mais arrastando para o lado ',
    image: secOito,
  },
];

export default class Galeria extends Component {
  render() {
    return (
      <Container style={styles.organiza}>
        <Content>
          <View style={styles.estiloUm} />

          <View style={{padding: 10}}>
            <Card >
              <CardItem style={styles.cor}>
                <Body>
                  <Text style={styles.fraseinicial}>
                    Nesta página, você encontra fotografias jornalísticas.
                    Desfrute-as!
                  </Text>
                  <Body>
                    <Icon name="camera" size={25} color="black" />
                  </Body>
                </Body>
              </CardItem>
            </Card>
            <View style={styles.estiloUm} />

          <DeckSwiper
          dataSource={cards}
          renderItem={(item) => (
            <Card style={{ elevation: 3 }}>
              <CardItem style={styles.cord}>
                <Left>
                  <Thumbnail source={secThumb} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text style={{ opacity: 0.4 }}>
                      Jornalismo
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem style={styles.organizacard}>
                <Icon name="arrow-left" size={20} color="#ff97a9" />
                <Text>{item.name}</Text>
                <Icon name="arrow-right" size={20} color="#ff97a9" />
              </CardItem>
            </Card>
          )}
        />
       
             <Button
            style={styles.input}
            onPress={() => this.props.navigation.goBack()}>
            <Text>Voltar</Text>
            <FontAwesome5
              name="arrow-left"
              size={20}
              color={'white'}></FontAwesome5>
          </Button>

            <View style={styles.estiloUm} />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  organizacard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },



  estiloUm: {
    marginTop: 20,
  },
input: {
    width: 170,
    marginTop: 460,
    marginBottom: 20,
    borderRadius: 15,
    height: 44,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  fraseinicial: {
    color: '#000',
    textBold: true,
    fontSize: 14,
    textAlign: 'center',
  },

  cor: {
    backgroundColor: '#ffe6ea',
  },
  cord: {
    backgroundColor: '#fafafa',
  },
});
