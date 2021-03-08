import React,{useState}from 'react';
import { Text, StyleSheet,View,TextInput,TouchableOpacity} from 'react-native';
import styles from '../styles/Countrystyles';

const HomeScreen = (props) => {

  const [country,setCountry]=useState('');

   return (
         <View style={styles.container} >

               <Text style={styles.Txt}> weather forecast </Text>
               <TextInput
                style={styles.inputView}
                onChangeText={(country) => setCountry(country)}
                value={country}
                placeholder="Enter country name "
                placeholderTextColor="red" 
              />
               <TouchableOpacity style={styles.Tohome}
                onPress={() =>props.navigation.navigate('Countryinfo',{country},)} >
               <Text style={styles.Txto}>SUBMIT</Text>
               </TouchableOpacity> 

       </View>
  );
};


export default HomeScreen;
