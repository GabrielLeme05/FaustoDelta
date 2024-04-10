import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from '../src/style';

export default function App() {
    // Definindo os estados para os coeficientes 'a', 'b' e 'c'
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    // Definindo estado para armazenar o valor do delta
    const [delta, setDelta] = useState(null);
    // Definindo estados para armazenar as raízes 'x1' e 'x2'
    const [x1, setX1] = useState(null);
    const [x2, setX2] = useState(null);
  
    // Função para aumentar o coeficiente 'a' em 1
    const aumentarA = () => {
      setA(a + 1);
    };
  
    // Função para diminuir o coeficiente 'a' em 1
    const diminuirA = () => {
      setA(a - 1);
    };
  
    // Função para aumentar o coeficiente 'b' em 1
    const aumentarB = () => {
      setB(b + 1);
    };
  
    // Função para diminuir o coeficiente 'b' em 1
    const diminuirB = () => {
      setB(b - 1);
    };
  
    // Função para aumentar o coeficiente 'c' em 1
    const aumentarC = () => {
      setC(c + 1);
    };
  
    // Função para diminuir o coeficiente 'c' em 1
    const diminuirC = () => {
      setC(c - 1);
    };
  
    // Função para calcular as raízes da equação do segundo grau
    const calcularRaizes = () => {
      // Calculando o delta
      const deltaCalculado = (b ** 2) - (4 * a * c);
  
      // Calculando as raízes usando a fórmula de Bhaskara
      if (!isNaN(deltaCalculado) && deltaCalculado >= 0) {
        const raizDelta = Math.sqrt(deltaCalculado);
        const x1Calculado = (-b + raizDelta) / (2 * a);
        const x2Calculado = (-b - raizDelta) / (2 * a);
        setX1(x1Calculado);
        setX2(x2Calculado);
      } else {
        setX1(null);
        setX2(null);
      }
      // Atualizando o estado do delta
      setDelta(deltaCalculado);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Button title="-" onPress={diminuirA} />
          <Text style={styles.coefficientText}>Coeficiente A:   {a}</Text>
          <Button title="+" onPress={aumentarA} />
        </View>
        <View style={styles.row}>
          <Button title="-" onPress={diminuirB} />
          <Text style={styles.coefficientText}>Coeficiente B:   {b}</Text>
          <Button title="+" onPress={aumentarB} />
        </View>
        <View style={styles.row}>
          <Button title="-" onPress={diminuirC} />
          <Text style={styles.coefficientText}>Coeficiente C:   {c}</Text>
          <Button title="+" onPress={aumentarC} />
        </View>
        <Button title="Calcular" onPress={calcularRaizes} />
        {delta !== null && (
          <View>
            <Text style={styles.resultText}>Delta: {delta}</Text>
            {delta < 0 ? (
              <Text style={styles.resultText}>Não há raízes válidas para a equação de 2º grau</Text>
            ) : (
              <View>
                <Text style={styles.resultText}>x1: {x1}</Text>
                <Text style={styles.resultText}>x2: {x2}</Text>
              </View>
            )}
          </View>
        )}
      </View>
    );
  }