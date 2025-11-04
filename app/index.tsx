import { Text, View, StyleSheet, 
		TextInput, Pressable,
		Button, Platform
} from "react-native";
import { useFonts } from "expo-font";
import IconRocket from './iconrocket';
import IconRobot from './robot';
import { Endpoints } from "@/constants/Endpoints";
import { useContext, useState } from 'react'
import { MyContext } from "./Context";
import * as Crypto from 'expo-crypto';
import { Link, router } from "expo-router";

/*
	Aplicación para demostrar la implementación de una pantalla de login usando fetch y una API que espera FormData.

	Recursos de Aprendizaje:
		https://docs.expo.dev/develop/user-interface/fonts/
		https://reactsvgicons.com/react-svg-icons-guide
		https://docs.expo.dev/router/introduction/
		https://docs.expo.dev/router/navigating-pages/
		https://react.dev/learn/passing-data-deeply-with-context
*/

export default function Index() {

	const [loaded, error] = useFonts({
		'poppins': require('../assets/fonts/PoppinsSemiBold.ttf'),
	  });
	const [userValue, setUserValue] = useState('');
	const [passValue, setPassValue] = useState('');
	const [failedLogin, setFailedLogin]= useState(false);
	const {loginData, setLoginData}=useContext(MyContext);

	const onButtonLogin = async ()=>
	{
		console.log('logging in!');
		//hacer la peticion de login
		//console.log(Endpoints.LOGIN);
		const digest = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256,
			passValue);

		const form = new FormData();
		form.append('token','code37');  //la API espera una llave cuyo valor es arbitrariamente code37
		form.append('user',userValue);
		form.append('pass', digest);

		fetch( Endpoints.LOGIN , {
			method:'POST',
			body:form
		})
		.then( response=>response.json())
		.then( data => {console.log(data) 
			if(!data.error && data.id)
			{
				setLoginData(data);
				router.replace({ pathname: '/profile' } as any);
			}
			else
			{
				setFailedLogin(true);
			}
		})
		.catch( err=>{console.log(err)});
	}

	const onButtonRegister = async ()=>
	{
		console.log('Por implementar :)');
	}

  return (
    <View style={styles.container}>
		{/* IconRocket es un componente definido en app/iconrocket.tsx, el cual es un SVGElement, osea una imagen vectorial*/}
	<IconRocket width="150" height="150"></IconRocket>
	<Text style={styles.title}>Orbitly</Text>
		<Text style={styles.subtitle}>¡Te damos la bienvenida!</Text>		
		<View style={styles.inputfieldlabel}>
			<Text >Usuario</Text>
			<TextInput style={styles.input} onChangeText={setUserValue}></TextInput>
		</View>
		<View style={styles.inputfieldlabel}>
			<Text >Contraseña</Text>
			<TextInput style={styles.input} onChangeText={setPassValue} secureTextEntry></TextInput>
		</View>
		{/* Dentro del JSX/TSX podemos poner codigo condicional para mostrar componentes según sea necesario */}
		{failedLogin? (<Text style={styles.error}>Error al hacer login</Text>):undefined}
		{/* Los iconos de los botones están definidos en app/iconrobot.tsx */}
		<Pressable style={styles.botonconlogo} onPress={onButtonLogin} >
			<IconRobot width='32' height='32'></IconRobot>
			<Text>Log in!</Text>
		</Pressable>
			<Text style={{fontWeight:'bold'}} >¿No tienes una cuenta?</Text>
		<Pressable style={styles.botonconlogo} onPress={onButtonRegister} >
			<IconRobot width='32' height='32'></IconRobot>
			<Text>Regístrate</Text>
		</Pressable>
		<View style={styles.footer}>
				<Link href="/credits">
				<Text>Made with 🧡 by Orbitly Team.</Text>
				</Link>
		</View>	

    </View>
	
  );
}
/*
		<Link href="./pruebafoto" asChild>
			<Button title="Prueba de imagen"></Button>
		</Link>
*/

const styles=StyleSheet.create(
	{
		container:{
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
		title:{
			fontFamily:'poppins',
			fontSize:44
		},
		subtitle:{
			fontFamily:'poppins',
			fontSize:18,
			marginVertical: 10,
		},
		inputfieldlabel:
		{
			flexDirection:'row',
			alignItems: 'center',
			justifyContent: 'flex-end',
			width:'60%'
		},
		footer:{
			position:"absolute",
			bottom:5,
			backgroundColor:"#afa",
			padding:10,
		},
		input: {
			height: 40,
			width:150,
			margin: 12,
			borderWidth: 1,
			padding: 10,
		  },
		botonconlogo:
		{
			backgroundColor:'#F9D689',
			flexDirection:'row',
			alignItems: 'center',
			padding:5,
			borderRadius:5,
			borderColor:'#000',
			borderWidth:2,
			width:150,
			marginVertical:10,
			justifyContent:'flex-start',
			gap:10
		},
		error:{
			padding:5,
			color:"#F22"
		}
		//#973131 #E0A75E #F9D689 #F5E7B2
		
	}
)