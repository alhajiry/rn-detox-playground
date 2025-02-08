// src/screens/CartScreen.tsx
import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { AppContext, Product } from '../contexts/AppContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Cart'>;

const CartScreen: React.FC<Props> = ({ navigation }) => {
  const { cart } = useContext(AppContext);

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cart.length === 0 ? (
        <Text testID="emptyCartText">Cart is empty.</Text>
      ) : (
        <FlatList data={cart} keyExtractor={(item) => item.id} renderItem={renderItem} />
      )}
      <Button
        testID="checkoutButton"
        title="Checkout"
        onPress={() => navigation.navigate('Checkout')}
        disabled={cart.length === 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, marginBottom: 16 },
  item: { padding: 8, borderBottomWidth: 1, borderColor: '#ccc' },
});

export default CartScreen;
