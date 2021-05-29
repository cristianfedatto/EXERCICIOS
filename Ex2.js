import React, {Component} from 'react';
import {Text} from 'react-native';

class Ex2 extends Component{
    state ={
     
            nome: 'FORD FUSION',
            velocidade: 0,
        
    }

    componentDidMount(){
        this.setState({velocidade: 100});
    }

    render(){
    let{nome,velocidade}=this.state;
        return (
            <Text>Automovel {nome} velocidade atual {velocidade} </Text>
        );
    }

}

export default Ex2;