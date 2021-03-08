import React,{useState} from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';
import axios from 'axios';
import styles from '../styles/Countrystyles';

const CountryinfoScreen =(props) =>{

    const [capital, setCapital] = useState('');
    const [population, setPopulation] = useState('');
    const [latlng, setlatlng] = useState('');
    const [region,setregion]=useState('');
    const [image,setimage]=useState('');
    const CountryName=props.navigation.getParam('country', 'no-country');

    const countrydetails = async () => {
        
              const response = await axios.get(

              `https://restcountries.eu/rest/v2/name/${CountryName}` );

              let res= response.data;
              setCapital(res[0].capital);
              console.log(capital);
              setPopulation(res[0].population);
              setlatlng(res[0].latlng[0]);
              setregion(res[0].region);
              setimage(res[0].flag);
              console.log("flag: " + image);
             
               };
             
    return (
        <View style={styles.countryinfocontainer}> 
                    <Text > ~{CountryName}~ </Text>                   
                    <Text>Population: {population}</Text>
                     <Text>Capital: {capital}</Text>
                     <Text>Latlng: {latlng}</Text>
                     <Text>region:{region}</Text>    
                <Text>Flag: </Text>
                <Image
                  style={styles.countryinfoi} 
                  source={{
                    uri: `${image}`
                  }}
                  />
                  <TouchableOpacity style={styles.countryinfoweather}
                   onPress={()=>props.navigation.navigate('Weather',{capital})}>
                   <Text> capital weather</Text>
                   </TouchableOpacity> 
                   <TouchableOpacity style={styles.countryinfodetails}                  
                    onPress={countrydetails}>
                    <Text> country details</Text>
                    </TouchableOpacity>
            </View>
            );
};


export default CountryinfoScreen;
 