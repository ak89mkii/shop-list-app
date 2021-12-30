import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const AddItem = ({title}) => {
  return (
    <View style={styles.header}>
      <TextInput placeholder='Add to List...' style={styles.input} />
      <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>+ Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 15,
        fontSize: 16,
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        padding: 5,
        margin: 5,
    },
    btnText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },
});

export default AddItem;