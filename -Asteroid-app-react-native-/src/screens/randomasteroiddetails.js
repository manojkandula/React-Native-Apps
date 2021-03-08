import React,{useState}from 'react';
import { Text, StyleSheet,View,TouchableOpacity} from 'react-native';
import axios from 'axios';
import styles from '../styles/asteroidstyles';

const randomasteroiddetails = (props) => {

    const id=props.navigation.getParam('id', 'no-id');
    const [name, setname] = useState('');
    const [nasa_jpl_url,setnasa_jpl_url] = useState('');
    const [designation,setdesignation] = useState('');


    let list = [2000433,2000419,2000887,2001036,2001221,2001566,2001580,2001620,2001627,2001685,2001862,2001863,2001864,2001865,2001866,2001915,2001916,2001917,2001943,2001980];
let idd = list[Math.floor(Math.random() * list.length)];
    const details = async () => {
        
        const report = await axios.get(  

           ` https://api.nasa.gov/neo/rest/v1/neo/${idd}?api_key=w1t7DrdsgCRbcx5bpezzJkdt1InuaWvKeau77S4v` );
            
           let   result=report.data;
           setname(result.name);   
           setnasa_jpl_url(result.nasa_jpl_url);   
           setdesignation(result.designation); 
           console.log(designation);  

           console.log("fghjk" + result.designation);
         }

  return (
      <View>
  <Text style={styles.txts} onLayout={details}>random asteroid details </Text>
  <Text style={styles.texts}>asteroid name:{name}</Text>
  <Text style={styles.texts}>nasa_jpl_url:{nasa_jpl_url}</Text>
  <Text style={styles.texts}>designation:</Text>
  < TouchableOpacity 
        style={styles.Tohomes} onPress={()=>props.navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>



  </View>
  );
};



export default randomasteroiddetails;
