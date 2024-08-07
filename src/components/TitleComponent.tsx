import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { styles } from '../themes/appthemes'; 


interface Props {
  title: string;
}
export const TitleComponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
      <Text style={{
          ...styles.globalTitle,
          height: height * 0.19
        }}>
        {title}</Text>
    );
  };
