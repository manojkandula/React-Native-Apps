import React,{useState} from 'react';
import { Text, View, Button, Image ,TouchableOpacity} from 'react-native';
import axios from 'axios';
import styles from '../styles/Countrystyles';

const WeatherScreen =({navigation})=>{
    const [localtime, setlocaltime] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [humidity, setHumidity] = useState('');
    const [temperature, setTemperature] = useState('');
    const CapitalName=navigation.getParam('capital', 'no-capital');
    console.log(CapitalName);
    const capitalWeather = async () => {                                        
          const response = await axios.get(
            `http://api.weatherstack.com/current?access_key=7df9a6a904e2aba3c2a3f800f87f40e8&query=${CapitalName}`,
          );
           let result= response.data;
            console.log(result);
            setlocaltime(result.location.localtime);            
            setWindSpeed(result.current.wind_speed);   
            console.log(windSpeed);
            setHumidity(result.current.humidity);
            setTemperature(result.current.temperature);

      };
        return(
         <View style={styles.vweather}>

                 <Text> ~ {CapitalName} ~ </Text>
                 <Text>Localtime: {localtime}</Text>
                 <Text>Wind speed: {windSpeed}</Text>
                 <Text>Humidity: {humidity}</Text>
                 <Text> Temperature: {temperature} </Text>
                 <TouchableOpacity style={styles.Toweather}
                  onPress={capitalWeather}> 
                  <Text>weather details</Text>
                  </TouchableOpacity>      
      </View>
        );
    };
  
export default WeatherScreen;


