//Gestionar los estilos

import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";

export const styles=StyleSheet.create({
    globalTitle:{
        color: SECUNDARY_COLOR,
        fontSize:27,
        paddingHorizontal:30,
        paddingVertical:40,
        fontWeight:'bold'
    },
    contentBody:{
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:40,
        paddingTop:40
        
    },
    titleHeaderBody:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
    },
    textBody:{
        fontSize:15,
        color:'grey',

    },
    inputText:{
        backgroundColor:INPUT_COLOR,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10

    },
    contentInput:{
        marginTop:30,
        gap:30
    },
    button:{
       backgroundColor:PRIMARY_COLOR,
       paddingVertical: 15,
       borderRadius:10,
       marginTop:30
       
    },

    buttonText:{
        color:SECUNDARY_COLOR,
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    }

});