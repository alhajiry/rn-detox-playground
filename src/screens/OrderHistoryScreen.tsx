// src/screens/OrderHistoryScreen.tsx
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AppContext, Order } from '../contexts/AppContext';

const OrderHistoryScreen: React.FC = () => {
  const { orders } = useContext(AppContext);

  const renderItem = ({ item }: { item: Order }) => (
    <View style={styles.orderItem}>
      <Text>Order ID: {item.id}</Text>
      <Text>Items: {item.items.map((p) => p.name).join(', ')}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      {orders.length === 0 ? (
        <Text testID="emptyOrderHistoryText">No orders found.</Text>
      ) : (
        <FlatList data={orders} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, marginBottom: 16 },
  orderItem: { marginBottom: 12, padding: 8, borderWidth: 1, borderColor: '#ccc' },
});

export default OrderHistoryScreen;
