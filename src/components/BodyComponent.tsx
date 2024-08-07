import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native';
import { styles } from '../themes/appthemes';

export const BodyComponent = (props:any) => {

    //hook useWindowDimension:tamaño de la pantalla
    const{height}=useWindowDimensions();
    return (
        <View style={{
            ...styles.contentBody,
            height: height * 0.88
        }}>
          {props.children}
        </View>
      );
    };
