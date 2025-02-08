// App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './src/contexts/AppContext'

// Import Screens
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchProductScreen from './src/screens/SearchProductScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';

// Define the types for your stack navigator
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SearchProduct: undefined;
  Cart: undefined;
  Checkout: undefined;
  Payment: { orderId: number };
  OrderHistory: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SearchProduct" component={SearchProductScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
