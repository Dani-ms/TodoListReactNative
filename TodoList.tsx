import React from 'react';
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface IToDo {
  text: string;
  completed: boolean;
}

export default function TodoList(){
  const [value, setValue] = useState<string>("");
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);

  const addTaskSubmit = () =>{
    if (value.trim())
      setToDos([...toDoList, { text: value, completed: false }]);
    else showError(true);
    setValue("");
  }
  return(
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter your todo task..."
          value={value}
          onChangeText={e => {
            setValue(e);
            showError(false);
          }}
          
        />
         <Button title="Add Task" onPress={addTaskSubmit} />
      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 35,
    alignItems: "center"
  },
});
