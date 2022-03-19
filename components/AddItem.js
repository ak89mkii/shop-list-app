import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const AddItem = ({title, addItem}) => {
    // Sets initial state variable "text" as empty string and updating variable with "setText".
    const [text, setText] = useState('');

    // Updating function. Sets "setText" to characters in field.
    const onChange = textValue => setText(textValue);

    return (
        <View style={styles.header}>
            <TextInput 
                placeholder='Add to List...' 
                style={styles.input}
                onChangeText={onChange}
                value = {text}
            />
            {/* Adds item in input field to "To Find" list and resets state of input to empty string. */}
            <TouchableOpacity style={styles.btn} onPress={() => {addItem(text), setText('')}}>
                <Image
                style={styles.tinyLogo}
                source={require('/Users/spock-117/code/projects/react_native/ShopListApp/Images/add.png')}
                />
                <Text style={styles.btnText}>Add Item</Text>
            </TouchableOpacity>
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
        backgroundColor: 'cornflowerblue',
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        padding: 5,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

export default AddItem;