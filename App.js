import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SoundButton from "./SoundButton";
import TextToVoiceButton from "./TextToVoiceButton";
import VoiceButton from "./VoiceButton";
//import VoiceInput from "./VoiceInput";
//import VoiceBtn from "./Voice";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <SoundButton />
      <TextToVoiceButton />
      <VoiceButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
