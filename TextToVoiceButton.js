import * as React from "react";
import { View, Button } from "react-native";
import * as Speech from "expo-speech";

const TextToVoiceButton = () => (
  <View style={{ margin: 100 }}>
    <Button
      title="Click"
      onPress={() => {
        Speech.speak("bonjour, l'application fonctionne", {
          language: "fr-FR",
        });
      }}
    />
  </View>
);

export default TextToVoiceButton;
