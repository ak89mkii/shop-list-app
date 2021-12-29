import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import List from './components/List';

const App = () => {
  const [items, setItems] = useState([
    {id: Math.random(), text: 'Goku'},
    {id: Math.random(), text: 'Cloud'},
    {id: Math.random(), text: 'Spock'},
    {id: Math.random(), text: 'IG-88'},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <List item={item}/>}
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
