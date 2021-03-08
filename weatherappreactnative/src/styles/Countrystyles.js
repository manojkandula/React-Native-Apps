import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f8ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Txt:{
      fontSize:50,
      fontWeight:'bold',
      fontStyle:'italic'
    },
  
    Txto:{
        fontSize:15,
        fontWeight:'bold',
     
    }, 
    
    TextInput: {
      height: 20,
      flex: 1,
      padding: 2,
      marginLeft: 20,
    },
    inputView: {
      backgroundColor: "lightyellow",
      borderRadius: 30,
      width: "60%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    countryinfoweather: {
        position:'absolute',
        zIndex: 11,
        right: 10,
        bottom: 250,
        backgroundColor: 'yellow',
        width: 350,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    vweather:{
        flex:1,
        backgroundColor: '#f0f8ff',

    },
    Tohome:{
        backgroundColor: 'yellow',
        borderRadius: 10,
        width: 100,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Toweather:{
        backgroundColor: 'yellow',
        borderRadius: 10,
        width: 350,
        left: 50   ,
        bottom: -425,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    countryinfocontainer: {
        flex : 1,
        backgroundColor: '#f0f8ff', 
        },
   countryinfodetails: {
         position:'absolute',
         zIndex: 11,
         right: 10,
         bottom: 300,
         backgroundColor: 'yellow',
         width: 350,
         height: 30,
         borderRadius: 10,
         alignItems: 'center',
         justifyContent: 'center',
         elevation: 10, 
          },
    countryinfoit:{
         fontSize: 10,
          },
     countryinfoi: {
         width: 300,
         height: 200
            },
  
  });
  export default styles;