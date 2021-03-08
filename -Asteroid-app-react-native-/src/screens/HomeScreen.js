import React,{useState}from 'react';
import { Text, StyleSheet, TouchableOpacity,View } from 'react-native';
import { TextInput} from 'react-native-gesture-handler';
import styles from '../styles/asteroidstyles';

const HomeScreen = (props) => {
  const submit="submit";

  const [id,setid]=useState('');
  return (
   
    <View>
      

  <Text style={styles.txt}>HomeScreen</Text>

        <TextInput
        style={styles.inputView}
          onChangeText={(id)=>setid(id)}
          value={id}
          placeholder="enter asteroid id "
         />
        < TouchableOpacity 
        style={id!='' && styles.Tohome} onPress={()=>id!='' && props.navigation.navigate('asteroidDet',{id})}>
          <Text>{id!='' && submit}</Text>
        </TouchableOpacity>


        < TouchableOpacity 
        style={styles.Tohomes} onPress={()=>props.navigation.navigate('randomasteroidDet')}>
          <Text>Random asteroid</Text>
        </TouchableOpacity>

   </View>

  );
};



export default HomeScreen;
