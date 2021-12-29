import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const List = ({item}) => {
  return (
    <TouchableOpacity>
    <View style={styles.list}>
      <Text style={styles.listView}>{item.text}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    list: {
        borderBottomWidth: 1,
        padding: 15,
        backgroundColor: 'lightgrey',
        borderColor: '#eee',
    },
    listView: {
        flexDirection: 'row',
        color: 'black',
        fontSize: 10,
        justifyContent: 'space-between',
    },
});

export default List;