
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import TodoList from './src/todoList.screen/TodoList';
import { NavigationContainer,RouteProp  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackNavigatorParamsList = {
  Home: undefined;
  TodoList:undefined;
  
};

type TodoScreenRouteProp = RouteProp<RootStackNavigatorParamsList, 'TodoList'>;

type TodoScreenNavigationProp = StackNavigationProp<
  RootStackNavigatorParamsList,
  'TodoList'
>;

type Props = {
  route: TodoScreenRouteProp;
  navigation: TodoScreenNavigationProp;
};


function HomeScreen({ navigation }:Props ) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Todo"
        onPress={() => navigation.navigate('TodoList')}
      />
    </View>
  );
}

function TodoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{padding: 22, fontSize: 32,}}> Todo List App Daniela Moles</Text>
       <TodoList></TodoList>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

export default function App() {
  return (
    <>
      
      <NavigationContainer>
      <StatusBar style="auto" />

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TodoList" component={TodoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
