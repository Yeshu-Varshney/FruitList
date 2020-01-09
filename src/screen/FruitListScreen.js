import React from 'react';
import {View,Button,StyleSheet,FlatList,Text,Image,ActivityIndicator,TouchableOpacity} from 'react-native'
import axios from "axios"
import SearchInput, { createFilter } from 'react-native-search-filter';
var expandItem=[]
export default class App extends React.Component {

    constructor() {
        super();
         this.state = {
          categorydata : [],
          subcategoryData:[],
          isLoading:true,
          expandItem:[],
          expandItems:[]
        }
      }

   componentWillMount(){
    fetch('https://api.myjson.com/bins/mbtzw')
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({categorydata:responseJson.categories})
        this.setState({isLoading:false})
    })
    .catch((error) => {
      console.error(error);
    });

   }
  expandItems=(item)=>{

    this.state.expandItem.push(item);
    
this.setState({expandItems:this.state.expandItem})



  }
  searchUpdated(term) {
    let filteredFruits= this.state.categorydata
    let filterFruits= filteredFruits.filter((poet) => {
      let fruits =  poet.category.categoryName.toLowerCase()
      return fruits.indexOf(
       term.toLowerCase()) !== -1
    })
    this.setState({
      categorydata:filterFruits
    })
  }
  render() {
    return (
     <View style={styles.container}>
         <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Try searching fat,sauces"
          />
         {this.state.isLoading?
   <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>:
   null}
 <FlatList
   vertical
   data={this.state.categorydata}
   extraData={this.state.expandItems}
   keyExtractor={(item, index) => index}
   renderItem={({item,index}) => 
   <View style={styles.fruitContainer}>
<Image style={styles.image} source={require('../assets/fruit.png')} />

   <Text style={styles.text}> {item.category.categoryName} </Text> 
   <TouchableOpacity style={{width:'20%',marginTop:'6%'}} onPress={this.expandItems.bind(this,item.category.categoryName)}> 
   <Image style={styles.expandimage} source={require('../assets/plus-sign.png')} />
   </TouchableOpacity>
   
   {item.category.subcategories.map((data) => {
       {this.state.expandItems.indexOf(item.category.categoryName)!==-1?
   <View style={styles.fruitContainer}>
   <Text style={styles.text}> {data.subCategoryname} </Text> 
       </View>
   
       :null}
   })}
   </View>
   }
   />
  

</View>
    );
  }
}
const styles = StyleSheet.create ({
    container: {
       flex:1,
       backgroundColor:'grey',
       justifyContent:'center'
    },
    fruitContainer: {
        flex:1,
        flexDirection:'row',
        width:'90%',
        backgroundColor:'white',
        marginTop:'5%',
        marginLeft:'5%',
        marginRight:'5%'
     },
    text: {
       
       padding: 25,
       borderColor: 'black',
       
       width:'60%'
    },
    button:{
        marginTop:'40%'
    },
    image:{
        width:'20%',
        height:'60%',marginLeft:'5%',
        backgroundColor:'green',borderRadius:5,
        marginTop:'3%',
        marginBottom:'5%'
    },
    expandimage:{
        width:'20%',
        height:'20%',
    
        marginTop:'7%',
        marginLeft:'15%'
    },
    loader:{
        marginTop:'40%',
        width:40,
        height:40
    },
    searchInput:{
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1,
        backgroundColor:'white'
      }

 })