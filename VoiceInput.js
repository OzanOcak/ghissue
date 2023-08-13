import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Voice from "@react-native-voice/voice";

const VoiceInput = () => {
  const [result, setResult] = React.useState("");
  const [error, setError] = React.useState("");
  const [isRecording, setIsRecording] = React.useState(false);

  Voice.onSpeechStart = () => setIsRecording(true);
  Voice.onSpeechEnd = () => setIsRecording(false);
  Voice.onSpeechError = (err) => setError(err.error);
  Voice.onSpeechResults = (result) => setResult(result.value[0]);

  const startRecording = async () => {
    try {
      await Voice.start("en-US");
    } catch (err) {
      setError(err);
    }
  };
  const stopRecording = async () => {
    try {
      await Voice.stop("fr-FR");
    } catch (err) {
      setError(err);
    }
  };
  return (
    <View style={{ display: "flex", flexDirection: "flex-row" }}>
      <Text>VoiceInput</Text>
      <Text>{result}</Text>
      <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
        <Text>{isRecording ? "stop recording" : "start recording"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VoiceInput;
