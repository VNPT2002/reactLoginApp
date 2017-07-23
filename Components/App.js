import React, {Component} from "react";
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            _user: "",
            _pwd : "",
            _result : "chưa login",
            _tonken : "..."
        }
    }

    Login(){
        /*
        fetch("http://192.168.1.6:82/demo/tasksh.nsf/api.xsp/readData",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "USERNAME":this.state._user,
                "PASSWORD":this.state._pwd
            })
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson);
            this.setState({
                kq:responseJson["_token"]
            });
        })
        */
    }
    render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <Text>LOGIN FORM</Text>
        </View>
        <View style={styles.box}>
          <TextInput
            style={{height: 40,width:300, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(_user) => this.setState({_user})}
            placeholder="Username"
            value={this.state._user}
          />
        </View>
        <View style={styles.box}>
          <TextInput
            style={{height: 40,width:300, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(_pwd) => this.setState({_pwd})}
            placeholder="Password"
            value={this.state._pwd}
          />
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={()=>{this.Login()}}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <Text>{this.state._result}</Text>
          <Text>{this.state._tonken}</Text>
        </View>        
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper:{flex:1, backgroundColor:"white", padding:50},
  box:{flex:1, alignItems:"center", justifyContent:"center"},
  box2:{flex:3,  alignItems:"center", justifyContent:"center"},
});