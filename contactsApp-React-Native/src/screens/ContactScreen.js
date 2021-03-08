import React, { useState, useEffect } from 'react';
import {Text,View,TouchableOpacity,Image,Linking} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './Style/styles';
import Details from '../../Details.json';


const ContactScreen = (props)=>{
    const FirstName=props.navigation.getParam('firstName', 'no-firstName');
    const LastName=props.navigation.getParam('lastName', 'no-lastName');
    const picture=props.navigation.getParam('picture', 'no-pic');
    
    const Number=props.navigation.getParam('mobilephone', 'no-mobilephone');
    const Email=props.navigation.getParam('email', 'no-emailId');
    const Id = props.navigation.getParam('id','no-id');
    const manager = props.navigation.getParam('managerName','no-managerName');
    
    
    
    
    return(
<View>
     <View style={styles.conactUser}>
            <Image
                  style={styles.contactUserImage}
                  source={{ uri: picture }}
                />
                
            <Text style={styles.nameTextStyle }>{FirstName} {LastName}</Text>
            
       </View>
      <View>
        <TouchableOpacity style={{right:180,top:35}}
         onPress={()=>{Linking.openURL(`tel:${Number}`)}}>
        
        <Icon 
                name='call'
                type='ionicon'
                color='#517fa4'
            />
        <Text style={{fontSize:30,opacity:0.3,left:250,bottom:35}}> {Number}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{right:180,top:60}}
           onPress={()=>{Linking.openURL(`mailto:${Email}`)}}>
        <Icon 
                name='mail'
                type='ionicon'
                color='#517fa4'
            />
        <Text style={{fontSize:30,opacity:0.3,left:250,bottom:35}}> {Email}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{right:180,top:90}}
       onPress={()=>{Linking.openURL(`sms:${Number}`)}}>
        <Icon 
                name='chatbox-sharp'
                type='ionicon'
                color='#517fa4'
            />
        <Text style={{fontSize:30,opacity:0.3,left:250,bottom:35}}> {Number}</Text>
        </TouchableOpacity>
       

      </View>

</View>         
       
    )
}
export default ContactScreen;


// <View style={styles.conactUser}>
// <Image
//       style={styles.contactUserImage}
//       source={{ uri: picture }}
//     />
   
// {/* <Text style={styles.nameTextStyle }>{FirstName} {LastName}</Text> */}


// </View>