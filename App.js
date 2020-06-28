import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

import Game from './Game';


 const App = () => {

  const API_URL = 'https://gamemonetize.com/rssfeed.php?format=json&category=All&type=html5&company=All&amount=All';
  
  const [items, setItems] = React.useState([]);
 
  useEffect(() => {
  
  loadData();
 
 },[]);

 const loadData = async () => {
   const response = await fetch(API_URL);
   const data = await response.json();
   setItems(data);
   console.log(data);
  }

  return (
    <SectionGrid
      itemDimension={100}
      sections={[
        {
          title: "Mint's picks",
          data: items.slice(0, 9),
        },
        {
          title: 'Must-have',
          data: items.slice(10, 13),
        },
        {
          title: 'Popular',
          data: items.slice(14),
        },
      ]}
      style={styles.gridView}
      renderItem={({item, section, index}) => (
        <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
          <Game key={index} title={item.title} thumb={item.thumb} url={item.url}/>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View>
        <Text style={styles.sectionHeader}>
        {section.title}</Text>
        </View>
      )}
    />
  );
}

export default App; 

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
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginTop:10,
  },
  image: {
    height: 180,
    width: 120,
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    marginTop:10,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#000000',
    color: 'white',
    position: 'relative',
    left: 10,
    padding: 10,
  },
});