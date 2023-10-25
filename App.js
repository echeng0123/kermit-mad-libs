import React from "react";
import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	Image,
	ScrollView,
	TextInput,
	Button,
	Pressable,
	ImageBackground,
} from "react-native";
import style from "./App.module.css";
import { useFonts } from "expo-font";

import bgimage from "./assets/frog-bg.jpg";

export default function App() {
	const [fontsLoaded] = useFonts({
		Barriecito: require("./assets/fonts/Barriecito-Regular.ttf"),
	});
	const [text1, setText1] = React.useState("");
	const [text2, setText2] = React.useState("");
	const [text3, setText3] = React.useState("");
	const [text4, setText4] = React.useState("");
	const [text5, setText5] = React.useState("");

	const Story1 = `I woke up to ${text1} on the outside of my ${text2} window. In a daze I thought it must be the neighborhood ${text3}. I live on the ${text4}`;

	const Story2 = `My ${text1} has been refusing to sleep in his ${text2} because of a ${text3} in the ${text4}. We took the ${text4} doors off. Now none of us sleep.`;

	const Story3 = `I awoke, and in a daze, I heard it. "${text1}", a small voice said from just outside my ${text2}, "Can I ${text3} with you?" I live ${text4}.`;

	const Story4 = `Once upon a time, there was a ${text1}. One day, ${text2} ${text3} over the ${text4}. "${text5}," ${text3} said, "I'm sick of this!" ${text2} was never seen again.`;

	const Story5 = `I stood at the foot of the ${text1}, towering over ${text2} like a behemoth. The ${text3} was no match for my ${text4}.`;

	const [currentStory, setCurrentStory] = React.useState(Story1);
	const [submitted, setSubmitted] = React.useState(false);
	const [alert, setAlert] = React.useState(false);
	console.log("text1", text1);
	// console.log("story1", Story1);

	if (!fontsLoaded) {
		return null;
	}

	function submit() {
		if (text1 && text2 && text3 && text4 && text5) {
			setSubmitted(true);
		} else {
			setAlert(true);
		}
	}

	return (
		<ScrollView>
			<ImageBackground
				source={bgimage}
				resizeMode="cover"
				style={style.image}
			>
				<View style={style.container}>
					<Text style={style.heading}>Kermit Mad Libs</Text>
					<Text style={style.story}>
						{submitted ? currentStory : "Kermit is thinking..."}
					</Text>
					<Image
						source={require("./assets/kermit.png")}
						style={style.kermit}
					/>
				</View>
				<View style={style.textContainer}>
					<TextInput
						style={style.textInput}
						onChangeText={() => setText1()}
						placeholder="Enter a noun"
					/>
					<TextInput
						style={style.textInput}
						onChangeText={setText2}
						placeholder="Enter a noun"
					/>
					<TextInput
						style={style.textInput}
						onChangeText={setText3}
						placeholder="Enter a noun"
					/>
					<TextInput
						style={style.textInput}
						onChangeText={setText4}
						placeholder="Enter a noun"
					/>

					<TextInput
						style={style.textInput}
						onChangeText={setText5}
						placeholder="Enter a noun"
					/>
					<Pressable onPress={submit} style={style.button}>
						<Text style={style.buttonText}>Submit Choices</Text>
					</Pressable>
					{alert && (
						<Text style={style.alert}>
							Please enter words for the story.
						</Text>
					)}
				</View>
			</ImageBackground>
		</ScrollView>
	);
}
