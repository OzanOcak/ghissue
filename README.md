npm i @react-native-voice/voice expo-dev-client

expo-dev-client helps to automade and link the code files,plugins to project

then write below in app.json

"plugins": [
[
"@react-native-voice/voice",
{
"microphonePermission": "Allow Voice to Text Tutorial to access the microphone",
"speechRecognitionPermission": "Allow Voice to Text Tutorial to securely recognize user speech"
}
]
]

eas login
eas build:configure

this will create eas.json
ti smilate ios device in eas.json

"build": {"development":{"ios":{"smilutor":"true"}}

eas build -p android --profile development --local

expo start --dev-client

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
