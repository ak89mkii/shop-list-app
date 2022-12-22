import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Credits = ({title, devCredits}) => {
    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

    return (
        <View style={styles.header}>
            {/* <TouchableOpacity style={styles.btn} onPress={() => devCredits(text)}>
                <Text style={styles.btnText}>Development Credits</Text>
            </TouchableOpacity> */}
            <Text style={styles.Text}>&copy; 2023 Dual-Lists | Ponder Code | Ponder Enterprises LLC</Text>
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
        backgroundColor: 'orange',
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
    Text: {
        color: 'black',
        fontSize: 10,
        textAlign: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

export default Credits;