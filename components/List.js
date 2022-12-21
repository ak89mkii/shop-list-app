import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const List = ({item, addToCart, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.list}>
    <View style={styles.listView}>
        <Text style={styles.listView}>{item.text}</Text>
        {/* <Text style={styles.listView}>{JSON.stringify(item)}</Text> */}
        <Pressable style={styles.listViewButtonAdd}>
            <Text style={styles.listViewButtonAddText} onPress={() => {addToCart(item.text); deleteItem(item.id)}}>Item Found</Text>
        </Pressable>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    list: {
        borderBottomWidth: 1,
        padding: 15,
        backgroundColor: 'cornflowerblue',
        borderColor: 'white',
    },
    listView: {
        fontSize: 15,
        lineHeight: 21,
        fontWeight: 'bold',
        // letterSpacing: 0.25,
        flexDirection: 'row',
        color: 'black',
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
        backgroundColor: '#fbe68b',
        width: 100,
        height: 30,
    },
    listViewButtonAddText: {
        fontSize: 10,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
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