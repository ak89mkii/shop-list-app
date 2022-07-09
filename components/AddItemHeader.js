import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const AddItemHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.tinyLogo}
        source={require('./components/Images/find.png')}
      />
      <Text style={styles.text}>{title}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

AddItemHeader.defaultProps = {
    title: 'TO FIND'
}

const styles = StyleSheet.create({
    header: {
      height: 70,
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0047AB',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',

    },
    tinyLogo: {
      width: 50,
      height: 50,
      margin: 15,
    },
});

export default AddItemHeader;