import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
      container:{
        
        flexDirection:'row',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
      },

      body:{
        padding: 10,
      },

      title:{
        fontSize: 30,
        fontWeight:'bold',
        margin:10,
        marginBottom: 3,
        
      },

      text:{
        fontSize: 20,
        margin:10,
        marginTop: 3,
      },

      button_container:{
        flex:1,
        backgroundColor: '#00C2FF',
        padding:10,
        alignItems:'center',
        borderRadius:10,
      },

      button_title:{
        flex:1,
        fontSize:20,
        fontWeight:'bold',
        color: 'white',
      },

      rating:{
        fontStyle: 'italic',
        textAlign: 'right',
        paddingBottom:10,
       },
       
} 
);