import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = () => {
    Alert.alert('TAREFA', `${inputValue} adicionada.`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <TextInput style={styles.enter} value={inputValue}
        onChangeText={text => setInputValue(text)}/>
        <Button title='ADICIONAR TAREFA' onPress={handleAddTask}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4939ba',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
  },
  enter: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#5450d6',
    width: '80%',
    color: 'white',
    marginRight: 5
  }
});
