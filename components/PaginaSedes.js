import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { CardItem, Body, Button } from 'native-base';
import call from 'react-native-phone-call';
import { FontAwesome5 } from '@expo/vector-icons';

const Sedes = () => {
  const [inputValue, setInputValue] = useState('34332230');
  const [inputValue2, setInputValue2] = useState('34335678');
  const [inputValue3, setInputValue3] = useState('34335298');
  const [inputValue4, setInputValue4] = useState('34339843');

  const triggerCall = () => {
    // Tamanho dos dígitos
    if (inputValue.length != 8) {
      alert('Por favor, insira o número do contato correto!');
      return;
    }

    const args = {
      number: inputValue,
      prompt: true,
    };
    // Faça a ligação
    call(args).catch(console.error);
  };

  const triggerCall2 = () => {
    // Tamanho dos dígitos
    if (inputValue.length != 8) {
      alert('Por favor, insira o número do contato correto!');
      return;
    }

    const args = {
      number: inputValue2,
      prompt: true,
    };
    // Faça a ligação
    call(args).catch(console.error);
  };

  const triggerCall3 = () => {
    // Tamanho dos dígitos
    if (inputValue.length != 8) {
      alert('Por favor, insira o número do contato correto!');
      return;
    }

    const args = {
      number: inputValue3,
      prompt: true,
    };
    // Faça a ligação
    call(args).catch(console.error);
  };

  const triggerCall4 = () => {
    // Tamanho dos dígitos
    if (inputValue.length != 8) {
      alert('Por favor, insira o número do contato correto!');
      return;
    }

    const args = {
      number: inputValue4,
      prompt: true,
    };
    // Faça a ligação
    call(args).catch(console.error);
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.organiza}>
        <View style={styles.organiza} scrollEnabled={true}>
          <Image style={styles.logo} source={require('../assets/call.png')} />
          <CardItem style={styles.card}>
            <Body>
              <Text style={styles.texto}>
                Quer conhecer algumas das sedes da nossa empresa espalhadas pela
                região? Entre em contato ligando para os números abaixo!
              </Text>
            </Body>
          </CardItem>

          <Text style={styles.text}>Sede em Joaçaba:</Text>
          <TextInput
            value={inputValue}
            onChangeText={(inputValue) => setInputValue(inputValue)}
            placeholder={'Sede em Joaçaba:'}
            keyboardType="numeric"
            style={styles.textInput}
          />
          <Button
            activeOpacity={0.7}
            style={styles.input}
            onPress={triggerCall}>
            <Text style={styles.buttonTextStyle}>LIGAR </Text>
            <FontAwesome5 name="phone" size={20} color={'white'}></FontAwesome5>
          </Button>

          <Text style={styles.text}>Sede em Xavantina:</Text>
          <TextInput
            value={inputValue2}
            onChangeText={(inputValue2) => setInputValue2(inputValue2)}
            placeholder={'Sede em Xavantina:'}
            keyboardType="numeric"
            style={styles.textInput}
          />
          <Button
            activeOpacity={0.7}
            style={styles.input}
            onPress={triggerCall}>
            <Text style={styles.buttonTextStyle}>LIGAR </Text>
            <FontAwesome5 name="phone" size={20} color={'white'}></FontAwesome5>
          </Button>

          <Text style={styles.text}>Sede em Canoinhas:</Text>
          <TextInput
            value={inputValue3}
            onChangeText={(inputValue) => setInputValue(inputValue)}
            placeholder={'Sede em Canoinhas:'}
            keyboardType="numeric"
            style={styles.textInput}
          />
          <Button
            activeOpacity={0.7}
            style={styles.input}
            onPress={triggerCall3}>
            <Text style={styles.buttonTextStyle}>LIGAR </Text>
            <FontAwesome5 name="phone" size={20} color={'white'}></FontAwesome5>
          </Button>

          <Text style={styles.text}>Sede em Blumenau:</Text>
          <TextInput
            value={inputValue4}
            onChangeText={(inputValue) => setInputValue(inputValue)}
            placeholder={'Sede em Blumenau:'}
            keyboardType="numeric"
            style={styles.textInput}
          />
          <Button
            activeOpacity={0.7}
            style={styles.input}
            onPress={triggerCall4}>
            <Text style={styles.buttonTextStyle}>LIGAR </Text>
            <FontAwesome5 name="phone" size={20} color={'white'}></FontAwesome5>
          </Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Sedes;

const styles = StyleSheet.create({
  organiza: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    marginVertical: 8,
    fontSize: 16,
    marginTop: 20,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    fontSize: 18,
  },
  card: {
    backgroundColor: '#ffe6ea',
    marginTop: 20,
    marginBottom: 10,
  },
  texto: {
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    width: 140,
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
    height: 70,
    marginTop: 20,
    width: 70,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
