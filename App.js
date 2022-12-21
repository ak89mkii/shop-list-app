import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, StyleSheet, ScrollView, View, Alert, Image, Button } from 'react-native';
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

  const addItem = (text) => {
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
      console.log(text)
      console.log(items);
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems];
      });
      console.log(items);
    } 
  }

  const addToCart = (text) => {
    setCarts(prevItems => {
      return [{id: Math.random(), text}, ...prevItems]; 
    });
  }

  const storeData = async () => {
    try {
      console.log(items)
      await AsyncStorage.setItem('test', JSON.stringify(items));
      // await AsyncStorage.setItem('test', (items));
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('test');
      if(value !== null) {
        // Need to parse before setting state.
        let nu = (JSON.parse(value))
        setItems(nu);
        // setItems([0]);
        console.log(JSON.parse(value))
        console.log(nu)
      } 
    } catch(e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // // Got premium licensed version, so not required.
  // const devCredits = text => {
  //   Alert.alert(
  //     "Develpment Credits:",
  //     "Developed by Ponder Code & Icons by HideMaru, Gregor Cresnar, iconixar, Maxicons. Links in GitHub README.md | https://github.com/ak89mkii/shop-list-app.",
  //     [
  //       {
  //         text: "Ok",
  //       },
  //     ],
  //   );   
  // }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <AddItem addItem={addItem} storeData={storeData} items={items}/>
        <View style={styles.saveButton}>
        <Button 
          title="Save List"
          onPress={storeData}
          color= "blue"
        />
        </View>
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
            source={require('/Users/spock-117/code/projects/react_native/ShopListApp/assets/goku.png')}
          ></Image>
        </View>
        <View>
          <Credits/>
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
  saveButton: {
    padding: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
