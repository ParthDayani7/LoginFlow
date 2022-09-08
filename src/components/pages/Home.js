import React from 'react';
import {View, Text, FlatList, StyleSheet, Button,ScrollView} from 'react-native';
import {UseGetAllAnime} from '../common/getAllAnimeQuery';



const HomeScreen = ({navigation}) => {
  const {data, isLoading} = UseGetAllAnime();

  
  return (
    <ScrollView>
    <View >
      {isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        
            data.data.map((item, key) => {
            return (
              <View key={key} style={style.b1}>
           <Text>Type={item.type}</Text>
           <Text>Title={item.title}</Text>
           <Text>Source={item.source}</Text>

              </View>
            );
          })
      ):(
        <Text>Whoops No Data Available</Text>
      )}
      <Text>Home Screen</Text>
      <Button title='Next'/>
    </View>
    </ScrollView>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },

  b1:{
    padding:10,
    marginTop:10,
    borderRadius:5,
    marginLeft:20,
    marginRight:20,
    shadowColor: '',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 2,  
    elevation: 2
},




})



