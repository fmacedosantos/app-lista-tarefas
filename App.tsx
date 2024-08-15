import { StatusBar } from 'expo-status-bar';
import { useReducer, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const listener = (state: any, action: any) => {
  switch(action.type) {
    case 'add-new-task':
      return {
        tasks: [...state.tasks, {name: action.inputValue, isDone: false}]
      }
    default:
      break;
  }
}

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [state, dispatch] = useReducer(listener, {tasks: []})

  const handleAddTask = () => {
    dispatch({type: 'add-new-task', inputValue})
  }

  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <TextInput style={styles.enter} value={inputValue}
        onChangeText={text => setInputValue(text)}/>
        <Button title='ADICIONAR TAREFA' onPress={handleAddTask}/>
      </View>

      {state.tasks.map((task: any) => <Text>{task.name}</Text>)}

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
