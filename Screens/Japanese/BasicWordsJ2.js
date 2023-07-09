import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';

export default class BasicScreenJ2 extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.header}>Basic Japanese</Text>
          <Text style={styles.header}>English Words</Text>
                  </View>
           <TouchableOpacity style={styles.button1} onPress={()=>this.props.navigation.navigate("Home")}>         
            <Text style={styles.text}>Back</Text>
           </TouchableOpacity>
          <Text style={styles.text2}>1. Konichiwa</Text>
          <Text style={styles.text2}>2. Iie</Text>
          <Text style={styles.text2}>3. Arigatou Gozai Mashi Ta</Text>
          <Text style={styles.text2}>4.  Yuujin</Text>
          <Text style={styles.text2}>5. Yoshi</Text>
          <Text style={styles.text2}>6. Ja Mata</Text>
          <Text style={styles.text2}>7. Ai</Text>
          <Text style={styles.text2}>8. Hai</Text>
          <Text style={styles.text2}>9. Mochiron Desu</Text>
          <Text style={styles.text2}>10. Otokonoko</Text>
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