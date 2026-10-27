import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { PaperProvider, Button, Text, Card } from 'react-native-paper';

export default function App() {

  const [display, setDisplay] = useState('0');

  const [primeiroNumero, setPrimeiroNumero] = useState(null);

  const [operacao, setOperacao] = useState(null);

  const [novoNumero, setNovoNumero] = useState(false);

  function apertarNumero(numero) {
    if (display === '0' || novoNumero) {
      setDisplay(numero);
      setNovoNumero(false);
    } else {
      setDisplay(display + numero);
    }
  }

  function apertarOperacao(op) {
    if (display === 'Erro') return;
    setPrimeiroNumero(parseFloat(display));
    setOperacao(op);
    setNovoNumero(true);
  }

  function calcular() {
    if (operacao === null || primeiroNumero === null) return;

    const segundoNumero = parseFloat(display);
    let resultado = 0;

    if (operacao === '+') {
      resultado = primeiroNumero + segundoNumero;
    } else if (operacao === '-') {
      resultado = primeiroNumero - segundoNumero;
    } else if (operacao === '*') {
      resultado = primeiroNumero * segundoNumero;
    } else if (operacao === '/') {

      if (segundoNumero === 0) {
        setDisplay('Erro');
        setPrimeiroNumero(null);
        setOperacao(null);
        setNovoNumero(true);
        return;
      }
      resultado = primeiroNumero / segundoNumero;
    }

    setDisplay(String(resultado));
    setPrimeiroNumero(null);
    setOperacao(null);
    setNovoNumero(true);
  }

  function limpar() {
    setDisplay('0');
    setPrimeiroNumero(null);
    setOperacao(null);
    setNovoNumero(false);
  }

  function apertarBotao(valor) {
    if (valor === 'C') {
      limpar();
    } else if (valor === '=') {
      calcular();
    } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
      apertarOperacao(valor);
    } else {
      apertarNumero(valor);
    }
  }

  const linhas = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+'],
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.titulo}>
          Calculadora
        </Text>

        {/* display onde aparecem os numeros */}
        <Card style={styles.display}>
          <Card.Content>
            <Text variant="displayMedium" style={styles.textoDisplay}>
              {display}
            </Text>
          </Card.Content>
        </Card>

        {/* botoes */}
        {linhas.map((linha, i) => (
          <View key={i} style={styles.linha}>
            {linha.map((valor) => (
              <Button
                key={valor}
                mode={isNaN(valor) ? 'contained' : 'outlined'}
                style={styles.botao}
                labelStyle={styles.textoBotao}
                onPress={() => apertarBotao(valor)}
              >
                {valor}
              </Button>
            ))}
          </View>
        ))}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
  },
  display: {
    marginBottom: 20,
  },
  textoDisplay: {
    textAlign: 'right',
  },
  linha: {
    flexDirection: 'row',
  },
  botao: {
    flex: 1,
    margin: 4,
    paddingVertical: 8,
  },
  textoBotao: {
    fontSize: 22,
  },
});
