import React from 'react';
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface IToDo {
  text: string;
  done: boolean;
}
type Todo = {
  isLoading?: boolean,
}

export default function TodoList(){
  const [value, setValue] = useState<string>("");
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);
  const [isDone, setDone] = useState(false);

  const addTaskSubmit = () =>{
    if (value.trim())
      setToDos([...toDoList, { text: value, done: false }]);
    else showError(true);
    setValue("");
  }
  const removeItem = (index:number) =>{
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };
  const toggleDone = (index:number) =>{
    const newToDoList = [...toDoList];
    newToDoList[index].done = !newToDoList[index].done;
    setToDos(newToDoList);
  }
  return(
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter your todo task..."
          value={value}
          onChangeText={e => {
            setValue(e);
            showError(false);
          }}
          style={styles.inputBox}
        />
       
         <Button title="Add Task" onPress={addTaskSubmit} />
      </View>
      {error && (
        <Text style={styles.error}>Error: Input field is empty...</Text>
      )}
      {toDoList.length === 0 && <Text>No to do task available</Text>}
      {toDoList.map((toDo: IToDo, index: number) => (
        <View style={styles.listItem} key={`${index}_${toDo.text}`}>
           <BouncyCheckbox
              fillColor="black"
              unFillColor="#FFFFFF"
              iconStyle={{ borderColor: "black" }}
              isChecked={isDone}
              onPress={() => toggleDone(index)}
              style={styles.checkbox}
            />
          <Text
            style={[
              styles.task,
              { textDecorationLine: toDo.done ? "line-through" : "none" }
            ]}
          >
            {toDo.text}
          </Text>
         
          <Button
            title="Delete"
            onPress={() => {
              removeItem(index);
            }}
            color="crimson"
          />
        </View>
         
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 35,
    alignItems: "center"
  },
  checkbox: {
    width: 40, 
    minWidth: 40, height: 40,
  },
  error:{
    color:'red',
    fontWeight: '800'
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  inputBox: {
    width: 200,
    borderColor: "purple",
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: "purple"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10
  },
  addButton: {
    alignItems: "flex-end"
  },
  task: {
    width: 150
  },
});
