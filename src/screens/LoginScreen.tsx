import React, { useState } from 'react'
import { View, Text, StatusBar } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../themes/appthemes';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponents } from '../components/ButtonComponents';

interface FormLogin{
  email: string;
  password: string;
}

export const LoginScreen = () => {
  //hook use state para manipular el estado del formulario
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email:'',
    password:''
  });

  //funcion para actualizar el estado del formulario
  const handleSetValues=(name:string, value:string)=>{
   //cambiar el estado del formulario
   //... operador de propagacion | spread: crear una copia del objeto
  setFormLogin({...formLogin,[name]:value});
  }

  //funcion para iniciar sesion
  const handleSignIn=()=>{
    console.log(formLogin);
  }
  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title='Iniciar Sesion'/>
        <BodyComponent>
            <View>
            <Text style={styles.titleHeaderBody}>Bienvenido de nuevo !</Text>
            <Text style={styles.textBody}>Realiza tus compras de manera rapida y segura</Text>
            </View>
            <View style={styles.contentInput}>
            <InputComponent placeholder='Correo'  handleSetValue={handleSetValues} name='email'/>
            <InputComponent placeholder='Contraseña' handleSetValue={handleSetValues} name='password'/>
            </View>
            <ButtonComponents textButton='Iniciar' onPress={handleSignIn}/>
        </BodyComponent>
    </View>
  )
}
