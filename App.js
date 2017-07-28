import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

 constructor(props){
 super(props);
 this.state = {timer: 0, color: '#58ACFA'};
 setInterval(() => {
   this.setState({timer: this.state.timer + 1, color: this.state.timer % 2 == 0 ? '#58ACFA' : '#F5A9F2'});
 }, 1000);
}

render(){
 return (
   <View style={{backgroundColor: this.state.color, flex:1, justifyContent:'center'}}>
    <Text style={{fontSize:50, color:'#EFFBFB', fontWeight:'bold', textAlign:'center'}}>{this.state.timer}</Text>
  </View>
 );
 }
}
