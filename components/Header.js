import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

Header.defaultProps = {
    title: 'Supplies Tracker'
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },
});

export default Header;