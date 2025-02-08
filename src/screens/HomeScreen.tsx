// src/screens/HomeScreen.tsx
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { logout, user } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user?.username}!</Text>
      <Button
        testID="searchProductButton"
        title="Search Products"
        onPress={() => navigation.navigate('SearchProduct')}
      />
      <Button
        testID="viewCartButton"
        title="View Cart"
        onPress={() => navigation.navigate('Cart')}
      />
      <Button
        testID="orderHistoryButton"
        title="Order History"
        onPress={() => navigation.navigate('OrderHistory')}
      />
      <Button
        testID="logoutButton"
        title="Logout"
        onPress={() => {
          logout();
          navigation.replace('Login');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
});

export default HomeScreen;
