import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const AddItem = ({title, addItem}) => {
    // Sets initial state variable "text" as empty string and updating variable with "setText".
    const [text, setText] = useState('');

    // Updating function. Sets "setText" to characters in field.
    const onChange = textValue => setText(textValue);

    return (
        <View style={styles.header}>
            <View>
            <TextInput 
                placeholder='Add to List...' 
                style={styles.input}
                onChangeText={onChange}
                value = {text}
            />
            </View>
            <View style={styles.btn}>
            {/* Adds item in input field to "To Find" list and resets state of input to empty string. */}
            <TouchableOpacity style={styles.btnText} onPress={() => {addItem(text), setText('')}}>
                <Image
                style={styles.tinyLogo}
                source={require('./assets/add.png')}
                />
                <Text style={styles.btnText}>Add Item</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 15,
        fontSize: 16,
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: '#84926A',
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        padding: 5,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '80%',
        // borderStyle: 'solid',
        borderRadius: 15,
        // borderWidth: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        flexDirection: 'row',
        padding: 5,
        margin: 5,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

export default AddItem;