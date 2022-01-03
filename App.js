import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import AddItemHeader from './components/AddItemHeader';
import CartItemHeader from './components/CartItemHeader';
import List from './components/List';
import CartList from './components/CartList';
import AddItem from './components/AddItem';
// import AddToCart from './components/AddToCart';

const App = () => {
  const [items, setItems] = useState([]);
  const [carts, setCarts] = useState([]);


  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    setItems(prevItems => {
      return [{id: Math.random(), text}, ...prevItems];
    });
  }

  const addToCart = (text) => {
    setCarts(prevItems => {
      return [{id: Math.random(), text}, ...prevItems];
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <AddItemHeader />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <List item={item} addToCart={addToCart}/>
        )}
      />
      <CartItemHeader />
      <FlatList
        data={carts}
        renderItem={({item}) => (
          <CartList item={item} deleteItem={deleteItem}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
