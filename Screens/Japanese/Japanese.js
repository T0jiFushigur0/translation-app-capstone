import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';

export default class Japanese extends Component{
  render(){
    return(
    <View style={styles.container}>
     <View style={styles.view}>
     <Text style ={styles.header}> Japanese  </Text>   
      </View>
      <TouchableOpacity style={styles.button1} onPress={()=>this.props.navigation.navigate
      ("BasicWordsJ")}>
      <Text style={styles.text}>Basic Words</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={()=>this.props.navigation.navigate
      ("MediumWordsJ")}>
      <Text style={styles.text}>Medium Words</Text>
      </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={()=>this.props.navigation.navigate
      ("HardWordsJ")}>
      <Text style={styles.text}>Hard Words</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({



    container:{
      flex: 1,
      backgroundColor: '#4ddbff'
    },
    view:{
      flex: 0.25,
      justifyContent: 'center',
      alignItems: 'center'
    },
    header:{
      fontSize: 25,
      marginTop: 2,
      
    },
    button1:{
      flex: 0.25,
      marginTop: 50,
      borderRadius: 40,
      marginLeft: 50,
      marginRight: 50,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text:{
      fontSize: 30,
      fontWeight: 'bold',
      
    },
      button2:{
      flex: 0.2,
      marginTop: 50,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 40,
       backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    },
})