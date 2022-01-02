import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const AddItem = ({title, addItem}) => {
    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

    return (
        <View style={styles.header}>
        <TextInput 
            placeholder='Add to List...' 
            style={styles.input}
            onChangeText={onChange}
        />
        <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
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
        color: 'black'
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