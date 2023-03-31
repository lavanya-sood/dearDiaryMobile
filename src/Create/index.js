import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

export default function Create() {
  return (
    <LinearGradient style={styles.container} colors={["#f7d6e0", "#fcdfc7"]}>
      <Text>Create</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
