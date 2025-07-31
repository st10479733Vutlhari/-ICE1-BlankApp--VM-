import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  const[count, setCount]= useState(0);
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  return (
    <View style={styles.container}>
      <Text style ={styles.title}>Simple Counter App</Text>
      <Text style={styles.counterText}>{count}</Text>
      <TouchableHighlight
      style={styles.button}
      onPress={incrementCount}
      >
        <Text style={styles.buttonText}>Increment Counter</Text>
      </TouchableHighlight>
      <TouchableHighlight
      onPress={decrementCount}
      >
        <Text style={styles.buttonText}>Decrement Counter</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },

   counterText: {
    fontSize: 48,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: 200,
    alignItems: 'center'

  },
  buttonText: {
    fontSize: 18,
    color: 'White',
  },

});


