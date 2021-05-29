import React, {Component} from 'react';
import {Text} from 'react-native';

class Ex1 extends Component{
    state ={
        produto:{
            nome:'SABONETE LUX',
            peso:90,
        } 
    }

    // constructor(props){
    //     super(props)
    // }

    render(){
       let{produto:{nome,peso}} = this.state;
        return (
            <Text>O produto {nome} possui {peso} gramas</Text>
        );
    }
}

export default Ex1;