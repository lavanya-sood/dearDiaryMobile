import { StyleSheet, Text, View } from 'react-native';

export default function Thoughts() {
  return (
    <View style={styles.container}>
      <Text>Thoughts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
