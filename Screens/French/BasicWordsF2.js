import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';

export default class BasicScreenF2 extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.header}>Basic French</Text>
          <Text style={styles.header}>English Words</Text>
                  </View>
           <TouchableOpacity style={styles.button1} onPress={()=>this.props.navigation.navigate("Home")}>         
            <Text style={styles.text}>Home</Text>
           </TouchableOpacity>
          <Text style={styles.text2}>1. Bonjour</Text>
          <Text style={styles.text2}>2. Non</Text>
          <Text style={styles.text2}>3. Merci</Text>
          <Text style={styles.text2}>4. Copain</Text>
          <Text style={styles.text2}>5. Bon(M)/Bonne(F)</Text>
          <Text style={styles.text2}>6. Au Revoir</Text>
          <Text style={styles.text2}>7. Adore</Text>
          <Text style={styles.text2}>8. Oui</Text>
          <Text style={styles.text2}>9. Bien Sur</Text>
          <Text style={styles.text2}>10. Garcon</Text>
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