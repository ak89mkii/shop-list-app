import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const List = ({item, text, addToCart}) => {
  return (
    <TouchableOpacity style={styles.list}>
    <View style={styles.listView}>
        <Text style={styles.listView}>{item.text}</Text>
        <Pressable style={styles.listViewButtonAdd}>
            <Text style={styles.listViewButtonAddText} onPress={() => addToCart(item.text)}>Item Found</Text>
        </Pressable>
        {/* <Pressable style={styles.listViewButtonAdd2} onPress={() => deleteItem(item.id)}>
            <Text style={styles.listViewButtonAddText2}>Remove</Text>
        </Pressable> */}
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
        fontSize: 10,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        flexDirection: 'row',
        color: 'black',
        fontSize: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listViewButtonAdd: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'orange',
        width: 100,
        height: 30,
    },
    listViewButtonAddText: {
        fontSize: 10,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    listViewButtonAdd2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        width: 70,
        height: 30,
    },
    listViewButtonAddText2: {
        fontSize: 10,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default List;