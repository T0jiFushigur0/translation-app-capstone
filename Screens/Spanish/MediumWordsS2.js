import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';

export default class MediumScreenS2 extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.view}>
        
          <Text style={styles.header}>Medium Spanish</Text>
          <Text style={styles.header}>Spanish Words</Text>
                  </View>
           <TouchableOpacity style={styles.button1} onPress={()=>this.props.navigation.navigate("Home")}>         
            <Text style={styles.text}>Back</Text>
           </TouchableOpacity>
          <Text style={styles.text2}>1. Hermano</Text>
          <Text style={styles.text2}>2. Hermana</Text>
          <Text style={styles.text2}>3. Caliente</Text>
          <Text style={styles.text2}>4. Avion</Text>
          <Text style={styles.text2}>5. Nevada</Text>
          <Text style={styles.text2}>6. Ventosa</Text>
          <Text style={styles.text2}>7. Hombre</Text>
          <Text style={styles.text2}>8. Mujer</Text>
          <Text style={styles.text2}>9. Jugar</Text>
          <Text style={styles.text2}>10. Llamar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({



  container:{
      flex: 1,
      backgroundColor: 'aqua'
    },
    view:{
      flex: 0.25,
      justifyContent: 'center',
      alignItems: 'center'
    },
    header:{
      fontSize: 34,
      marginTop: 2,
      
    },
    button1:{
      flex: 0.25,
      marginBottom:10,
      borderRadius: 40,
      marginLeft: 50,
      marginRight: 50,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text:{
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text2:{
    fontSize:15,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text3:{
      marginTop: 40,
      marginLeft: 50,
      marginRight: 50,
      fontSize: 17,
      justifyContent: 'center',
      alignItems: 'center'
    }

})