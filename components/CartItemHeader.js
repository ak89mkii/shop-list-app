import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const CartItemHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

CartItemHeader.defaultProps = {
    title: 'CART'
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        padding: 15,
        backgroundColor: '#EACE09'
    },
    text: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default CartItemHeader;