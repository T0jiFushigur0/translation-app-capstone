import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';

export default class HardScreenJ2 extends Component{
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
          <Text style={styles.text2}>1. Ohayou Gozaimasu </Text>
          <Text style={styles.text2}>2. Il Tenki Desu Ne</Text>
          <Text style={styles.text2}>3. Genki Desu Ka</Text>
          <Text style={styles.text2}>4. Hisashiburi</Text>
          <Text style={styles.text2}>5. Oyasumi Nasai</Text>
          <Text style={styles.text2}>6. Ja Mata</Text>
          <Text style={styles.text2}>7. Tadaima</Text>
          <Text style={styles.text2}>8. Okaeri Nasai</Text>
          <Text style={styles.text2}>9. Shitsurei Shimasu</Text>
          <Text style={styles.text2}>10. Otsukaresama Deshita</Text>
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