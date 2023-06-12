import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validarCadastro = () => {
    if (nome.trim().length === 0) {
      Alert.alert('Erro', 'Favor inserir um nome válido');
      return;
    }

    if (dataNascimento.trim().length === 0) {
      Alert.alert('Erro', 'Favor inserir uma data de nascimento válida');
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Digite um email válido.');
      return;
    }

    console.log('Dados do cadastro:');
    console.log(`Nome: ${nome}`);
    console.log(`Data de Nascimento: ${dataNascimento}`);
    console.log(`Email: ${email}`);

    limparFormulario();
  };

  const limparFormulario = () => {
    setNome('');
    setDataNascimento('');
    setEmail('');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.formContainer}>
        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Nome"
          style={styles.input}
        />
        <TextInput
          value={dataNascimento}
          onChangeText={setDataNascimento}
          placeholder="Data de nascimento"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.input}
        />

        <Button title="Cadastrar" onPress={validarCadastro} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
