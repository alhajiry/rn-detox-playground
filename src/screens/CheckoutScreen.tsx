// src/screens/CheckoutScreen.tsx
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { Alert } from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'Checkout'>;

const CheckoutScreen: React.FC<Props> = ({ navigation }) => {
  const { cart, checkout } = useContext(AppContext);

  const handleCheckout = () => {
    const order = checkout();
    if (order) {
      navigation.navigate('Payment', { orderId: order.id });
    } else {
      Alert.alert('Cart is empty!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text>Items to be purchased: {cart.length}</Text>
      <Button
        testID="makePaymentButton"
        title="Make Payment"
        onPress={handleCheckout}
        disabled={cart.length === 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
});

export default CheckoutScreen;
