import React, { useState } from 'react';
import {Text,View,TextInput,TouchableOpacity,Image,ScrollView,} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './Style/styles';
import Details from '../../Details.json';


export default function SearchScreen(props) {
  const [searchName, setsearchName] = useState('');
  const [employees, setemployees] = useState([]);
  const [filteredemployees, setFilteredemployees] = useState([]);
 

  
  const Contacts = ()=>{
        setemployees(Details);    
  }
  
  return (
    <View style={{ flex: 1, paddingTop: 20 }} onLayout={Contacts}>
      <View style={styles.container}>
        <View style={styles.searchView}>
          <View style={styles.inputView}>
            <TextInput
              defaultValue={searchName}
              style={styles.input}
              placeholder='Search'
              textContentType='name'
              onChangeText=
              {(text) => {
                setsearchName(text);
                if (text === '') {
                  return setFilteredemployees([]);
                }
                const filtered_employees = employees.filter((user) =>
                  user.firstName.toLowerCase().startsWith(text.toLowerCase())
                );
                setFilteredemployees(filtered_employees);
                
              }}
              returnKeyType='search'
            />
            {searchName.length === 0 ? (
              <TouchableOpacity>
                
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setsearchName('');
                  setFilteredemployees([]);
                }}
              >
                <Icon name='cancel' size={24} color='#333' />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {filteredemployees.length > 0 ? (
          <ScrollView>
            {filteredemployees.map((user) => (
                
              <TouchableOpacity
              
                style={styles.userCard}
                onPress={() => {
                    
                    props.navigation.navigate('Contact',user);
                    
                }}>
                <Image
                  style={styles.userImage}
                  source={{ uri: user.picture }}
                />
                <View style={styles.userCardRight}>
                  <Text
                    style={{ fontSize: 18, fontWeight: '500' }}
                  >{`${user.firstName} ${user.lastName}`}</Text>
                 
                </View>
              </TouchableOpacity>
            ))}
            
            <View style={{ height: 50 }}></View>
          </ScrollView>
        ) : searchName.length > 0 ? (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>No user found</Text>
          </View>
        ) : (
         <Text style={styles.search}> Search your contact</Text>
        )}
      </View>
    </View>
  );
}


