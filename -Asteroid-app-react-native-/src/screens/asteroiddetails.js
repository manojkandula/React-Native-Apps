import React,{useState} from 'react';
import { Text, StyleSheet,View,TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles/asteroidstyles';

const asteroiddetails = (props) => {

    const id=props.navigation.getParam('id', 'no-id');
    console.log(id);
    const [name, setname] = useState('');
    const [nasa_jpl_url,setnasa_jpl_url] = useState('');
    const [designation,setdesignation] = useState('');



    const details = async () => {
        
        const report = await axios.get(  

           ` https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=w1t7DrdsgCRbcx5bpezzJkdt1InuaWvKeau77S4v` );
            
           let   result=report.data;
           setname(result.name);   
           setnasa_jpl_url(result.nasa_jpl_url);   
           setdesignation(result.designation);   

         }
  return(
  
    <View>
   <Text style={styles.txt} onLayout={details}>asteroid details </Text>
   <Text></Text>
   <Text style={styles.texts}>asteroid name  :{name}</Text>
   <Text style={styles.texts}>nasa_jpl_url:{nasa_jpl_url}</Text>
   <Text style={styles.texts}>designation:{designation}</Text>
   < TouchableOpacity 
        style={styles.Tohomes} onPress={()=>props.navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>


   </View>
  );
};



export default asteroiddetails;
