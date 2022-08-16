import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Linking,
  TextInput
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Imagens
import logo from './assets/images/logo.jpg';
import whats from './assets/images/whatsapp.jpg';
import face from './assets/images/facebook.png';
import insta from './assets/images/instagram.png';

//Páginas do app
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={{
          padding: 10,
          width: 350,
          height: 250,
          marginBottom: 10,
        }}
      />
      <View style={styles.button}>
        <Button
          color="pink"
          title="Menu"
          fontFamily="cursive"
          onPress={() => navigation.navigate('Menu')}
        />
      </View>
      <Text></Text>
      <View style={styles.button}>
        <Button
          color="pink"
          title="Pedido"
          fontFamily="cursive"
          onPress={() => navigation.navigate('Pedido')}
        />
      </View>
      <Text></Text>
      <View style={styles.button}>
        <Button
          color="pink"
          title="Formas de Pagamento"
          fontFamily="cursive"
          onPress={() => navigation.navigate('pagto')}
        />
      </View>
      <Text></Text>
      <View style={styles.button}>
        <Button
          color="pink"
          title="Sobre nós"
          fontFamily="cursive"
          onPress={() => navigation.navigate('sobre')}
        />
      </View>
    </View>
  );
}

function Menu() {
  return (
    <SafeAreaView style={styles.back}>
      <ScrollView>
        <FlatList
          data={produtos}
          renderItem={({ item }) => (
            <View style={styles.menu}>
              <Image source={{ uri: item.photo }} style={styles.photo} />
              <Text style={styles.txt}>{item.key}</Text>
              <Text style={styles.price}>R$ {item.price}</Text>
              <View style={styles.button}>
                <Button color="pink" title="Pedir" onPress={this.adicionar} />
              </View>
            </View>
          )}></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
}

const pedido = () => {
  const [text, onChangeText] = React.useState('Fazer pedido');
  const [texto, onChangeTexto] = React.useState('Digite aqui');

  return (
    <View>
      <Text style={styles.pedido}> Pedidos </Text>
      <Text style={styles.text}> Nos informe o que deseja do nosso menu: </Text>
      <View>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <Text style={styles.text}>Qual vai ser a forma de pagamento: </Text>
      <View>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          onChangeText={onChangeTexto}
          value={texto}
        />
      </View>
      <Text></Text>
      <View style={styles.button}>
        <Button
          color="pink"
          title="Enviar"
          fontFamily="cursive"
          onPress={this.adicionar}
        />
      </View>
    </View>
  );
};

function pagto() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>Aceitamos:</Text>
      <Text></Text>
      <View style={styles.button}>
        <Button
          color="pink"
          title="Pix"
          fontFamily="cursive"
          onPress={this.adicionar}
        />
      </View>
      <Text></Text>
      <View style={styles.button}>
        <Button
          color="pink"
          title="Cartão"
          fontFamily="cursive"
          onPress={this.adicionar}
        />
      </View>
      <Text></Text>
      <View style={styles.button}>
        <Button
          color="pink"
          title="Dinheiro"
          fontFamily="cursive"
          onPress={this.adicionar}
        />
      </View>
    </ScrollView>
  );
}

function sobre() {
  return (
    <ScrollView style={styles.back}>
      <Image
        source={logo}
        style={{
          padding: -10,
          top: 10,
          width: 360,
          height: 300,
          marginBottom: 20,
        }}
      />
      <Text style={{ fontFamily: 'cursive', fontSize: 20, marginLeft: 8 }}>
        Felicidade é.. um docinho depois do almoço. Nós somos uma empresa que
        zela pela Felicidade do nosso cliente. Tudo é preparado com muito
        carinho.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          alignItems: 'center',
        }}>
        <TouchableHighlight onPress={() => Linking.openURL('https://instagram.com')}>
        <Image source={insta} style={styles.sobre} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => Linking.openURL('https://facebook.com/')}>
          <Image source={face} style={styles.sobre}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => Linking.openURL('https://whatsapp.com/')}>
        <Image source={whats} style={styles.sobre} />
        </TouchableHighlight>
      </View>
      <Text>@DeliciasNalu</Text>
    </ScrollView>
  );
}

