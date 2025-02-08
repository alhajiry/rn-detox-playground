// src/contexts/AppContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

// Define interfaces for your product and order types
export interface Product {
  id: string;
  name: string;
}

export interface Order {
  id: number;
  items: Product[];
}

// Define the context interface
export interface AppContextInterface {
  user: { username: string } | null;
  cart: Product[];
  orders: Order[];
  login: (username: string, password: string) => boolean;
  logout: () => void;
  addToCart: (product: Product) => void;
  checkout: () => Order | null;
}

// Provide default values (these will be overridden by the provider)
export const AppContext = createContext<AppContextInterface>({
  user: null,
  cart: [],
  orders: [],
  login: () => false,
  logout: () => {},
  addToCart: () => {},
  checkout: () => null,
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const login = (username: string, password: string): boolean => {
    if (username && password) {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const checkout = (): Order | null => {
    if (cart.length > 0) {
      const newOrder: Order = { id: Date.now(), items: cart };
      setOrders((prevOrders) => [newOrder, ...prevOrders]);
      setCart([]);
      return newOrder;
    }
    return null;
  };

  return (
    <AppContext.Provider value={{ user, cart, orders, login, logout, addToCart, checkout }}>
      {children}
    </AppContext.Provider>
  );
};
