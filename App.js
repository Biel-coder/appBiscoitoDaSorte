import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textPhrase: '',
      img: require('./src/biscoito.png'),
      imgBreak: false
    };

    this.cookieBreaker = this.cookieBreaker.bind(this);
    this.cookieOn = this.cookieOn.bind(this);

    this.phrases = [
      'A vida trará coisas boas se tiveres paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Gente todo dia arruma os cabelos, por que não o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
      'Siga os bons e aprenda com eles.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',
      'O bom-senso vai mais longe do que muito conhecimento.',
      'Quem quer colher rosas deve suportar os espinhos.',
      'São os nossos amigos que nos ensinam as mais valiosas lições.',
      'Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.',
      'Aquele que se importa com o sentimento dos outros, não é um tolo.',
      'Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.',
      'Todo mundo é capaz de denominar uma dor, exceto quem a sente.',
      'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram trabalhando.'
    ]

  };

  cookieBreaker(){
  
    if(this.state.imgBreak){
      let phrases = ['Pegue outro biscoito !', 'Ah, você precisa abrir outro biscoito.', 'Este biscoito já está aberto.', 'Parece que este biscoito já está aberto.']
      let random = Math.floor(Math.random() * phrases.length)
      alert(phrases[random]);
      return
    }

    let randomNumber = Math.floor(Math.random() * this.phrases.length)

    this.setState({
      textPhrase: '"' + this.phrases[randomNumber] + '"',
      img: require('./src/biscoitoAberto.png'),
      imgBreak: true
    })
  }

  cookieOn(){
    this.setState({
      textPhrase: '',
      img: require('./src/biscoito.png'),
      imgBreak: false
    })
  }

  render(){
    return(
      <View style={styles.container}>
        
        <Image 
          style={styles.img}
          source={this.state.img}
        />

        <Text style={styles.textPhrase}>{this.state.textPhrase}</Text>

        <TouchableOpacity style={styles.btn} onPress={this.cookieBreaker}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Quebrar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.cookieOn}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Outro</Text>
          </View>
        </TouchableOpacity>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textPhrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    margin: 10,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})


export default App