function adicionar() {
  // Adiciona produto no carrinho
}
function deletar() {
  // Deleta produto do carrinho
}
const Stack = createNativeStackNavigator();
export default function App() {
  produtos = [
    {
      key: 'Bolo Banana',
      photo:
        'https://images.unsplash.com/photo-1603455908246-99e3a704acb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '19.95',
    },
    {
      key: 'Bolo Limão',
      photo:
        'https://images.unsplash.com/photo-1613680542429-3ff9a5e89900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxiYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: '22.3',
    },
    {
      key: 'Bolo Chocolate',
      photo:
        'https://images.unsplash.com/photo-1518091270798-06f27624a89e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxiYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: '25.99',
    },
    {
      key: 'Bolo Morango',
      photo:
        'https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM0fHxiYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: '15.99',
    },
    {
      key: 'Bolo Laranja',
      photo:
        'https://images.unsplash.com/photo-1531172079369-5f1a80aa8a99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxiYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: '16.8',
    },
    {
      key: 'Bolo Mertilo',
      photo:
        'https://images.unsplash.com/photo-1618426703623-c1b335803e07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHxiYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: '32',
    },
    {
      key: 'Torta Maça',
      photo:
        'https://images.unsplash.com/photo-1533192229167-ae67ddcc2d9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcwfHxiYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: '9.99',
    },
    {
      key: 'Torta Chocolate',
      photo:
        'https://images.unsplash.com/photo-1460380410874-537ecece3984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc4fHxiYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: '10.99',
    },
    {
      key: 'Torta Limão',
      photo:
        'https://images.unsplash.com/photo-1583350229022-55a5fb986ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      price: '21.2',
    },
    {
      key: 'Donuts',
      photo:
        'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3dlZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: '11.8',
    },
    {
      key: 'Pudim',
      photo:
        'https://images.unsplash.com/photo-1602572683088-609cef970fe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHN3ZWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: '11.8',
    },
    {
      key: 'Cupcake',
      photo:
        'https://images.unsplash.com/photo-1578534083109-58c374019dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHN3ZWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      price: '8.2',
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu' }} />
        <Stack.Screen name="Pedido" component={pedido} options={{ title:'Fazer Pedido'}} />
        <Stack.Screen name="pagto" component={pagto} options={{ title: 'Formas de Pagamento'}} />
        <Stack.Screen name="sobre" component={sobre} options={{ title: 'Sobre nós' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fefdf9',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  photo: {
    width: 350,
    height: 350,
    alignItems: 'center',
    margin: 15,
    borderRadius: 25,
  },
  menu: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#fefdf9',
  },
  txt: {
    fontFamily: 'cursive',
    fontSize: 30,
    padding: 5,
    textAlign: 'center',
  },
  price: {
    fontFamily: 'cursive',
    fontSize: 22,
    textAlign: 'center',
  },
  button: {
    padding: 6,
    textAlign: 'center',
    borderRadius: 50,
    margin: 1,
    backgroundColor: "pink",
    color:"white"
  },
  back: {
    backgroundColor: '#fefdf9',
    margin: 0,
    padding: 0,
  },
  sobre: {
    width: 50,
    height: 50,
    borderRadius: 40,
    margin: 20,
  },
  input: {
    padding: 10,
    margin: 10, borderColor: 'black'
  },
  pedido: {
    color:'white',
    backgroundColor: 'pink',
    padding:10,
    borderBottomEndRadius: 50,
    fontFamily: 'cursive',
    fontStyle: 'bold',
    fontSize: 35,
    borderColor: 'red',
    marginEnd: 10,
    position: 'relative'
  },
  text: {
    fontFamily: 'cursive',
    fontSize: 20,
    margin: 10,
    color: 'pink',
    padding: 10
  }
});
