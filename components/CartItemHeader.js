import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const CartItemHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Image
      style={styles.tinyLogo}
      source={require(' ./components/Images/cart.png')}
      />
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
      backgroundColor: '#EACE09',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    tinyLogo: {
      width: 35,
      height: 40,
      margin: 15,
    },
});

export default CartItemHeader;