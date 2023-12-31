import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import Text from "./app/components/Text"

export default function App() {
  return (
    <View style={styles.container}>
      <Text text="Hello World!" />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
