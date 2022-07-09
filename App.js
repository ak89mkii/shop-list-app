import React, { useState } from 'react';
import { FlatList, StyleSheet, ScrollView, View, Alert, Image } from 'react-native';
import Header from './components/Header';
import AddItemHeader from './components/AddItemHeader';
import CartItemHeader from './components/CartItemHeader';
import List from './components/List';
import CartList from './components/CartList';
import AddItem from './components/AddItem';
import Credits from './components/Credits';

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

  const devCredits = text => {
    Alert.alert(
      "Develpment Credits:",
      "Developed by Ponder Code & Icons by HideMaru, Gregor Cresnar, iconixar, Maxicons. Links in GitHub README.md | https://github.com/ak89mkii/shop-list-app.",
      [
        {
          text: "Ok",
        },
      ],
    );   
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
        <View style={styles.imageContainer}>
          <Image 
            style={styles.tinyLogo}
            source={require('./Images/goku.png')}
          ></Image>
        </View>
        <View>
          <Credits devCredits={devCredits}/>
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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
