import React, {Component} from 'react';
import {Text} from 'react-native';

class Hello extends Component{
  //dentro do state sao criadas as variaveis de estado
state = {
  nome:'teste',
  contato:{
    email:'teste@teste.com',
    telefone:{
      telefon1:'12321321',
      telefon2:'2342342',
    }
  }
}

  //primeiro metodo a ser chamado quando a classe é executada/instanciada
constructor(props){
  //super dispoe propriedades para a tela 
  super(props);

}

//metodo que executa quando a classe termina de ser carregada
componentDidMount(){
//altera o valor da variavel de estado e reflete no layout
//this.setState({nome: 'CRISTIAN FEDATTO'});

let nomes = ['tales','manu'];
  console.log(nomes[0]);
  console.log(nomes[1]);

let pessoa = {nome:'tales',sobrenome:'born'};
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

let contatos = [
  {nome:'tales',sobrenome:'born'},
  {nome:'manu',sobrenome:'ferraz'}
];
console.log(contatos[0].nome);
console.log(contatos[1].sobrenome);
}
  render(){
    let {contato:{email}} = this.state;
    return (
      <Text>{email}</Text>
    );
  }
} 

export default Hello;