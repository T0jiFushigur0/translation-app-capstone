import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';

export default class HardScreenJ extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.header}>Hard Japanese</Text>
          <Text style={styles.header}>English Words</Text>
                  </View>
           <TouchableOpacity style={styles.button1} onPress={()=>this.props.navigation.navigate("BasicWordsJ2")}>         
            <Text style={styles.text}>Translations</Text>
           </TouchableOpacity>
          <Text style={styles.text2}>1. Good Morning</Text>
          <Text style={styles.text2}>2. Good Weather, Huh!</Text>
          <Text style={styles.text2}>3. How Are You</Text>
          <Text style={styles.text2}>4. Long Time, No See</Text>
          <Text style={styles.text2}>5. Goodnight</Text>
          <Text style={styles.text2}>6. See You Later</Text>
          <Text style={styles.text2}>7. Im Home</Text>
          <Text style={styles.text2}>8. Welcome Back</Text>
          <Text style={styles.text2}>9. Please Excuse Me</Text>
          <Text style={styles.text2}>10. Thanks For Your Hard Work</Text>
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