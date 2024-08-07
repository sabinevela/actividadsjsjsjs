import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../themes/appthemes';

interface Props{
    textButton: string,
    onPress:()=> void;//prop de funcion
}

export const ButtonComponents = ({ textButton, onPress }:Props) => {
  return (
   <TouchableOpacity
   onPress={onPress}
   style={styles.button}>
    <Text style={styles.buttonText}>{textButton}</Text>
   </TouchableOpacity>
  )
}
