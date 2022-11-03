import React from 'react';
import { View, Text , TouchableOpacity, Alert, Image, SafeAreaView} from 'react-native';
import styles from './Card.style';

const Card = props => {
    return (

      <SafeAreaView style={styles.container}>
            <View style={styles.body}>
             <View>
              <Text style={styles.title}> {props.brand} {props.title}</Text>
              <Text style={styles.text}>{props.text}</Text>
              <Text style={styles.text}> Stock: {props.stock}</Text>
              <Text style={styles.text}> Category: {props.category}</Text>
              <Text style={styles.rating}>⭐️⭐️⭐️⭐️⭐️ {props.rating} </Text>
             </View>
              <TouchableOpacity style={styles.button_container} 
                  onPress={() => Alert.alert('Sepete eklendi.' +' '+ props.title)} >
                  <Text style={styles.button_title}>
                  Satın al:{props.price}0₺
                  </Text>
              </TouchableOpacity>
            </View>
             
       
       </SafeAreaView>
        
    );
};

export default Card;
