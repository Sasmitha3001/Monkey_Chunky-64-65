
import * as React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image } from 'react-native';
import {Header} from 'react-native-elements'
import db from './localdb'
import phonicSounds from './phonicSoundButton';

//console.log(db["the"].chunks)

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      text:'',
      chunks:[],
      phones:[]
    }
  }
  render(){
    return(
      <View style={styles.container}>
         <Header
      centerComponent={{text:"Monkey Chunky",
                      style:{color:"brown",fontSize:20}}}
                      backgroundColor={"#90D312"}
      />
      <Image 
      style={styles.imageIcon}
      source={{
        uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"
      }}
      />
      
      <TextInput
      style={styles.inputBox}
      onChangeText={(Textvalue)=>{
        this.setState({
          text:Textvalue 
        })
      }}
      value={this.state.text}
      />
      <TouchableOpacity style={styles.goButton}
      onPress={()=>{
        var word=this.state.text.toLowerCase().trim();
        this.setState({
         chunks:db[word].chunks,
        phones:db[word].phones
        })

      }}>
        <Text style={styles.textButton}>GO</Text>
      </TouchableOpacity>

      <View>
    {this.state.chunks.map((item,index) =>{
          return(
            <View>
            <TouchableOpacity style={styles.buttonChunks}>
            <Text style={styles.displayText}>{item}</Text>
            </TouchableOpacity>
            <phonicSounds wordchunks={this.state.chunks[index]} soundchunk={this.state.phones[index]}/>
            </View>
          )
        })
      }
      </View>
     

      </View>
     
    )
  }
}
const styles=StyleSheet.create({
  inputBox:{
    borderWidth:4,
    width:"80%",
    height:50,
    marginTop:"25%",
    textAlign:'center',
    alignSelf:'center'

  },
  container:{
    flex:1,
    backgroundColor:'#8162E3'
  },
  goButton:{
    backgroundColor:"orange",
    width:"50%",
    height:50,
    alignSelf:"center",
    margin:20,

  },
  textButton:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold"
  },
  imageIcon:{
    width:150,
    height:150,
    marginLeft:100,
    alignSelf:'center'
  },
  displayText:{
    textAlign:"center",
    fontSize:20
  },
  buttonChunks:{
    backgroundColor:"white",
    width:"40%",
    height:50,
    alignSelf:"center",
    margin:20,
  }

})