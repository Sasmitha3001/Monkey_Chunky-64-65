import * as React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image } from 'react-native';
import {Header} from 'react-native-elements'
import {Audio} from 'expo-av'

export default class phonicSounds extends React.Component{
    constructor(props){
        super(props)
    }
    playSound=async(soundChunk)=>{
        var soundLink =
      'https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/' +
      soundChunk +
      '.mp3';
        await Audio.sound.createAsync(
            {uri:soundLink,},
            {shouldPlay:true}
        )
    }
    render(){
        return(
            <TouchableOpacity onPress={()=>{this.playSound(this.props.soundchunk)}}>
                <Text>{this.props.wordchunk}</Text>
            </TouchableOpacity>
        )
    }
}