import React from 'react';
import {View,Button,StyleSheet} from 'react-native'

export default class App extends React.Component {
    componentWillMount(){

    }
    handlePress=()=>{
this.props.navigation.navigate("FruitListScreen")
    }

  render() {
    return (
     <View style={styles.container}>
 <Button
         onPress={this.handlePress.bind()}
         title = "Approved Fruits List"
         color = "green"
         style={styles.button}
      />

     </View>
    );
  }
}
const styles = StyleSheet.create ({
    container: {
       alignItems: 'center',
    },
    text: {
       borderWidth: 1,
       padding: 25,
       borderColor: 'black',
       backgroundColor: 'red'
    },
    button:{
        marginTop:300
    }
 })