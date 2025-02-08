// src/screens/LoginScreen.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { Alert } from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useContext(AppContext);

  const handleLogin = () => {
    if (login(username, password)) {
      navigation.replace('Home'); // Replace login screen after success
    } else {
      Alert.alert('Invalid credentials!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        testID="usernameInput"
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        testID="passwordInput"
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button testID="loginButton" title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 12 },
});

export default LoginScreen;
