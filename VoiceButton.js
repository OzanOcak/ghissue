import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Voice from "@react-native-voice/voice";

export default function VoiceButton() {
  let [started, setStarted] = React.useState(false);
  let [results, setResults] = React.useState([]);

  React.useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startSpeechToText = async () => {
    await Voice.start("fr-FR");
    setStarted(true);
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
  };

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  return (
    <View style={styles.container}>
      {!started ? (
        <Button title="Start Speech to Text" onPress={startSpeechToText} />
      ) : undefined}
      {started ? (
        <Button title="Stop Speech to Text" onPress={stopSpeechToText} />
      ) : undefined}
      {/*results.map((result, index) => (
        <Text key={index}>{result}</Text>
      ))*/}
      <Text>{results[0]}</Text>

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
