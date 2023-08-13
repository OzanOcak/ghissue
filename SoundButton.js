import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";
import { useState } from "react/cjs/react.production.min";

export default function SoundButton() {
  //const [counter, setCounter] = useState(1);
  const [sound, setSound] = React.useState();

  async function trueSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require(`./assets/right.mp3`)
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function falseSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require(`./assets/wrong.mp3`)
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={true ? trueSound : falseSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
