import React, { useState } from 'react';
import { FlatList, StyleSheet, ScrollView, View, Alert } from 'react-native';
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

  const deleteItem2 = (id) => {
    setCarts(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = text => {
    if(!text) {
      Alert.alert(
        "Error!",
        "Please enter an item in the field to add.",
        [
          {
            text: "Ok",
          },
        ],
      );   
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems];
      });
    } 
  }

  const addToCart = (text) => {
    setCarts(prevItems => {
      return [{id: Math.random(), text}, ...prevItems]; 
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <Header />
      <AddItem addItem={addItem}/>
      <View>
      <AddItemHeader />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <List item={item} addToCart={addToCart} deleteItem={deleteItem}/>
        )}
      />
      </View>
      <View>
      <CartItemHeader />
      <FlatList
        data={carts}
        renderItem={({item}) => (
          <CartList item={item} deleteItem2={deleteItem2}/>
        )}
      />
      </View>
    </ScrollView>
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
