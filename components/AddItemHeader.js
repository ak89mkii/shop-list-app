import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const AddItemHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

AddItemHeader.defaultProps = {
    title: 'To Get List'
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#0047AB'
    },
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },
});

export default AddItemHeader;