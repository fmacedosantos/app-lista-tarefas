import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const handleAddTask = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <TextInput style={styles.enter}/>
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
