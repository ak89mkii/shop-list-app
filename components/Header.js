import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.tinyLogo}
        source={require('//Users/spock-117/code/projects/react_native/ShopListApp/Images/find.png')}
      />
      <Text style={styles.text}>{title}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

Header.defaultProps = {
    title: 'SIMPLE-LIST APP'
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        padding: 15,
        backgroundColor: 'grey',
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
      width: 50,
      height: 50,margin: 15,
    },
});

export default Header;