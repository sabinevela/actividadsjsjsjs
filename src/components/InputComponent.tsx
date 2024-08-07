import React from 'react'
import { TextInput } from 'react-native'
import { styles } from '../themes/appthemes'

interface Props{
    placeholder:string;
    handleSetValue: (name:string, value:string)=> void;  //prop funcion
    name:string;
}

export const InputComponent = ({placeholder,handleSetValue,name}:Props) => {
  return (
    <TextInput
    placeholder={placeholder}
    keyboardType='default'
    onChangeText={(value)=>handleSetValue(name,value)}
    style={styles.inputText} 
      />
  )
}
