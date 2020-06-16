import React from 'react'
import {Feather} from '@expo/vector-icons';
import {View,TextInput,StyleSheet} from 'react-native'

const SearchBar =({term,onTermChange,onTermSubmitted})=>{
    return <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle}></Feather>
        <TextInput style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText = {onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmitted}
        />
    </View>
}

const styles= new StyleSheet.create({
background:{
    backgroundColor:'#0006',
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:'row',
    marginVertical:10
},
inputStyle:{
   
    fontSize:18,
    flex: 1,
 
},
iconStyle:{
    fontSize:35,
    alignSelf:'center',
    marginHorizontal:15
}
})



export default SearchBar