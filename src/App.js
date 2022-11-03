import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView,ScrollView,StyleSheet, Text,Dimensions,Image} from 'react-native';
import Card from './components/Card';

function App () {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://dummyjson.com/products',
    })
    .then((response) =>  {
      setData(response.data?.products)
    })
    .catch((err) => {
      console.error(err)
    });
  }, []);

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Mağaza</Text>
      <ScrollView>
        {
          data.map( (item,key )=> {
            return <Card key={key} title={item.title} text={item.description} stock={item.stock}
            price={item.price} brand={item.brand} category={item.category}
            rating={item.rating}/>
            
          })
          
        }
      </ScrollView>
  </SafeAreaView>
      
  );
}

 const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#eee9e9',
  },
  header:{
    fontWeight: 'bold',
    fontSize:50,
   }
  
 });

export default App;
