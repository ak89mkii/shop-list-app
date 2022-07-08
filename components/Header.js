import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.tinyLogo}
        source={require('/Users/spock-117/code/projects/react_native/ShopListApp/Images/main.png')}
      />
      <Image
        style={styles.text}
        source={require('/Users/spock-117/code/projects/react_native/ShopListApp/Images/title.png')}
      />
      {/* <Text style={styles.text}>{title}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
};

Header.defaultProps = {
    title: 'DUAL-LISTS'
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
        // color: 'white',
        // fontSize: 30,
        // textAlign: 'center',
        fontWeight: 'bold',      
        width: 300,
        height: 60,
        margin: 15,
        borderStyle: 'solid',
        borderRadius: 10,
        // borderWidth: 5,

    },
    tinyLogo: {
      width: 60,
      height: 60,
      margin: 15,
      borderStyle: 'solid',
      borderRadius: 10,
      borderWidth: 5,
    },
});

export default Header;