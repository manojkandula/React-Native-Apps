import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity } from "react-native";

import {FontAwesome5} from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";


const result = (props) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View style={{flex:1,backgroundColor:"lightblue"}}>
     

      <TouchableOpacity style={styles.button1}
      onPress={()=>props.navigation.navigate('profile')}>
     
      <Text style={styles.text} >profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}
      onPress={()=>props.navigation.navigate('set')}>
      <Text style={styles.text}>settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button3}
      onPress={()=>props.navigation.navigate('lists')}>
      <Text style={styles.text}>List</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button4}
       onPress={()=>props.navigation.navigate('Home')}>
          <Text style={styles.text}>signout</Text>
        </TouchableOpacity>
      
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View  style={styles.buttonstyle}>
     
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}> 
             <FontAwesome5 name="bars" size={45} color="#2196F3" />
             </TouchableOpacity>
             
      </View>
      <Text style={styles.paragraph}> welcome </Text>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     // alignItems: "center",
    // justifyContent: "center",
    
    padding: 30
   
  },
  containerdrawer:{
      flex:1,
  },
  text:{
      fontSize:20,
      fontWeight:"bold",
      alignSelf:"center"
  },
  button1:{
    position:"relative",
    backgroundColor:"lightgray",
    top:500,
    paddingTop:10,
    paddingBottom:10,
    alignContent:"flex-start",
    top:100,
  },
  button2:{
    position:"relative",
    backgroundColor:"lightgray",
    paddingTop:10,
    paddingBottom:10,
    alignContent:"flex-start",
    top:150,
   
  },
  button3:{
    position:"relative",
    backgroundColor:"lightgray",
    paddingTop:10,
    paddingBottom:10,
    alignContent:"flex-start",
    top:200,
   
  },
  button4:{
    position:"relative",
    backgroundColor:"lightgray",
    paddingTop:10,
    paddingBottom:10,
    alignContent:"flex-start",
    top:250,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    fontSize:30,
    top:300,
    left:130,
  },
  buttonstyle:{
    //   backgroundColor:"blue",
    width:40 
  },
  bstyle:{
     paddingTop:10,
  },
  bstyles:{
    paddingTop:50,
 },
 bstyless:{
    paddingTop:90,
 }
});

export default result;

