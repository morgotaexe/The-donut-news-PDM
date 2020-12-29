import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  Container,
  Content,
  Card,
  CardItem,
  Button,
  Body,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PaginaJornalismo extends React.Component {
  constructor() {
    super();
    this.state = {
      animValue: new Animated.Value(250),
    };
  }

  handleSelect = () => {
    this.state.animValue._value > 250
      ? Animated.timing(this.state.animValue, {
          toValue: 250,
          duration: 2500,
        }).start()
      : Animated.timing(this.state.animValue, {
          toValue: 300,
          duration: 2500,
        }).start();
  };

  renderRectangle = () => {
    let rotateAnimation = this.state.animValue.interpolate({
      inputRange: [250, 300],
      outputRange: ['0deg', '360deg'],
    });

    const customStyle = {
      height: this.state.animValue,
      transform: [{ rotate: rotateAnimation }],
    };

    return (
      <Animated.View style={[styles.rectangle, customStyle]}>
        <Text style={styles.texto}>
          O Jornalismo e a Poesia (por Duda Rangel, jornalista):
        </Text>
        <Text style={styles.texto}>
          Dor. Lamentação. Utopia. A poesia tem paixão, tem noite maldormida.
          Tem corno de plantão. Quem nunca escreveu versinhos numa tarde de
          solidão? E o jornalismo, o que dizer desse cara então? Tem tudo que a
          poesia tem. É caso sem solução.
        </Text>
        <TouchableWithoutFeedback onPress={() => this.handleSelect()}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  };

  render() {
    return (
      <Container style={styles.organiza}>
        <CardItem style={styles.card}>
          <Body>
            <Text style={styles.texto}>
              Gosta de poemas curtinhos? Confira um clicando no quadrado abaixo
              para ver a mágica acontecer...
            </Text>
          </Body>
        </CardItem>
        <View style={styles.aa}>{this.renderRectangle()}</View>
        <Button
          style={styles.input}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={{ color: 'white' }}>VOLTAR </Text>
          <FontAwesome5
            name="arrow-left"
            size={20}
            color={'white'}></FontAwesome5>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  organiza: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
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
  texto: {
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
  aa: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  rectangle: {
    backgroundColor: '#ff97a9',
    width: 290,
    padding: 10,
  },
});
