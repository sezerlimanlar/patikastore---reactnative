import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: 32 }}>
      <HomeScreen />
    </View>
  );
}

