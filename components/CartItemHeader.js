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
    title: 'Cart'
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#EACE09'
    },
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },
});

export default CartItemHeader;