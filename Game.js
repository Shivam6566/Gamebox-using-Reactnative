import React from 'react';
import {  View, Image, StyleSheet, Text,TouchableHighlight,Linking} from 'react-native';

const Game = ({thumb, title,url}) => {
     
   
     
    return(
        <View style={styles.itemContainer}>
       <TouchableHighlight  onPress={() =>
          Linking.openURL(url)}>
       <Image
        style={styles.image}
        source={{
          uri: thumb,
        }}
       />
       </TouchableHighlight>
       <Text style={styles.itemName}>{title}</Text>
      
      </View>
    )
}

export default Game;

const styles = StyleSheet.create({
    gridView: {
      flex: 1,
      backgroundColor: '#000000',
      
      
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      backgroundColor: '#000000',
      padding: 10,
      height: 160,
      margin:-10,
      
    },
    itemName: {
      fontSize: 14,
      color: '#fff',
      fontWeight: '600',
      backgroundColor:'#273746',
      borderRadius:10,
      height:50,
    },
    
    image: {
      height:100,
      width:100,
      borderRadius:5,
      marginTop:5,
    },
    sectionHeader: {
      flex: 1,
      fontSize: 15,
      marginTop:10,
      fontWeight: '600',
      alignItems: 'center',
      backgroundColor: '#000000',
      color: 'white',
      position:'relative',
      left:10,
      padding: 10,
    },
  });