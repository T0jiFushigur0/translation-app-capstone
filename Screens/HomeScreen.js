import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';

export default class HomeScreen extends Component{
  render(){
    return(
    <View style={styles.container}>
     <View style={styles.view}>
     <Text style ={styles.header}> Translation App  </Text>   
      </View>
      <TouchableOpacity style={styles.button1} onPress={()=>this.props.navigation.navigate
      ("Spanish")}>
      <Text style={styles.text}>Spanish</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={()=>this.props.navigation.navigate
      ("French")}>
      <Text style={styles.text}>French</Text>
      </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={()=>this.props.navigation.navigate
      ("Japanese")}>
      <Text style={styles.text}>Japanese</Text>
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
      fontSize: 35,
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