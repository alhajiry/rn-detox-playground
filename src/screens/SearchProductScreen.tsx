// src/screens/SearchProductScreen.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet } from 'react-native';
import { AppContext, Product } from '../contexts/AppContext';

const allProducts: Product[] = [
  { id: '1', name: 'React Native T-Shirt' },
  { id: '2', name: 'JavaScript Mug' },
  { id: '3', name: 'Mobile Dev Sticker Pack' },
];

const SearchProductScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const { addToCart } = useContext(AppContext);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Button
        testID={`addToCartButton_${item.id}`}
        title="Add to Cart"
        onPress={() => addToCart(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        testID="searchInput"
        style={styles.input}
        placeholder="Search Products"
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No products found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
});

export default SearchProductScreen;
