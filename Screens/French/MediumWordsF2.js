import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';

export default class MediumScreenF2 extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.header}>Medium French</Text>
          <Text style={styles.header}>English Words</Text>
                  </View>
           <TouchableOpacity style={styles.button1} onPress={()=>this.props.navigation.navigate("Home")}>         
            <Text style={styles.text}>Back</Text>
           </TouchableOpacity>
          <Text style={styles.text2}>1. Je</Text>
          <Text style={styles.text2}>2. Tu</Text>
          <Text style={styles.text2}>3. Il/Elle</Text>
          <Text style={styles.text2}>4. Nous</Text>
          <Text style={styles.text2}>5. On</Text>
          <Text style={styles.text2}>6. Vous</Text>
          <Text style={styles.text2}>7. Ils/Elles</Text>
          <Text style={styles.text2}>8. Mais</Text>
          <Text style={styles.text2}>9. Je Joue</Text>
          <Text style={styles.text2}>10. Jai Regarde</Text>
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