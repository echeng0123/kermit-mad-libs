import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import style from "./App.module.css";
import { useFonts } from "expo-font";

export default function App() {
	const [fontsLoaded] = useFonts({
		Barriecito: require("./assets/fonts/Barriecito-Regular.ttf"),
	});
	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={style.container}>
			<Text style={style.heading}>Kermit Mad Libs</Text>
			<Image></Image>
		</View>
	);
}
