// src/screens/PaymentScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { Alert } from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'Payment'>;

const PaymentScreen: React.FC<Props> = ({ route, navigation }) => {
  const { orderId } = route.params;

  const handlePayment = () => {
    Alert.alert(`Payment successful for Order ID: ${orderId}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Text>Order ID: {orderId}</Text>
      <Button testID="confirmPaymentButton" title="Confirm Payment" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
});

export default PaymentScreen;
