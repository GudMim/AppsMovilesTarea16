import {View, Text, Image, StyleSheet} from "react-native";
import { router } from "expo-router";

export default function Index()
{

	return (
		<View style={styles.container}>
			<Text>Equipo [Orbitly]</Text>
			<Text>Guillermo Arrieta Medina</Text>
			<Text>Emiliano Rivera Beristain</Text>
			<Text>Sebastián Alejandro Guzmán Higuera</Text>
		</View>
	)
}

const styles=StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
});


